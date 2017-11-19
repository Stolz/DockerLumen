<?php

use App\Contracts\DrivingRouteService;

class DrivingRouteServiceTest extends TestCase
{
    /**
     * Run before each test.
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();

        $this->service = app(DrivingRouteService::class);

        $this->locations = [
            'Valencia, Spain',
            'Madrid, Spain',
            'Cuenca, Spain',
            'Lugo, Spain',
            'Santander, Spain',
        ];
    }

    /**
     * Test optimize driving route for distance.
     *
     * @expectedException \RuntimeException
     * @return void
     */
    public function testOptimizeRouteForDistance()
    {
        // Test valid locations
        $expected = [
            'waypoints' => [
                array_search('Valencia, Spain', $this->locations, true),
                array_search('Cuenca, Spain', $this->locations, true),
                array_search('Madrid, Spain', $this->locations, true),
                array_search('Santander, Spain', $this->locations, true),
                array_search('Lugo, Spain', $this->locations, true),
            ],
            'cost' => [
                'distance' => 1214244,
                'duration' => 44115,
            ]
        ];
        $actual = $this->service->optimizeForDistance($this->locations);
        $this->assertEquals($expected, $actual);

        // Test invalid locations
        $this->service->optimizeForDistance([]);
    }
}
