<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;
    public $timestamps = true;
    protected $table = 'blogs';
    protected $fillable = [
        'blog_category_ids',
        'title',
        'slug',
        'short_description',
        'main_image',
        'alt_main_image',
        'content',
        'meta_title',
        'meta_description',
        'status',
        'user_id',
    ];

}
