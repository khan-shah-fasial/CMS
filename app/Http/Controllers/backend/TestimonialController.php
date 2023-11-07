<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Testimonial;

class TestimonialController extends Controller
{
    public function index() {
        $testimonial = Testimonial::orderBy('id', 'desc')->get();
        return view('backend.pages.testimonial.index', compact('testimonial'));
    }

    public function add() {
        return view('backend.pages.testimonial.add');
    }  
    
    public function create(Request $request) {

        // Validate form data
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Upload image
        $imagePath = $request->file('image')->store('assets/image/testimonial', 'public');
        
        // Create the testimonial record
        Testimonial::create([
            'name' => $request->input('name'),
            'designation' => $request->input('designation'),
            'image' => $imagePath,
            'rating' => $request->input('rating'),
            'comment' => $request->input('comment'),
        ]);

        $response = [
            'status' => true,
            'notification' => 'Testimonial added successfully!',
        ];
        
        return response()->json($response);
    }     

    public function edit($id) {
        $testimonial = Testimonial::find($id);
        return view('backend.pages.testimonial.edit', compact('testimonial'));
    }  
    
    public function delete($id) {
        
        $testimonial = Testimonial::find($id);
        if (!$testimonial) {
            $response = [
                'status' => false,
                'notification' => 'Record not found.!',
            ];
            return response()->json($response);
        }
        $testimonial->delete();

        $response = [
            'status' => true,
            'notification' => 'Testimonial Deleted successfully!',
        ];

        return response()->json($response);
    }  
    
    public function status($id, $status) { 
        $testimonial = Testimonial::find($id);
        $testimonial->status = $status;
        $testimonial->save();
    
        return redirect(route('testimonial.index'))->with('success', 'Status Change successfully!');
    }  
    
    public function update(Request $request) {
        $id = $request->input('id');
        $testimonial = Testimonial::find($id);
    
        if ($request->hasFile('image')) {
            // Update the image if a new one is uploaded
            $imagePath = $request->file('image')->store('assets/image/testimonial', 'public');
            $testimonial->image = $imagePath;
        }
    
        $testimonial->name = $request->input('name');
        $testimonial->designation = $request->input('designation');
        $testimonial->rating = $request->input('rating');
        $testimonial->comment = $request->input('comment');
    
        $testimonial->save();

        $response = [
            'status' => true,
            'notification' => 'Testimonial Update successfully!',
        ];

        return response()->json($response);
    }   
}
