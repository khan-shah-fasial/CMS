<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;

    protected $table = 'teams'; // Specify the table name

    protected $fillable = [
        'image',
        'name',
        'about',
        'designation',
        'description',
        'phone',
        'email',
        'linkedin_link',
        'series',
        'status',
        'is_home',
    ];
        
}
