<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\backend\AuthenticateController;
use App\Http\Controllers\backend\DashboardController;
use App\Http\Controllers\backend\FaqController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

//authentication
Route::get('/', function () { return redirect(route('backend.login')); });
Route::get('/login', [AuthenticateController::class, 'index'])->name('backend.login');
Route::post('/login', [AuthenticateController::class, 'login'])->name('backend.login');
Route::get('/logout', [AuthenticateController::class, 'logout'])->name('backend.logout');

//dashborad
Route::get('/dashboard', [DashboardController::class, 'index'])->name('backend.dashboard');

//faq
Route::group(['prefix' => 'faq'], function () {
    Route::get('/index', [FaqController::class, 'index'])->name('backend.index');
    Route::get('/add', [FaqController::class, 'add'])->name('backend.add');
    Route::get('/edit/{id}', [FaqController::class, 'edit'])->name('backend.edit');
    Route::post('/create', [FaqController::class, 'create'])->name('backend.create');
    Route::post('/update', [FaqController::class, 'update'])->name('backend.update');
    Route::post('/delete', [FaqController::class, 'delete'])->name('backend.delete');
});