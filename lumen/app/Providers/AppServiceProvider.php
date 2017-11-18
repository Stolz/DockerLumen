<?php

namespace App\Providers;

use App\Contracts\DrivingRouteService;
use App\Contracts\RouteRepository;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // Register repository implementations
        $this->app->bind(RouteRepository::class, function () {
            return new \App\Repositories\RouteRepositoryViaSql();
        });

        // Register service implementations
        $this->app->bind(DrivingRouteService::class, function () {
            $client = new \Http\Adapter\Guzzle6\Client();
            $factory = new \Http\Message\MessageFactory\GuzzleMessageFactory();

            return new \App\Services\DrivingRouteServiceViaGoogleMapsApi($client, $factory);
        });
    }
}
