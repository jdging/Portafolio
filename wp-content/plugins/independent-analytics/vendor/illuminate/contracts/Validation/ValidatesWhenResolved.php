<?php

namespace IAWP_SCOPED\Illuminate\Contracts\Validation;

/** @internal */
interface ValidatesWhenResolved
{
    /**
     * Validate the given class instance.
     *
     * @return void
     */
    public function validateResolved();
}
