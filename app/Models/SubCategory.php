<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SubCategory extends Model
{
    use SoftDeletes;

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
