<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{

    public function edit($id) {
        $author = User::find($id);
        return view('backend.pages.user.edit', compact('author'));
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
            'notification' => 'Profile Update successfully!',
        ];

        return response()->json($response);
    }

    public function password($id) {
        $author = User::find($id);
        return view('backend.pages.user.password_edit', compact('author'));
    } 
    
    public function reset(Request $request) {

        // Validate form data
        $validator = Validator::make($request->all(), [
            'password' => 'nullable|min:6|confirmed', // This ensures password and password_confirmation match
        ]);
    
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validator->errors()->all()
            ], 200);
        }
    
        $id = $request->input('id');
        $author = User::find($id);

    
        // Update the password if it's provided
        if ($request->filled('password')) {
            $author->password =  bcrypt($request->input('password'));
        }
    
        $author->save();
    
        $response = [
            'status' => true,
            'notification' => 'Password Reset successfully!',
        ];
    
        return response()->json($response);
    }
}
