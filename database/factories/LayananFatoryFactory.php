<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class LayananFatoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'namaLayanan' => fake()->word(5),
            'deskripsi' => fake()->paragraph(),
            'imgName' => fake()->name(),
            'imgUrl' => fake()->name(),
            'videoName' => fake()->name(),
            'videoName' => fake()->name(),
            'hrgTerrendah' => Str::random(5),
            'hrgTertinggi' => Str::random(5),
        ];
    }
}
