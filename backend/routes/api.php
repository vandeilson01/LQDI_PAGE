<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\UserResource;
use App\Http\Resources\MailColletion;
use App\Models\MailModel;
use App\Http\Controllers\MailController;
use App\Http\Controllers\Registration;
use App\Mail\WelcomeMail;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Mail;
use App\Models\User;
use App\Models\MailsPlus;
use App\Models\RegistrationModel;

use App\Mail\Mails;

Route::post('/email/plus', [MailController::class, 'store']);
Route::post('/email/send', [Registration::class, 'store']);
Route::post('registration/file', [Registration::class, 'file']);

Route::get('/mails', function () {
    return $data = [
        MailsPlus::get()->toArray()
    ];
});

Route::get('/registrations', function () {
    return $data = [
        RegistrationModel::get()->toArray()
    ];
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {

    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);

});