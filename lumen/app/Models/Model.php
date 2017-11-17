<?php

namespace App\Models;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Contracts\Support\Jsonable;

abstract class Model implements Arrayable, Jsonable
{
    /**
     * Convert the model to its array representation.
     *
     * @return array
     */
    abstract public function toArray(): array;

    /**
     * Convert the model to its JSON representation.
     *
     * @param  int $options
     * @return string
     */
    public function toJson($options = 0): string
    {
        return json_encode($this->toArray(), $options);
    }
}
