<?php

namespace App\Http\Controllers;

use App\Models\Route;
use App\Jobs\CalculateShortestDrivingPathOfRoute;

class RouteController extends Controller
{
    /**
     * Instance of the repository used to interact with routes.
     *
     * @var \App\Contracts\RouteRepository
     */
    protected $repository;

    /**
     * Class constructor.
     *
     * Inject the dependencies.
     *
     * @param  \App\Contracts\RouteRepository $repository
     * @return void
     */
    public function __construct(\App\Contracts\RouteRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * Add a route to the repository and dispatch a background job to process it.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function addRoute(\Illuminate\Http\Request $request)
    {
        // Create route
        try
        {
            $path = (array) $request->input();
            $route = with(new Route)->setPath($path);
        }
        catch(\InvalidArgumentException $exception)
        {
            return ['error' => $exception->getMessage()];
        }

        // Save route into repository
        $saved = $this->repository->create($route);
        if( ! $saved)
            return ['error' => 'Unable to save route into repository'];

        // Dispatch a background job to calculate shortest driving path
        $job = new CalculateShortestDrivingPathOfRoute($route);
        dispatch($job);

        // Return route token
        return ['token' => $route->getToken()];
    }

    /**
     * Retrieve a route from the repository by its token.
     *
     * @param  string $token
     * @return \Illuminate\Http\JsonResponse
     */
    public function getRoute(string $token)
    {
        // Get route from repository
        $route = $this->repository->findByToken($token);
        if( ! $route)
            return ['error' => 'Route not found'];

        // Generate response depending on route status ...
        $routeStatus = $route->getStatus();

        // ... route has been succefully processed
        if($routeStatus === Route::STATUS_SUCCESSFUL)
            return array_except($route->toArray(), ['token', 'error']);

        // ... route calculation has failed
        if($routeStatus === Route::STATUS_FAILED)
            return array_only($route->toArray(), ['status', 'error']);

        // ... route has not been processed yet
        return ['status' => $routeStatus];
    }
}
