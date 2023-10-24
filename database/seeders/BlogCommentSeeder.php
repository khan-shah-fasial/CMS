<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class BlogCommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Seed with provided data
        DB::table('blog_comments')->insert([[
            'blog_id' => 1,
            'name' => 'david',
            'email' => 'david@gmail.com',
            'comment' => 'My name is David.',
            'created_at' => '2023-10-24 07:42:19',
            'updated_at' => '2023-10-24 07:42:19',
        ],
        [
            'blog_id' => 2,
            'name' => 'rock',
            'email' => 'rock@gmail.com',
            'comment' => 'My name is rock.',
            'created_at' => '2023-10-24 07:42:19',
            'updated_at' => '2023-10-24 07:42:19',
        ],
        [
            'blog_id' => 3,
            'name' => 'flip',
            'email' => 'flip@gmail.com',
            'comment' => 'My name is flip.',
            'created_at' => '2023-10-24 07:42:19',
            'updated_at' => '2023-10-24 07:42:19',
        ]]);
    }
}
