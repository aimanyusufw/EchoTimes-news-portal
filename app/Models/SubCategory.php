<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SubCategory extends Model
{
    protected $fillable = ["name", "slug", "description", "category_id"];

    /** 
     * Relation with category model
     * SubCategory belongs to category
     */
    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    /** 
     * Relation with articles model
     * SubCategory has many articles
     */
    public function articles()
    {
        return $this->hasMany(Article::class);
    }
}
