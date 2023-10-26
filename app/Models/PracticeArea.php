<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PracticeArea extends Model
{
    use HasFactory;
    
    protected $table = 'practice_areas';

    protected $fillable = [
        'parent_id',
        'thumnail_image',
        'title',
        'short_description',
        'slug',
        'content',
        'why_choose_us',
        'faq',
        'meta_title',
        'meta_description',
        'breadcrumb_title',
        'breadcrumb_subtitle',
        'breadcrumb_image',
        'status',
    ];    
}
