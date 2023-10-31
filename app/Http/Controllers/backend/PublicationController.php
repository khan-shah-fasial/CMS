<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Publication;

class PublicationController extends Controller
{
    public function index() {
        $publication = Publication::all();
        return view('backend.pages.publication.index', compact('publication'));
    }

    public function add() {
        return view('backend.pages.publication.add');
    }  
    
    public function create(Request $request) {

        // Upload image
        $imagePath = $request->file('image')->store('assets/image/publication', 'public');

        $publication = Publication::create([
            'title' => $request->input('title'),
            'url' => $request->input('url'),
            'image' => $imagePath,
        ]);

        $response = [
            'status' => true,
            'notification' => 'Publication Coverage added successfully!',
        ];
        
        return response()->json($response);
    }     

    public function edit($id) {
        $publication = Publication::find($id);
        return view('backend.pages.publication.edit', compact('publication'));
    }  
    
    public function delete($id) {
        
        $publication = Publication::find($id);
        if (!$publication) {
            $response = [
                'status' => false,
                'notification' => 'Record not found.!',
            ];
            return response()->json($response);
        }
        $publication->delete();

        $response = [
            'status' => true,
            'notification' => 'Publication Coverage Deleted successfully!',
        ];

        return response()->json($response);
    }  
    
    public function status($id, $status) { 
        $publication = Publication::find($id);
        $publication->status = $status;
        $publication->save();
    
        return redirect(route('publication.index'))->with('success', 'Status Change successfully!');
    }  
    
    public function update(Request $request) {
        $id = $request->input('id');
        $publication = Publication::find($id);

        if ($request->hasFile('image')) {
            // Update the image if a new one is uploaded
            $imagePath = $request->file('image')->store('assets/image/publication', 'public');
            $publication->image = $imagePath;
        }

        $publication->title = $request->input('title');
        $publication->url = $request->input('url');
    
        $publication->save();

        $response = [
            'status' => true,
            'notification' => 'Publication Coverage Update successfully!',
        ];

        return response()->json($response);
    }   
}
