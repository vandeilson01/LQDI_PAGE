<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MailsPlus extends Model
{
    use HasFactory;


    protected $table = 'mails';

    protected $fillable = [
        'cod_id',
        'email',
    ];

    // protected $casts = [
    //     'email_verified_at' => 'datetime',
    // ];
}
