<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Kontak>
 */
class KontakFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'noHp' => Str::random(10),
            'email' =>fake()->unique()->safeEmail(),
            'maps' =>fake()->address(),
            'alamat' => fake()->address()
        ];
    }
}
