<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Blog;
use App\Models\BlogCategory;
use Illuminate\Support\Str;

class BlogController extends Controller
{
    public function index() {
        $blog = Blog::all();
        return view('backend.pages.blog.index', compact('blog'));
    }

    public function add() {
        $blogcategory = BlogCategory::where('status', 1)->get();
        return view('backend.pages.blog.add', compact('blogcategory'));
    }  
    
    public function create(Request $request) {
        // Validate form data
        $request->validate([
            //'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'blog_category_ids' => 'required', // Add validation for category IDs
        ]);

        // Upload image
        $imagePath = $request->file('image')->store('assets/image/blog', 'public');

        $slug = Str::slug($request->input('slug'), '-');

        // Create the Blog record with 'blog_category_ids' included
        Blog::create([
            'blog_category_ids' => json_encode($request->input('blog_category_ids')),
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
            'notification' => 'Blog added successfully!',
        ];

        return response()->json($response);
    }   

    public function edit($id) {
        $blog = Blog::find($id);
        $blogcategory = BlogCategory::where('status', 1)->get();
        return view('backend.pages.blog.edit', compact('blog', 'blogcategory'));
    }
    
    public function view($id) {
        $blog = Blog::find($id);
        return view('backend.pages.blog.view', compact('blog'));
    }  
    
    public function delete($id) {
        
        $blog = Blog::find($id);
        if (!$blog) {
            $response = [
                'status' => false,
                'notification' => 'Record not found.!',
            ];
            return response()->json($response);
        }
        $blog->delete();

        $response = [
            'status' => true,
            'notification' => 'Blog Deleted successfully!',
        ];

        return response()->json($response);
    }  
    
    public function status($id, $status) { 
        $blog = Blog::find($id);
        $blog->status = $status;
        $blog->save();
    
        return redirect(route('blogs.index'))->with('success', 'Status Change successfully!');
    }  
    
    public function update(Request $request) {
        $id = $request->input('id');
        $blog = Blog::find($id);
    
        if ($request->hasFile('image')) {
            // Update the image if a new one is uploaded
            $imagePath = $request->file('image')->store('assets/image/blog', 'public');
            $blog->main_image = $imagePath;
        }
        
        $slug = Str::slug($request->input('slug'), '-');

        $blog->blog_category_ids = json_encode($request->input('blog_category_ids'));
        $blog->title = $request->input('title');
        $blog->slug = $slug;
        $blog->short_description = $request->input('short_description');
        $blog->content = $request->input('content');
        $blog->meta_title = $request->input('meta_title');
        $blog->meta_description = $request->input('meta_description');
        $blog->user_id = $request->input('user_id');
    
        $blog->save();

        $response = [
            'status' => true,
            'notification' => 'Testimonial Update successfully!',
        ];

        return response()->json($response);
    }   
}
