<?php

namespace App\Contracts;

use App\Models\Route;

interface RouteRepository
{
    /**
     * Save a new route into the repository.
     *
     * @param \App\Models\Route $route
     *
     * @return bool
     */
    public function create(Route $route): bool;

    /**
     * Update an existing route in the repository.
     *
     * @param \App\Models\Route $route
     *
     * @return bool
     */
    public function update(Route $route): bool;

    /**
     * Retrieve a route by its token.
     *
     * @param string $token
     *
     * @return \App\Models\Route|null
     */
    public function findByToken(string $token);
}
