<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    protected $table = 'contact';

    protected $fillable = [
        'ip',
        'name',
        'email',
        'phone',
        'services',
        'other_info',
        'qualification',
        'description',
        'url',
        'section',
        'cv',
        'response',
        'attempt',
        'success',

    ];
}
