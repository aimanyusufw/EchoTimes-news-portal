<?php

use App\Models\Category;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia("Home", [
        "categories" => Category::all()
    ]);
});

Route::get('/category/{category}', function (Category $category) {
    return inertia("PostCategory", ["category" => $category]);
});
