<?php

namespace App\Contracts;

interface DrivingRouteService
{
    /**
     * Calculate the order at which the given locations should be driven for the route to be the shortest possible.
     * The first location is assumed to be the fixed starting point.
     *
     * Total time and distance of the optimized route is also returned.
     *
     * @param  array $locations
     * @return array
     */
    public function optimizeForDistance(array $locations): array;
}
