<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

class AuthorController extends Controller
{
    public function index() {
        $author = User::orderBy('id', 'desc')->get();
        return view('backend.pages.author.index', compact('author'));
    }

    public function add() {
        return view('backend.pages.author.add');
    }  
    
    public function create(Request $request) {

        // Validate form data
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:blog_categories',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validator->errors()->all()
            ], 200);
        } 

        $author = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt('Seedling@2051'),
            'role_id' => $request->input('role_id'),
        ]);

        $response = [
            'status' => true,
            'notification' => 'Author added successfully!',
        ];
        
        return response()->json($response);
    }     

    public function edit($id) {
        $author = User::find($id);
        return view('backend.pages.author.edit', compact('author'));
    }  
    
    public function delete($id) {
        
        $author = User::find($id);
        if (!$author) {
            $response = [
                'status' => false,
                'notification' => 'Record not found.!',
            ];
            return response()->json($response);
        }
        $author->delete();

        $response = [
            'status' => true,
            'notification' => 'User Deleted successfully!',
        ];

        return response()->json($response);
    }  
    
    public function status($id, $status) { 
        $author = User::find($id);
        $author->status = $status;
        $author->save();
    
        return redirect(route('author.index'))->with('success', 'Status Change successfully!');
    }  
    
    public function update(Request $request) {

        // Validate form data
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:blog_categories,slug,'. $request->input('id'),
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validator->errors()->all()
            ], 200);
        } 

        $id = $request->input('id');
        $author = User::find($id);
        $author->update($request->all());

        $response = [
            'status' => true,
            'notification' => 'Author Update successfully!',
        ];

        return response()->json($response);
    }   
}
