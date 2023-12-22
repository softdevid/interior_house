<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Kontak;
use App\Models\Layanan;
use App\Models\Profil;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();
        \App\Models\Kontak::factory(1)->create();
        \App\Models\Layanan::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        // Kontak::create([
        //     'email' => 'example2@gmail.com',
        //     'noHp' => '08872652857',
        //     'alamat' => 'selabaya',
        //     'maps' => 'agjeogjeog'
        // ]);

        Profil::create([
            'namaPerusahaan' => 'Softdev Interior',
            'deskripsiPerusahaan' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptate atque possimus quisquam? Consequuntur nostrum facilis temporibus voluptas! Odit, consequatur.',
            'linkInstagram' => 'https://www.instagram.com',
            'linkTwitter' => 'https://twitter.com',
            'linkFacebook' => 'https://www.facebook.com',
            'email' => 'example2@gmail.com',
            'noHp' => '08872652857',
            'alamat' => 'selabaya',
            'maps' => '-8535938553',
            'logoImgName' => '',
            'logoImgUrl' => '',
        ]);
    }
}
