<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    protected $fillable = ['user_id', 'likeable_id', 'likeable_type'];

    /** 
     * Morph likeable
     */
    public function likeable()
    {
        return $this->morphTo();
    }
}
