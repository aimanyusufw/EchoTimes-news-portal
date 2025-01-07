<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Like extends Model
{
    use SoftDeletes;

    protected $fillable = ['user_id', 'likeable_id', 'likeable_type'];

    /** 
     * Morph likeable
     */
    public function likeable()
    {
        return $this->morphTo();
    }
}
