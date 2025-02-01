<?php

namespace App\Models;

use Awcodes\Curator\Models\Media;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Tags\HasTags;

class Article extends Model
{
    use SoftDeletes, HasTags, HasFactory;

    protected $fillable = [
        "title",
        "slug",
        "content",
        "short_description",
        "thumbnail_id",
        "author_id",
        "category_id",
        "sub_category_id",
        "status",
        "published_at"
    ];


    /**
     * Relation with category
     */
    public function media()
    {
        return $this->belongsTo(Media::class, 'thumbnail_id');
    }

    /**
     * Relation with category
     */
    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    /**
     * Relation with sub category
     */
    public function subCategory()
    {
        return $this->belongsTo(SubCategory::class, 'sub_category_id');
    }

    /**
     * Relation with user
     */
    public function author()
    {
        return $this->belongsTo(User::class, 'author_id');
    }

    /**
     * Scope to get articles with status 'published' 
     */
    public function scopePublished($query)
    {
        return $query->where('status', 'published');
    }

    /**
     * Scope to get articles with status 'draft' 
     */
    public function scopeDraft($query)
    {
        return $query->where('status', 'draft');
    }

    /**
     * Scope to get articles with status 'archived' 
     */
    public function scopeArchived($query)
    {
        return $query->where('status', 'archived');
    }

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'published_at' => 'datetime',
        ];
    }
}
