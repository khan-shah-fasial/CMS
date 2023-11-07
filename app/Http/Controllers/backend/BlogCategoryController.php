<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\BlogCategory;
use Illuminate\Support\Facades\Validator;

class BlogCategoryController extends Controller
{
    public function index() {
        $blogcategory = BlogCategory::orderBy('id', 'desc')->get();
        return view('backend.pages.blogcategory.index', compact('blogcategory'));
    }

    public function add() {
        return view('backend.pages.blogcategory.add');
    }  
    
    public function create(Request $request) {

        // Validate form data
        $validator = Validator::make($request->all(), [
            'slug' => 'required|unique:blog_categories',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validator->errors()->all()
            ], 200);
        } 

        $blogcategory = BlogCategory::create([
            'parent_id' => $request->input('parent_id'),
            'name' => $request->input('name'),
            'slug' => str_replace(' ', '-', $request->input('slug')),
        ]);

        $response = [
            'status' => true,
            'notification' => 'BlogCategory added successfully!',
        ];
        
        return response()->json($response);
    }     

    public function edit($id) {
        $blogcategory = BlogCategory::find($id);
        return view('backend.pages.blogcategory.edit', compact('blogcategory'));
    }  
    
    public function delete($id) {
        
        $blogcategory = BlogCategory::find($id);
        if (!$blogcategory) {
            $response = [
                'status' => false,
                'notification' => 'Record not found.!',
            ];
            return response()->json($response);
        }
        $blogcategory->delete();

        $response = [
            'status' => true,
            'notification' => 'BlogCategory Deleted successfully!',
        ];

        return response()->json($response);
    }  
    
    public function status($id, $status) { 
        $blogcategory = BlogCategory::find($id);
        $blogcategory->status = $status;
        $blogcategory->save();
    
        return redirect(route('blogcategory.index'))->with('success', 'Status Change successfully!');
    }  
    
    public function update(Request $request) {

        // Validate form data
        $validator = Validator::make($request->all(), [
            'slug' => 'required|unique:blog_categories,slug,'. $request->input('id'),
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validator->errors()->all()
            ], 200);
        } 

        $id = $request->input('id');
        $blogcategory = BlogCategory::find($id);
        $blogcategory->update($request->all());

        $response = [
            'status' => true,
            'notification' => 'BlogCategory Update successfully!',
        ];

        return response()->json($response);
    }   
}
