<?php

use Awcodes\Curator\Models\Media;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    $media = Media::where('id', '6')->get();
    return response()->json(["media" => $media]);
});
