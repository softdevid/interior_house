<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Layanan>
 */
class LayananFactory extends Factory
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
            'hrgTerrendah' => fake()->randomDigit(),
            'hrgTertinggi' => fake()->randomDigit(),
        ];
    }
}
