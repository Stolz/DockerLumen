<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

// Home page. Show available endpoints
$router->get('/', function () {

    // URI for the database management panel
    $adminerUri = http_build_query([
        'pgsql' =>  env('DB_HOST'),
        'username' => env('DB_USERNAME'),
        'db' => env('DB_DATABASE'),
        'ns' => 'public',
    ]);

    return [
        "GET adminer.php?$adminerUri" => [
            'description' => 'Database management dashboard',
            'password' => env('DB_PASSWORD'),
        ],
        'POST /route' => [
            'description' => 'Submit a new route',
            'sample_payload' => [
                ['22.372080', '114.107876'],
                ['22.284418', '114.159509'],
                ['22.326441', '114.167810'],
            ],
        ],
        'GET /route/{token}' => [
            'description' => 'Get route by token',
            'sample_token' => 'eeb9aa5e-a01c-4346-ac42-1f3a47b8a229'
        ],
    ];
});

// Submit a route
$router->post('route', 'RouteController@addRoute');

// Get route information
$router->get('route/{token}', 'RouteController@getRoute');
