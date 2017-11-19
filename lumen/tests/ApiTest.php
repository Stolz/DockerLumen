<?php

use App\Contracts\RouteRepository;
use App\Models\Route;
use Laravel\Lumen\Testing\DatabaseTransactions;

class ApiTest extends TestCase
{
    use DatabaseTransactions;

    /**
     * Run before each test.
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();

        $this->route = with(new Route)->setPath([
            ['22.372080', '114.107876'],
            ['22.284418', '114.159509'],
            ['22.326441', '114.167810'],
        ]);
    }

    /**
     * Test endpoint for adding a route.
     *
     * @return void
     */
    public function testAddRouteEndpoint()
    {
        // Test invalid payload
        $this->post('route', ['fooBar'])->assertResponseStatus(422);
        $this->seeJsonStructure(['error']);

        // Test valid payload
        $this->post('route', $this->route->getPath());
        $this->assertResponseOk();
        $this->seeJsonStructure(['token']);
    }

    /**
     * Test endpoint for retrieving a route.
     *
     * @return void
     */
    public function testGetRouteEndpoint()
    {
        // Test nonexistent token
        $this->get('route/token-1-2-3')->assertResponseStatus(404);
        $this->seeJsonStructure(['error']);

        // Test valid token
        app(RouteRepository::class)->create($this->route);
        $token = $this->route->getToken();
        $this->assertNotNull($token);
        $this->get("route/$token")->assertResponseOk();
        $this->seeJsonStructure(['status']);
    }
}
