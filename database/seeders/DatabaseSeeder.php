<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\Category;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

use function Laravel\Prompts\form;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // $user = User::create(["name" => "Admin", "email" => "admin@admin.com", "password" => "12345678"]);
        // $user->assignRole("super_admin");

        // $categories =  [
        //     "Politics",
        //     "World",
        //     "Finance",
        //     "Sport",
        //     "Technology"
        // ];

        // foreach ($categories as $category) {
        //     Category::create([
        //         "name" => $category,
        //         "slug" => Str::slug($category),
        //         "description" => "Post fot category " . $category
        //     ]);
        // }

        // Article::factory(10)->create();
    }
}
