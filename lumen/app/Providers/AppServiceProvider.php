<?php

namespace App\Providers;

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
        $this->app->bind(\App\Contracts\RouteRepository::class, function () {
            return new \App\Repositories\RouteRepositoryViaSql();
        });
    }
}
