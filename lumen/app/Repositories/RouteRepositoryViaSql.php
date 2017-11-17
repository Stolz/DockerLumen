<?php

namespace App\Repositories;

use App\Contracts\RouteRepository;
use App\Models\Route;
use Webpatser\Uuid\Uuid;

class RouteRepositoryViaSql implements RouteRepository
{
    /**
     * Begin a new query on the model table.
     *
     * @return \Illuminate\Database\Query\Builder
     */
    protected function query(): \Illuminate\Database\Query\Builder
    {
        return clone app('db')->table('routes');
    }

    /**
     * Save a new route into the repository.
     *
     * @param  \App\Models\Route $route
     * @return bool
     */
    public function create(Route $route): bool
    {
        $columns = $route->toArray();
        $columns['token'] = Uuid::generate(4);
        $columns['path'] = json_encode($columns['path']);

        if( ! $this->query()->insert($columns))
            return false;

        $route->setToken($columns['token']);

        return true;
    }

    /**
     * Update an existing route in the repository.
     *
     * @param  \App\Models\Route $route
     * @return bool
     */
    public function update(Route $route): bool
    {
        $columns = $route->toArray();
        $columns['path'] = json_encode($columns['path']);

        return $this->query()->whereToken($route->getToken())->limit(1)->update($columns);
    }

    /**
     * Retrieve a route by its token.
     *
     * @param  string $token
     * @return \App\Models\Route|null
     */
    public function findByToken(string $token)
    {
        $found = $this->query()->whereToken($token)->first();
        if( ! $found)
            return null;

        // Set non nullable columns
        $route = with(new Route)
        ->setToken($found->token)
        ->setStatus($found->status)
        ->setPath(json_decode($found->path));

        // Set nullable columns
        if( ! is_null($found->{'total_distance'}))
            $route->setTotalDistance($found->{'total_distance'});
        if( ! is_null($found->{'total_time'}))
            $route->setTotalTime($found->{'total_time'});
        if( ! is_null($found->error))
            $route->setError($found->error);

        return $route;
    }
}
