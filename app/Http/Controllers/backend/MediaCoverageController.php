<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\MediaCoverage;

class MediaCoverageController extends Controller
{
    public function index() {
        $mediacoverage = MediaCoverage::orderBy('id', 'desc')->get();
        return view('backend.pages.mediacoverage.index', compact('mediacoverage'));
    }

    public function add() {
        return view('backend.pages.mediacoverage.add');
    }  
    
    public function create(Request $request) {

        // Upload image
        $imagePath = $request->file('image')->store('assets/image/mediacoverage', 'public');

        $mediacoverage = MediaCoverage::create([
            'title' => $request->input('title'),
            'url' => $request->input('url'),
            'image' => $imagePath,
        ]);

        $response = [
            'status' => true,
            'notification' => 'Media coverage added successfully!',
        ];
        
        return response()->json($response);
    }     

    public function edit($id) {
        $mediacoverage = MediaCoverage::find($id);
        return view('backend.pages.mediacoverage.edit', compact('mediacoverage'));
    }  
    
    public function delete($id) {
        
        $mediacoverage = MediaCoverage::find($id);
        if (!$mediacoverage) {
            $response = [
                'status' => false,
                'notification' => 'Record not found.!',
            ];
            return response()->json($response);
        }
        $mediacoverage->delete();

        $response = [
            'status' => true,
            'notification' => 'Media coverage deleted successfully!',
        ];

        return response()->json($response);
    }  
    
    public function status($id, $status) { 
        $mediacoverage = MediaCoverage::find($id);
        $mediacoverage->status = $status;
        $mediacoverage->save();
    
        return redirect(route('mediacoverage.index'))->with('success', 'Status changed successfully!');
    }  
    
    public function update(Request $request) {
        $id = $request->input('id');
        $mediacoverage = MediaCoverage::find($id);

        if ($request->hasFile('image')) {
            // Update the image if a new one is uploaded
            $imagePath = $request->file('image')->store('assets/image/mediacoverage', 'public');
            $mediacoverage->image = $imagePath;
        }

        $mediacoverage->title = $request->input('title');
        $mediacoverage->url = $request->input('url');
    
        $mediacoverage->save();

        $response = [
            'status' => true,
            'notification' => 'Media coverage updated successfully!',
        ];

        return response()->json($response);
    }   
}
