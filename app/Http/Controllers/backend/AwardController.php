<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Award;

class AwardController extends Controller
{
    public function index() {
        $award = Award::orderBy('id', 'desc')->get();
        return view('backend.pages.award.index', compact('award'));
    }

    public function add() {
        return view('backend.pages.award.add');
    }  
    
    public function create(Request $request) {

        // Validate form data
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Upload image
        $imagePath = $request->file('image')->store('assets/image/award', 'public');
        
        // Create the award record
        Award::create([
            'title' => $request->input('title'),
            'image' => $imagePath,
        ]);

        $response = [
            'status' => true,
            'notification' => 'Award added successfully!',
        ];
        
        return response()->json($response);
    }     

    public function edit($id) {
        $award = Award::find($id);
        return view('backend.pages.award.edit', compact('award'));
    }  
    
    public function delete($id) {
        
        $award = Award::find($id);
        if (!$award) {
            $response = [
                'status' => false,
                'notification' => 'Record not found.!',
            ];
            return response()->json($response);
        }
        $award->delete();

        $response = [
            'status' => true,
            'notification' => 'Award Deleted successfully!',
        ];

        return response()->json($response);
    }  
    
    public function status($id, $status) { 
        $award = Award::find($id);
        $award->status = $status;
        $award->save();
    
        return redirect(route('award.index'))->with('success', 'Status Change successfully!');
    }  
    
    public function update(Request $request) {
        $id = $request->input('id');
        $award = Award::find($id);
    
        if ($request->hasFile('image')) {
            // Update the image if a new one is uploaded
            $imagePath = $request->file('image')->store('assets/image/award', 'public');
            $award->image = $imagePath;
        }
    
        $award->title = $request->input('title');
    
        $award->save();

        $response = [
            'status' => true,
            'notification' => 'Award Update successfully!',
        ];

        return response()->json($response);
    }   
}
