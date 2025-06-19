<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthenticationController;
use App\Http\Controllers\MoviesController;

Route::post('/register', [AuthenticationController::class, 'register']);
Route::post('/login', [AuthenticationController::class, 'login']);
Route::get('/movies', [MoviesController::class, 'index']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/movies', [MoviesController::class, 'store']);
    Route::get('/get-user', [AuthenticationController::class, 'userInfo'] );
    Route::post('/logout', [AuthenticationController::class , 'logOut']);

});



