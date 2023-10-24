<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\backend\AuthenticateController;
use App\Http\Controllers\backend\DashboardController;
use App\Http\Controllers\backend\FaqController;
use App\Http\Controllers\backend\TestimonialController;
use App\Http\Controllers\backend\TeamController;
use App\Http\Controllers\backend\AwardController;
use App\Http\Controllers\backend\BlogCategoryController;
use App\Http\Controllers\backend\BlogCommentController;

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
    Route::get('/index', [FaqController::class, 'index'])->name('faq.index');
    Route::get('/add', [FaqController::class, 'add'])->name('faq.add');
    Route::get('/edit/{id}', [FaqController::class, 'edit'])->name('faq.edit');
    Route::post('/create', [FaqController::class, 'create'])->name('faq.create');
    Route::post('/update', [FaqController::class, 'update'])->name('faq.update');
    Route::post('/delete/{id}', [FaqController::class, 'delete'])->name('faq.delete');
    Route::get('/status/{id}/{status}', [FaqController::class, 'status'])->name('faq.status');
});


//Testimonials
Route::group(['prefix' => 'testimonial'], function () {
    Route::get('/index', [TestimonialController::class, 'index'])->name('testimonial.index');
    Route::get('/add', [TestimonialController::class, 'add'])->name('testimonial.add');
    Route::get('/edit/{id}', [TestimonialController::class, 'edit'])->name('testimonial.edit');
    Route::post('/create', [TestimonialController::class, 'create'])->name('testimonial.create');
    Route::post('/update', [TestimonialController::class, 'update'])->name('testimonial.update');
    Route::post('/delete/{id}', [TestimonialController::class, 'delete'])->name('testimonial.delete');
    Route::get('/status/{id}/{status}', [TestimonialController::class, 'status'])->name('testimonial.status');
});

//team
Route::group(['prefix' => 'team'], function () {
    Route::get('/index', [TeamController::class, 'index'])->name('team.index');
    Route::get('/add', [TeamController::class, 'add'])->name('team.add');
    Route::get('/edit/{id}', [TeamController::class, 'edit'])->name('team.edit');
    Route::get('/view/{id}', [TeamController::class, 'view'])->name('team.view');
    Route::post('/create', [TeamController::class, 'create'])->name('team.create');
    Route::post('/update', [TeamController::class, 'update'])->name('team.update');
    Route::post('/delete/{id}', [TeamController::class, 'delete'])->name('team.delete');
    Route::get('/status/{id}/{status}', [TeamController::class, 'status'])->name('team.status');
});

//Award
Route::group(['prefix' => 'award'], function () {
    Route::get('/index', [AwardController::class, 'index'])->name('award.index');
    Route::get('/add', [AwardController::class, 'add'])->name('award.add');
    Route::get('/edit/{id}', [AwardController::class, 'edit'])->name('award.edit');
    Route::post('/create', [AwardController::class, 'create'])->name('award.create');
    Route::post('/update', [AwardController::class, 'update'])->name('award.update');
    Route::post('/delete/{id}', [AwardController::class, 'delete'])->name('award.delete');
    Route::get('/status/{id}/{status}', [AwardController::class, 'status'])->name('award.status');
});

//blogcategory
Route::group(['prefix' => 'blogcategory'], function () {
    Route::get('/index', [BlogCategoryController::class, 'index'])->name('blogcategory.index');
    Route::get('/add', [BlogCategoryController::class, 'add'])->name('blogcategory.add');
    Route::get('/edit/{id}', [BlogCategoryController::class, 'edit'])->name('blogcategory.edit');
    Route::post('/create', [BlogCategoryController::class, 'create'])->name('blogcategory.create');
    Route::post('/update', [BlogCategoryController::class, 'update'])->name('blogcategory.update');
    Route::post('/delete/{id}', [BlogCategoryController::class, 'delete'])->name('blogcategory.delete');
    Route::get('/status/{id}/{status}', [BlogCategoryController::class, 'status'])->name('blogcategory.status');
});

//blogcomments
Route::group(['prefix' => 'blogs/comment'], function () {
    Route::get('/index', [BlogCommentController::class, 'index'])->name('blogcomment.index');
    Route::post('/delete/{id}', [BlogCommentController::class, 'delete'])->name('blogcomment.delete');
    Route::get('/status/{id}/{status}', [BlogCommentController::class, 'status'])->name('blogcomment.status');
});