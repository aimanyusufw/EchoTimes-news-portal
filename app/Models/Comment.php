<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = [
        'user_id',
        'article_id',
        'content',
        'parent_id',
    ];

    /** 
     * Relationship to user
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /** 
     * Relationship to article
     */
    public function article()
    {
        return $this->belongsTo(Article::class, 'article_id');
    }

    /** 
     * Relationship to parent comment
     */
    public function parent()
    {
        return $this->belongsTo(Comment::class, 'parent_id');
    }

    /**
     * Relationship to reply comments (children)
     */
    public function children()
    {
        return $this->hasMany(Comment::class, 'parent_id');
    }
}
