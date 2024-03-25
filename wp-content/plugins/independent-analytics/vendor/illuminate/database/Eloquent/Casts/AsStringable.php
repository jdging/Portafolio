<?php

namespace IAWP_SCOPED\Illuminate\Database\Eloquent\Casts;

use IAWP_SCOPED\Illuminate\Contracts\Database\Eloquent\Castable;
use IAWP_SCOPED\Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use IAWP_SCOPED\Illuminate\Support\Str;
/** @internal */
class AsStringable implements Castable
{
    /**
     * Get the caster class to use when casting from / to this cast target.
     *
     * @param  array  $arguments
     * @return object|string
     */
    public static function castUsing(array $arguments)
    {
        return new class implements CastsAttributes
        {
            public function get($model, $key, $value, $attributes)
            {
                return isset($value) ? Str::of($value) : null;
            }
            public function set($model, $key, $value, $attributes)
            {
                return isset($value) ? (string) $value : null;
            }
        };
    }
}
