<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegistrationModel extends Model
{
    use HasFactory;

    protected $table = 'registration';

    protected $fillable = [
        'id',
        'cod_id',
        'name',
        'email',
        'subject',
        'content',
        'file',
    ];
}
