<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\News;
use App\Models\NewsCategory;
use Illuminate\Support\Str;

class NewsController extends Controller
{
    public function index() {
        $news = News::orderBy('id', 'desc')->get();
        return view('backend.pages.news.index', compact('news'));
    }

    public function add() {
        $newscategory = NewsCategory::where('status', 1)->get();
        return view('backend.pages.news.add', compact('newscategory'));
    }  
    
    public function create(Request $request) {

        // Upload image
        $imagePath = $request->file('image')->store('assets/image/news', 'public');

        $slug = Str::slug($request->input('slug'), '-');

        // Create the News record with 'News_category_ids' included
        News::create([
            'news_category_ids' => json_encode($request->input('news_category_ids')),
            'title' => $request->input('title'),
            'slug' => $slug,
            'short_description' => $request->input('short_description'),
            'content' => $request->input('content'),
            'main_image' => $imagePath,
            'meta_title' => $request->input('meta_title'),
            'meta_description' => $request->input('meta_description'),
            'user_id' => $request->input('user_id'),
        ]);

        $response = [
            'status' => true,
            'notification' => 'News added successfully!',
        ];

        return response()->json($response);
    }   

    public function edit($id) {
        $news = News::find($id);
        $newscategory = NewsCategory::where('status', 1)->get();
        return view('backend.pages.news.edit', compact('news', 'newscategory'));
    }
    
    public function view($id) {
        $news = News::find($id);
        return view('backend.pages.news.view', compact('news'));
    }  
    
    public function delete($id) {
        
        $news = News::find($id);
        if (!$news) {
            $response = [
                'status' => false,
                'notification' => 'Record not found.!',
            ];
            return response()->json($response);
        }
        $news->delete();

        $response = [
            'status' => true,
            'notification' => 'News Deleted successfully!',
        ];

        return response()->json($response);
    }  
    
    public function status($id, $status) { 
        $news = News::find($id);
        $news->status = $status;
        $news->save();
    
        return redirect(route('news.index'))->with('success', 'Status Change successfully!');
    }  
    
    public function update(Request $request) {
        $id = $request->input('id');
        $news = News::find($id);
    
        if ($request->hasFile('image')) {
            // Update the image if a new one is uploaded
            $imagePath = $request->file('image')->store('assets/image/News', 'public');
            $news->main_image = $imagePath;
        }

        $slug = Str::slug($request->input('slug'), '-');
    
        $news->News_category_ids = json_encode($request->input('news_category_ids'));
        $news->title = $request->input('title');
        $news->slug = $slug;
        $news->short_description = $request->input('short_description');
        $news->content = $request->input('content');
        $news->meta_title = $request->input('meta_title');
        $news->meta_description = $request->input('meta_description');
        $news->user_id = $request->input('user_id');
    
        $news->save();

        $response = [
            'status' => true,
            'notification' => 'Testimonial Update successfully!',
        ];

        return response()->json($response);
    }   
}
