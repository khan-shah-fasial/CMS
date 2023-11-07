<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\NewsCategory;

class NewsCategoryController extends Controller
{
    public function index() {
        $newscategory = NewsCategory::orderBy('id', 'desc')->get();
        return view('backend.pages.newscategory.index', compact('newscategory'));
    }

    public function add() {
        return view('backend.pages.newscategory.add');
    }  
    
    public function create(Request $request) {
        $newscategory = NewsCategory::create([
            'parent_id' => $request->input('parent_id'),
            'name' => $request->input('name'),
        ]);

        $response = [
            'status' => true,
            'notification' => 'NewsCategory added successfully!',
        ];
        
        return response()->json($response);
    }     

    public function edit($id) {
        $newscategory = NewsCategory::find($id);
        return view('backend.pages.newscategory.edit', compact('newscategory'));
    }  
    
    public function delete($id) {
        
        $newscategory = NewsCategory::find($id);
        if (!$newscategory) {
            $response = [
                'status' => false,
                'notification' => 'Record not found.!',
            ];
            return response()->json($response);
        }
        $newscategory->delete();

        $response = [
            'status' => true,
            'notification' => 'NewsCategory Deleted successfully!',
        ];

        return response()->json($response);
    }  
    
    public function status($id, $status) { 
        $newscategory = NewsCategory::find($id);
        $newscategory->status = $status;
        $newscategory->save();
    
        return redirect(route('newscategory.index'))->with('success', 'Status Change successfully!');
    }  
    
    public function update(Request $request) {
        $id = $request->input('id');
        $newscategory = NewsCategory::find($id);
        $newscategory->update($request->all());

        $response = [
            'status' => true,
            'notification' => 'NewsCategory Update successfully!',
        ];

        return response()->json($response);
    }   
}
