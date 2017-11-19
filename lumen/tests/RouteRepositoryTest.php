<?php

use Laravel\Lumen\Testing\DatabaseTransactions;
use App\Contracts\RouteRepository;
use App\Models\Route;

class RouteRepositoryTest extends TestCase
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

        $this->repository = app(RouteRepository::class);

        $this->route = with(new Route)->setPath([
            ['22.372080', '114.107876'],
            ['22.284418', '114.159509'],
            ['22.326441', '114.167810'],
        ]);
    }

    /**
     * Test save a new route into the repository.
     *
     * @return void
     */
    public function testCreateRoute()
    {
        $this->assertNull($this->route->getToken());
        $created = $this->repository->create($this->route);
        $this->assertTrue($created);
        $this->assertNotNull($this->route->getToken());
    }

    /**
     * Test update an existing route in the repository.
     *
     * @return void
     */
    public function testUpdateRoute()
    {
        // Test nonexistent route
        $updated = $this->repository->update($this->route);
        $this->assertFalse($updated);

        // Test existing route
        $this->repository->create($this->route);
        $this->route->setStatus(Route::STATUS_FAILED)->setError('test');
        $updated = $this->repository->update($this->route);
        $this->assertTrue($updated);

        $route = $this->repository->findByToken($this->route->getToken());
        $this->assertEquals(Route::STATUS_FAILED, $route->getStatus());
        $this->assertEquals('test', $route->getError());
    }

    /**
     * Test retrieve a route by its token.
     *
     * @return void
     */
    public function testFindByToken()
    {
        // Test nonexistent route
        $this->assertNull($this->route->getToken());

        // Test existing route
        $this->repository->create($this->route);
        $token = $this->route->getToken();
        $route = $this->repository->findByToken($token);
        $this->assertNotNull($route);
        $this->assertEquals($token, $route->getToken());
    }
}
