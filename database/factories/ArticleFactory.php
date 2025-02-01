<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $images = [
            "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2025%2F0118%2Fr1440224_1296x729_16%2D9.jpg&w=920&h=518&scale=crop&cquality=80&location=origin&format=jpg",
            "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2025%2F0118%2Fr1440090_1296x729_16%2D9.jpg&w=1140&cquality=40&format=jpg",
            "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2025%2F0118%2Fr1440151_1296x729_16%2D9.jpg&w=1140&cquality=40&format=jpg",
            "https://image.cnbcfm.com/api/v1/image/108087889-17370551552025-01-16t184404z_820877807_rc26bcaoa7bg_rtrmadp_0_usa-china-tiktok.jpeg?v=1737055181&w=1480&h=833&ffmt=webp&vtcrop=y"
        ];

        $title = $this->faker->sentence();

        return [
            "title" => $title,
            "slug" => Str::slug($title),
            "content" => implode("\n\n", [
                "Here are some key highlights of this property:",
                "<ul>" .
                    "<li><strong>Spacious Living Area.</strong> " . $this->faker->sentence(12) . " The open layout allows for seamless flow between the living, dining, and kitchen areas, providing a perfect space for entertainment and relaxation;</li>" .
                    "<li><strong>Prime Location.</strong> " . $this->faker->sentence(10) . " Situated in a highly sought-after neighborhood, this property offers easy access to local amenities, schools, and public transportation;</li>" .
                    "<li><strong>Modern Amenities.</strong> " . $this->faker->sentence(10) . " Equipped with state-of-the-art appliances and smart home features, this property ensures convenience and luxury at every turn;</li>" .
                    "<li><strong>Outdoor Space.</strong> " . $this->faker->sentence(15) . " Enjoy the beautiful backyard, perfect for gardening, family gatherings, or simply relaxing under the sun.</li>" .
                    "</ul>",
                "<strong>Designed for Comfort and Style</strong>",
                "Before you even step inside, " . $this->faker->sentence(8) . ". The exterior design blends modern architecture with timeless elegance, creating an inviting atmosphere for you and your family.",
                "Let’s start by scheduling a viewing to fully appreciate the beauty and functionality of this property."
            ]),
            "short_description" => $this->faker->paragraph(),
            "author_id" => 1,
            "category_id" => rand(1, 4),
            "sub_category_id" => null,
            "status" => "published",
            "published_at" => now()
        ];
    }
}
