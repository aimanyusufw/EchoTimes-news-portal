<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use SoftDeletes;

    protected $fillable = ["name", "slug", "description"];

    /** 
     * Relation with sub category model
     * Category has many sub category
     */
    public function subCategories()
    {
        return $this->hasMany(SubCategory::class);
    }

    /** 
     * Relation with articles model
     * Category has many articles
     */
    public function articles()
    {
        return $this->hasMany(Article::class);
    }
}
