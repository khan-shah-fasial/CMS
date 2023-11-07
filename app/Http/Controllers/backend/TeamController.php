<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Team;
use Illuminate\Support\Facades\Storage;

class TeamController extends Controller
{
    public function index() {
        $team = Team::orderBy('id', 'desc')->get();
        return view('backend.pages.team.index', compact('team'));
    }

    public function add() {
        return view('backend.pages.team.add');
    }  
    
    public function create(Request $request) {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'name' => 'required',
            'about' => 'required',
            'designation' => 'required',
            'description' => 'required',
            'phone' => 'nullable',
            'email' => 'nullable',
            'linkedin_link' => 'nullable',
            'series' => 'nullable',
            'status' => 'boolean',
        ]);

        // Handle image upload if provided
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('assets/image/teams', 'public');
            $validatedData['image'] = $imagePath;
        }

        // Create a new Team record using the validated data
        Team::create($validatedData);

        $response = [
            'status' => true,
            'notification' => 'Team added successfully!',
        ];
        
        return response()->json($response);
    }     

    public function edit($id) {
        $team = Team::find($id);
        return view('backend.pages.team.edit', compact('team'));
    }  

    public function view($id) {
        $team = Team::find($id);
        return view('backend.pages.team.view', compact('team'));
    }    
    
    public function delete($id) {
        
        $team = Team::find($id);
        $team->delete();

        $response = [
            'status' => true,
            'notification' => 'Team deleted successfully!',
        ];

        return response()->json($response);
    }  
    
    public function status($id, $status) { 
        $team = Team::find($id);
        $team->status = $status;
        $team->save();
    
        return redirect(route('team.index'))->with('success', 'Status changed successfully!');
    }  
    
    public function update(Request $request) {
        $id = $request->input('id');

        // Validate the incoming request data
        $validatedData = $request->validate([
            'name' => 'required',
            'about' => 'required',
            'designation' => 'required',
            'description' => 'required',
            'phone' => 'nullable',
            'email' => 'nullable',
            'linkedin_link' => 'nullable',
            'series' => 'nullable',
            'status' => 'boolean',
        ]);

        // Find the team record to update
        $team = Team::findOrFail($id);

        // Handle image upload if provided
        if ($request->hasFile('image')) {
            // Delete the old image (if it exists)
            if ($team->image) {
                Storage::disk('public')->delete($team->image);
            }

            $imagePath = $request->file('image')->store('assets/image/teams', 'public');
            $validatedData['image'] = $imagePath;
        }

        // Update the team record with the validated data
        $team->update($validatedData);        

        $response = [
            'status' => true,
            'notification' => 'Team updated successfully!',
        ];

        return response()->json($response);
    }  
}
