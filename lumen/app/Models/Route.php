<?php

namespace App\Models;

class Route extends Model
{
    /**
     * Possible status of the route.
     * @const string
     */
    const STATUS_UNPROCESSED = 'pending';
    const STATUS_PROCESSING = 'in progress';
    const STATUS_SUCCESSFUL = 'success';
    const STATUS_FAILED = 'failure';

    /**
     * Token that identifies the route.
     *
     * @var string
     */
    protected $token;

    /**
     * Current status of the route.
     *
     * @var string
     */
    protected $status = self::STATUS_UNPROCESSED;

    /**
     * List of locations (latitude, longitude) of the route.
     * First item on the list is the start location.
     *
     * @var array
     */
    protected $path = [];

    /**
     * Total route distance (in meters) after following the shortest driving path.
     *
     * @var int
     */
    protected $totalDistance;

    /**
     * Total route time (in seconds) after following the shortest driving path.
     *
     * @var int
     */
    protected $totalTime;

    /**
     * Last calculation error.
     *
     * @var string
     */
    protected $error;

    /**
     * Set the token of the route.
     *
     * @param  string $token
     * @return self
     */
    public function setToken(string $token): self
    {
        // Set token
        $this->token = $token;

        // Allow method chaining
        return $this;
    }

    /**
     * Set the status of the route.
     *
     * @param  string $status
     * @return self
     * @throws \InvalidArgumentException
     */
    public function setStatus(string $status): self
    {
        // Normalize status name
        $status = strtolower($status);

        // Validate status
        $validStatus = [
            static::STATUS_UNPROCESSED,
            static::STATUS_PROCESSING,
            static::STATUS_SUCCESSFUL,
            static::STATUS_FAILED,
        ];
        if( ! in_array($status, $validStatus, true))
            throw new \InvalidArgumentException('Invalid status');

        // Set status
        $this->status = $status;

        // Allow method chaining
        return $this;
    }

    /**
     * Set the path of the route.
     *
     * @param  array $path
     * @return self
     * @throws \InvalidArgumentException
     */
    public function setPath(array $path): self
    {
        // Validate path
        if(count($path) < 2)
            throw new \InvalidArgumentException('Invalid path');

        // Set path
        $this->path = $path;

        // Allow method chaining
        return $this;
    }

    /**
     * Set the total distance of the route.
     *
     * @param  int $distance
     * @return self
     */
    public function setTotalDistance(int $distance): self
    {
        // Set distance
        $this->totalDistance = $distance;

        // Allow method chaining
        return $this;
    }

    /**
     * Set the total time of the route.
     *
     * @param  int $time
     * @return self
     */
    public function setTotalTime(int $time): self
    {
        // Set distance
        $this->totalTime = $time;

        // Allow method chaining
        return $this;
    }

    /**
     * Set the last error of the route.
     *
     * @param  string|null $error
     * @return self
     */
    public function setError($error): self
    {
        // Set error
        $this->error = $error;

        // Allow method chaining
        return $this;
    }

    /**
     * Get the token of the route.
     *
     * @return string|null
     */
    public function getToken()
    {
        return $this->token;
    }

    /**
     * Get the status of the route.
     *
     * @return string
     */
    public function getStatus(): string
    {
        return $this->status;
    }

    /**
     * Get the path of the route.
     *
     * @return array
     */
    public function getPath(): array
    {
        return $this->path;
    }

    /**
     * Get the total distance of the route.
     *
     * @return int|null
     */
    public function getTotalDistance()
    {
        return $this->totalDistance;
    }

    /**
     * Get the total time of the route.
     *
     * @return int|null
     */
    public function getTotalTime()
    {
        return $this->totalTime;
    }

    /**
     * Get the last calculation error.
     *
     * @return string|null
     */
    public function getError()
    {
        return $this->error;
    }

    /**
     * Convert the route to its array representation.
     *
     * @return array
     */
    public function toArray(): array
    {
        return [
            'token' => $this->getToken(),
            'status' => $this->getStatus(),
            'path' => $this->getPath(),
            'total_distance' => $this->getTotalDistance(),
            'total_time' => $this->getTotalTime(),
            'error' => $this->getError(),
        ];
    }
}
