<?php

namespace App\Services;

use App\Contracts\DrivingRouteService;
use Ivory\GoogleMap\Base\Coordinate;
use Ivory\GoogleMap\Service\Base\Location\AddressLocation;
use Ivory\GoogleMap\Service\Base\Location\CoordinateLocation;
use Ivory\GoogleMap\Service\Base\Location\LocationInterface;
use Ivory\GoogleMap\Service\Base\TravelMode;
use Ivory\GoogleMap\Service\Base\UnitSystem;
use Ivory\GoogleMap\Service\DistanceMatrix\DistanceMatrixService;
use Ivory\GoogleMap\Service\DistanceMatrix\Request\DistanceMatrixRequest;

class DrivingRouteServiceViaGoogleMapsApi implements DrivingRouteService
{
    /**
     * Instance of a PSR-7 http client.
     *
     * @var \Http\Client\HttpClient
     */
    protected $httpClient;

    /**
     * Instance of a PSR-7 Request and Response factory.
     *
     * @var \Http\Message\MessageFactory
     */
    protected $messageFactory;

    /**
     * Class constructor.
     *
     * Inject the dependencies.
     *
     * @param \Http\Client\HttpClient $httpClient
     * @param \Http\Message\MessageFactory $messageFactory
     *
     * @return void
     */
    public function __construct(\Http\Client\HttpClient $httpClient, \Http\Message\MessageFactory $messageFactory)
    {
        $this->httpClient = $httpClient;
        $this->messageFactory = $messageFactory;
    }

    /**
     * Calculate the order at which the given locations should be driven for the route to be the shortest possible.
     * The first location is assumed to be the fixed starting point.
     *
     * Total time and distance of the optimized route is also returned.
     *
     * @param  array $locations
     * @return array
     */
    public function optimizeForDistance(array $locations): array
    {
        // Save key of starting point
        reset($locations);
        $start = key($locations);

        // Calculate distances and times between all locations
        $matrix = $this->calculateMatrix($locations);

        // Since the starting point is fixed, possible routes are the permutations of the remaining locations
        $permutations = array_slice(array_keys($locations), 1);

        // Calculate cost of driving each permutation starting at the first location
        $routes = [];
        foreach($this->permutations($permutations) as $waypoints)
        {
            // Add back starting point to the list of waypoints
            array_unshift($waypoints, $start);

            // Store route using distance as array key so later is easy to pick the shortest
            $cost = $this->calculateRouteCost($waypoints, $matrix);
            $routes[$cost['distance']] = compact('waypoints', 'cost');
        }

        // Sort routes by distance
        ksort($routes);

        // Shortest one is the optimized one
        return array_shift($routes);
    }

    /**
     * Calculate all distances and times between multiple locations.
     *
     * @param array $locations
     * @return array
     * @throws \RuntimeException
     */
    protected function calculateMatrix(array $locations) : array
    {
        // Save key of starting point
        reset($locations);
        $start = key($locations);
        $destinations = $this->makeMultipleLocations($locations);

        // Calculate distance matrix using GoogleMap Api wrapper
        $request = new DistanceMatrixRequest($destinations, $destinations);
        $request->setUnitSystem(UnitSystem::METRIC);
        $request->setTravelMode(TravelMode::DRIVING);
        $matrixService = new DistanceMatrixService($this->httpClient, $this->messageFactory);
        $response = $matrixService->process($request);

        // Validate response
        $status = (string) $response->getStatus();
        if($status !== 'OK')
            throw new \RuntimeException("DistanceMatrixService: $status");

        // Build matrix of distance and duration
        $matrix = [];
        foreach($response->getRows() as $origin => $row)
        {
            foreach($row->getElements() as $destination => $element)
            {
                // Ignore nonsense cases
                if($origin === $destination or $destination === $start)
                    continue;

                if($element->getStatus() !== 'OK')
                    throw new \RuntimeException("DistanceMatrixService location: $status");

                $matrix[$origin][$destination] = [
                    'distance' => $element->getDistance()->getValue(),
                    'duration' => $element->getDuration()->getValue(),
                ];
            }
        }

        return $matrix;
    }

    /**
     * Calculate total cost of a route according to a given matrix, assuming waipoints are visited in order.
     *
     * @param array $waypoints
     * @param array $matrix
     * @return array
     */
    public function calculateRouteCost(array $waypoints, array $matrix): array
    {
        $distance = 0;
        $duration = 0;
        $from = array_shift($waypoints);

        foreach($waypoints as $to)
        {
            $distance += $matrix[$from][$to]['distance'];
            $duration += $matrix[$from][$to]['duration'];
            $from = $to;
        }

        return compact('distance', 'duration');
    }

    /**
     * Create a location instance from its coordinate or name representation.
     *
     * @param  mixed $location
     * @return \Ivory\GoogleMap\Service\Base\Location\LocationInterface
     */
    protected function makeLocation($location): LocationInterface
    {
        // Coordinate
        if(is_array($location))
            return new CoordinateLocation(new Coordinate($location[0], $location[1]));

        // Regular location
        return new AddressLocation((string) $location);
    }

    /**
     * Create multiple location instances from their coordinate or name representation.
     *
     * @param  array $locations
     * @return array
     */
    protected function makeMultipleLocations(array $locations): array
    {
        return array_map(function ($location) {
            return $this->makeLocation($location);
        }, $locations);
    }

    /**
     * Helper function to generate all possible permutations of an array.
     *
     * @param  array $elements
     * @return Generator
     */
    protected function permutations(array $elements)
    {
        if (count($elements) <= 1)
        {
            yield $elements;
        }
        else
        {
            foreach ($this->permutations(array_slice($elements, 1)) as $permutation)
            {
                foreach (range(0, count($elements) - 1) as $i)
                {
                    yield array_merge(array_slice($permutation, 0, $i), [$elements[0]], array_slice($permutation, $i));
                }
            }
        }
    }
}
