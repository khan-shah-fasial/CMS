<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'name' => 'nexgeno',
            'email' => 'support@nexgeno.in',
            'password' => Hash::make('support@nexgeno.in'),
            'role_id' => 1, // Set the appropriate role ID
        ]);
    }
}
