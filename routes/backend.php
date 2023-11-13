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
use App\Http\Controllers\backend\BlogController;
use App\Http\Controllers\backend\NewsCategoryController;
use App\Http\Controllers\backend\NewsController;
use App\Http\Controllers\backend\PracticeAreaController;
use App\Http\Controllers\backend\TrumbowygController;
use App\Http\Controllers\backend\MediaCoverageController;
use App\Http\Controllers\backend\PublicationController;
use App\Http\Controllers\backend\ContactController;
use App\Http\Controllers\backend\BusinessSettingController;

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
Route::group(['prefix' => 'blogs/category'], function () {
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

//blogs
Route::group(['prefix' => 'blogs'], function () {
    Route::get('/index', [BlogController::class, 'index'])->name('blogs.index');
    Route::get('/add', [BlogController::class, 'add'])->name('blogs.add');
    Route::get('/edit/{id}', [BlogController::class, 'edit'])->name('blogs.edit');
    Route::get('/view/{id}', [BlogController::class, 'view'])->name('blogs.view');
    Route::post('/create', [BlogController::class, 'create'])->name('blogs.create');
    Route::post('/update', [BlogController::class, 'update'])->name('blogs.update');
    Route::post('/delete/{id}', [BlogController::class, 'delete'])->name('blogs.delete');
    Route::get('/status/{id}/{status}', [BlogController::class, 'status'])->name('blogs.status');
});


//Newscategory
Route::group(['prefix' => 'news/category'], function () {
    Route::get('/index', [NewsCategoryController::class, 'index'])->name('newscategory.index');
    Route::get('/add', [NewsCategoryController::class, 'add'])->name('newscategory.add');
    Route::get('/edit/{id}', [NewsCategoryController::class, 'edit'])->name('newscategory.edit');
    Route::post('/create', [NewsCategoryController::class, 'create'])->name('newscategory.create');
    Route::post('/update', [NewsCategoryController::class, 'update'])->name('newscategory.update');
    Route::post('/delete/{id}', [NewsCategoryController::class, 'delete'])->name('newscategory.delete');
    Route::get('/status/{id}/{status}', [NewsCategoryController::class, 'status'])->name('newscategory.status');
});

//News
Route::group(['prefix' => 'news'], function () {
    Route::get('/index', [NewsController::class, 'index'])->name('news.index');
    Route::get('/add', [NewsController::class, 'add'])->name('news.add');
    Route::get('/edit/{id}', [NewsController::class, 'edit'])->name('news.edit');
    Route::get('/view/{id}', [NewsController::class, 'view'])->name('news.view');
    Route::post('/create', [NewsController::class, 'create'])->name('news.create');
    Route::post('/update', [NewsController::class, 'update'])->name('news.update');
    Route::post('/delete/{id}', [NewsController::class, 'delete'])->name('news.delete');
    Route::get('/status/{id}/{status}', [NewsController::class, 'status'])->name('news.status');
});

//PracticeArea
Route::group(['prefix' => 'practicearea'], function () {
    Route::get('/index', [PracticeAreaController::class, 'index'])->name('practicearea.index');
    Route::get('/add', [PracticeAreaController::class, 'add'])->name('practicearea.add');
    Route::get('/edit/{id}', [PracticeAreaController::class, 'edit'])->name('practicearea.edit');
    Route::get('/view/{id}', [PracticeAreaController::class, 'view'])->name('practicearea.view');
    Route::post('/create', [PracticeAreaController::class, 'create'])->name('practicearea.create');
    Route::post('/update', [PracticeAreaController::class, 'update'])->name('practicearea.update');
    Route::post('/delete/{id}', [PracticeAreaController::class, 'delete'])->name('practicearea.delete');
    Route::get('/status/{id}/{status}', [PracticeAreaController::class, 'status'])->name('practicearea.status');
});

//News
Route::group(['prefix' => 'trumbowyg'], function () {
    Route::post('/upload', [TrumbowygController::class, 'upload'])->name('trumbowyg.upload');
});

//mediacoverage
Route::group(['prefix' => 'mediacoverage'], function () {
    Route::get('/index', [MediaCoverageController::class, 'index'])->name('mediacoverage.index');
    Route::get('/add', [MediaCoverageController::class, 'add'])->name('mediacoverage.add');
    Route::get('/edit/{id}', [MediaCoverageController::class, 'edit'])->name('mediacoverage.edit');
    Route::post('/create', [MediaCoverageController::class, 'create'])->name('mediacoverage.create');
    Route::post('/update', [MediaCoverageController::class, 'update'])->name('mediacoverage.update');
    Route::post('/delete/{id}', [MediaCoverageController::class, 'delete'])->name('mediacoverage.delete');
    Route::get('/status/{id}/{status}', [MediaCoverageController::class, 'status'])->name('mediacoverage.status');
});

//Publication
Route::group(['prefix' => 'publication'], function () {
    Route::get('/index', [PublicationController::class, 'index'])->name('publication.index');
    Route::get('/add', [PublicationController::class, 'add'])->name('publication.add');
    Route::get('/edit/{id}', [PublicationController::class, 'edit'])->name('publication.edit');
    Route::post('/create', [PublicationController::class, 'create'])->name('publication.create');
    Route::post('/update', [PublicationController::class, 'update'])->name('publication.update');
    Route::post('/delete/{id}', [PublicationController::class, 'delete'])->name('publication.delete');
    Route::get('/status/{id}/{status}', [PublicationController::class, 'status'])->name('publication.status');
});

//Contact
Route::group(['prefix' => 'contact'], function () {
    Route::get('/index', [ContactController::class, 'index'])->name('contact.index');
    Route::get('/view/{id}', [ContactController::class, 'view'])->name('contact.view');
    Route::post('/delete/{id}', [ContactController::class, 'delete'])->name('contact.delete');
});

//setting
Route::group(['prefix' => 'setting'], function () {
    Route::get('/index', [BusinessSettingController::class, 'index'])->name('setting.index');
    Route::post('/update', [BusinessSettingController::class, 'update'])->name('setting.update');
});


//clear cache
Route::get('/clear-cache', function () {
    $exitCode = Artisan::call('cache:clear');
    $exitCode = Artisan::call('config:clear');
    $exitCode = Artisan::call('view:clear');
    //$exitCode = Artisan::call('route:cache');
    //$exitCode = Artisan::call('key:generate');
});