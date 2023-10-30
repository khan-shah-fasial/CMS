<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MediaCoverage extends Model
{
    use HasFactory;

    protected $table = 'media_coverage';

    protected $fillable = [
        'title',
        'url',
        'image',
        'status',
    ];
}
