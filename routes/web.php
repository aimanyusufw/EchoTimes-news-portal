<?php

use App\Models\Article;
use App\Models\Category;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {

    return inertia("Home", [
        "headerPost" => Article::with('author', 'category')->latest()->take(5)->get(),
        "categories" => Category::all()
    ]);
});

Route::get('/category/{category}', function (Category $category) {
    return inertia("PostCategory", ["category" => $category]);
});
