<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Frontend\IndexController;
use Illuminate\Support\Facades\DB;

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

// Home START
Route::get('/', [IndexController::class, 'index'])->name('index');
Route::get('/area-of-practice', [IndexController::class, 'practice_area'])->name('practicearea');
Route::get('/area-of-practice/{slug}', [IndexController::class, 'practice_area_detail'])->name('practicearea-detail');
Route::get('/blogs', [IndexController::class, 'blog'])->name('blog');

$postCategories = DB::table('blog_categories')->pluck('slug')->toArray();
Route::get('/{category}/{slug}', [IndexController::class, 'blog_detail'])
    ->where('category', implode('|', $postCategories))
    ->name('blog.detail');

Route::any('/team-members', [IndexController::class, 'team_members'])->name('team');
Route::get('/team-members/{slug}', [IndexController::class, 'team_detail'])->name('team.detail');
Route::get('/contact-us', [IndexController::class, 'contact_us'])->name('contact');
Route::any('/about-us', [IndexController::class, 'about_us'])->name('about');
Route::get('/faq', [IndexController::class, 'faq'])->name('faq');
Route::get('/career', [IndexController::class, 'career'])->name('career');
Route::get('/privacy-policy', [IndexController::class, 'privacy_policy'])->name('privacy-policy');
// Home END


Route::get('/clear-cache', function () {
    $exitCode = Artisan::call('cache:clear');
    $exitCode = Artisan::call('config:clear');
    $exitCode = Artisan::call('view:clear');
    //$exitCode = Artisan::call('route:cache');
    //$exitCode = Artisan::call('key:generate');
});

Route::get('/key-generate', function () {
    Artisan::call('key:generate', ['--show' => true]);
    return 'Application key generated successfully!';
});

Route::get('/create-storage-link', function () {
    $exitCode = Artisan::call('storage:link');
    
    if ($exitCode === 0) {
        return 'Storage link created successfully.';
    } else {
        return 'Error creating storage link.';
    }
});