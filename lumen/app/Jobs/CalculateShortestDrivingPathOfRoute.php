<?php

namespace App\Jobs;

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
     * @param  \App\Contracts\RouteRepository $repository
     * @return void
     */
    public function handle(\App\Contracts\RouteRepository $repository)
    {
        // Define a shorthand for better code legibility
        $route = $this->route;

        // Update route status
        $route->setStatus(Route::STATUS_PROCESSING);
        $repository->update($route);

        try
        {
            // TODO
            if(true)
                throw new \Exception('TODO');

            // Success
            $route->setStatus(Route::STATUS_SUCCESSFUL);
            $repository->update($route);
        }
        catch(\Exception $exception)
        {
            // Update route error status
            $route->setStatus(Route::STATUS_FAILED)->setError($exception->getMessage());
            $repository->update($route);

            // Rethrow exception for marking the job as failed
            throw $exception;
        }
    }
}
