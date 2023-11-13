<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Frontend\IndexController;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

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
Route::get('/area-of-practices', [IndexController::class, 'practice_area'])->name('practicearea');
Route::get('/area-of-practice/{slug}', [IndexController::class, 'practice_area_detail'])->name('practicearea-detail');

Route::get('/blog', [IndexController::class, 'blog'])->name('blog');
Route::get('/blogs-data', [IndexController::class, 'blog_data'])->name('blog-data');

$postCategories = DB::table('blog_categories')->pluck('slug')->toArray();
Route::get('/{category}/{slug}', [IndexController::class, 'blog_detail'])
    ->where('category', implode('|', $postCategories))
    ->name('blog.detail');

Route::get('/news', [IndexController::class, 'news'])->name('news');
Route::get('/news-data', [IndexController::class, 'news_data'])->name('news-data');

Route::get('/deal-update', [IndexController::class, 'deal_update'])->name('deal-update');
Route::get('/deal-update-data', [IndexController::class, 'deal_update_data'])->name('deal-update-data');

Route::get('/media-coverage', [IndexController::class, 'media_coverage'])->name('media-coverage');
Route::get('/media-coverage-data', [IndexController::class, 'media_coverage_data'])->name('media-coverage-data');

Route::get('/publication', [IndexController::class, 'publication'])->name('publication');
Route::get('/publication-data', [IndexController::class, 'publication_data'])->name('publication-data');


Route::any('/team-members', [IndexController::class, 'team_members'])->name('team');
Route::get('/team-members/{slug}', [IndexController::class, 'team_detail'])->name('team.detail');
Route::get('/contact-us', [IndexController::class, 'contact_us'])->name('contact');
Route::any('/about-us', [IndexController::class, 'about_us'])->name('about');
Route::get('/faq', [IndexController::class, 'faq'])->name('faq');
Route::get('/career', [IndexController::class, 'career'])->name('career');
Route::get('/privacy-policy', [IndexController::class, 'privacy_policy'])->name('privacy-policy');
Route::get('/404', [IndexController::class, 'not_found'])->name('error_page');
Route::get('/thank-you', [IndexController::class, 'thank_you'])->name('thank_you');
Route::get('/cookie-policy', [IndexController::class, 'cookie_policy'])->name('cookie-policy');
Route::post('/contact-save', [IndexController::class, 'contact_save'])->name('contact.create');
Route::post('/comment-save', [IndexController::class, 'comment_save'])->name('comment.create');

Route::get('/search', [IndexController::class, 'search'])->name('search');
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

Route::get('/send-test-email', function () {
    Mail::raw('Test email content', function ($message) {
        $message->to('khanfaisal.makent@gmail.com')
                ->subject('Test Email');
    });

    return 'Test email sent!';
});