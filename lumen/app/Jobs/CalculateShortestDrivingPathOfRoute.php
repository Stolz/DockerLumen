<?php

namespace App\Jobs;

use App\Contracts\DrivingRouteService;
use App\Contracts\RouteRepository;
use App\Models\Route;

class CalculateShortestDrivingPathOfRoute extends Job
{
    /**
     * Route to be calculated.
     *
     * @var \App\Models\Route
     */
    protected $route;

    /**
     * Create a new job instance.
     *
     * @param  \App\Models\Route $route
     * @return void
     */
    public function __construct(Route $route)
    {
        $this->route = $route;
    }

    /**
     * Execute the job.
     *
     * @param  \App\Contracts\RouteRepository $routeRepository
     * @param  \App\Contracts\DrivingRouteService $routeService
     * @return void
     */
    public function handle(RouteRepository $routeRepository, DrivingRouteService $drivingRouteService)
    {
        // Define a shorthand for better code legibility
        $route = $this->route;

        // Update route status
        $route->setStatus(Route::STATUS_PROCESSING);
        $routeRepository->update($route);

        try
        {
            // Calculated optimized route
            $this->optimizeRouteUsingService($route, $drivingRouteService);

            // Update route
            $routeRepository->update($route);
        }
        catch(\Exception $exception)
        {
            // Update route error status
            $route->setStatus(Route::STATUS_FAILED)->setError($exception->getMessage());
            $routeRepository->update($route);

            // Rethrow exception for marking the job as failed
            throw $exception;
        }
    }

    /**
     * Optimize a route using a route service.
     *
     * @param  \App\Models\Route $route
     * @param  \App\Contracts\DrivingRouteService $routeService
     * @return void
     */
    protected function optimizeRouteUsingService(Route $route, DrivingRouteService $drivingRouteService)
    {
        // Calculated optimized route
        $path = $route->getPath();
        $optimized = $drivingRouteService->optimizeForDistance($path);

        // Rearrange path in the optimized order
        $optimizedPath = [];
        foreach($optimized['waypoints'] as $originalOrder)
        {
            $optimizedPath[] = $path[$originalOrder];
        }

        // Update route information
        $route->setError(null)
        ->setStatus(Route::STATUS_SUCCESSFUL)
        ->setPath($optimizedPath)
        ->setTotalDistance($optimized['cost']['distance'])
        ->setTotalTime($optimized['cost']['duration']);
    }
}
