<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PracticeArea;

class PracticeAreaController extends Controller
{
    public function index() {
        $practicearea = PracticeArea::all();
        return view('backend.pages.practicearea.index', compact('practicearea'));
    }

    public function add() {
        $practicearea = PracticeArea::where('status', 1)->get();
        return view('backend.pages.practicearea.add', compact('practicearea'));
    }  
    
    public function create(Request $request) {
        // Validate form data
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'breadcrumb_image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
    
        // Upload image
        $imagePath = $request->file('image')->store('assets/image/practicearea', 'public');
        $imagePath1 = $request->file('breadcrumb_image')->store('assets/image/practicearea', 'public');
    
        // Extract and handle FAQ data
        $faq = $request->input('faq');
        $faq_description = $request->input('faq_description');
    
        if (!empty($faq[0])) {
            $faqs = [];
            for ($j = 0; $j < count($faq); $j++) {
                $faqs[] = [
                    $faq[$j] => $faq_description[$j],
                ];
            }
            $data['faq'] = json_encode($faqs);
        } else {
            $data['faq'] = '[]';
        }
    
        // Remove the 'faq_description' key as it's not needed anymore
        unset($data['faq_description']);
        
        // Create the PracticeArea record with 'PracticeArea_category_ids' included
        PracticeArea::create([
            'parent_id' => $request->input('parent_id'),
            'title' => $request->input('title'),
            'slug' => $request->input('slug'),
            'short_description' => $request->input('short_description'),
            'content' => $request->input('content'),
            'why_choose_us' => $request->input('why_choose_us'),
            'faq' => $data['faq'],
            'thumnail_image' => $imagePath,
            'meta_title' => $request->input('meta_title'),
            'meta_description' => $request->input('meta_description'),
            'breadcrumb_title' => $request->input('breadcrumb_title'),
            'breadcrumb_subtitle' => $request->input('breadcrumb_subtitle'),
            'breadcrumb_image' => $imagePath1,
        ]);
    
        $response = [
            'status' => true,
            'notification' => 'PracticeArea added successfully!',
        ];
    
        return response()->json($response);
    }   

    public function edit($id) {
        $practicearea = PracticeArea::find($id);
        $allpracticearea = PracticeArea::where('status', 1)->get();
        return view('backend.pages.practicearea.edit', compact('practicearea', 'allpracticearea'));
    }
    
    public function view($id) {
        $practicearea = PracticeArea::find($id);
        return view('backend.pages.practicearea.view', compact('practicearea'));
    }  
    
    public function delete($id) {
        
        $practicearea = PracticeArea::find($id);
        if (!$practicearea) {
            $response = [
                'status' => false,
                'notification' => 'Record not found.!',
            ];
            return response()->json($response);
        }
        $practicearea->delete();

        $response = [
            'status' => true,
            'notification' => 'PracticeArea Deleted successfully!',
        ];

        return response()->json($response);
    }  
    
    public function status($id, $status) { 
        $practicearea = PracticeArea::find($id);
        $practicearea->status = $status;
        $practicearea->save();
    
        return redirect(route('practicearea.index'))->with('success', 'Status Change successfully!');
    }  
    
    public function update(Request $request) {
        $id = $request->input('id');
        $practicearea = PracticeArea::find($id);
    
        if ($request->hasFile('image')) {
            // Update the image if a new one is uploaded
            $imagePath = $request->file('image')->store('assets/image/practicearea', 'public');
            $practicearea->thumnail_image = $imagePath;
        }

        if ($request->hasFile('breadcrumb_image')) {
            // Update the image if a new one is uploaded
            $imagePath1 = $request->file('breadcrumb_image')->store('assets/image/practicearea', 'public');
            $practicearea->breadcrumb_image = $imagePath1;
        }

        // Extract and handle FAQ data
        $faq = $request->input('faq');
        $faq_description = $request->input('faq_description');
    
        if (!empty($faq[0])) {
            $faqs = [];
            for ($j = 0; $j < count($faq); $j++) {
                $faqs[] = [
                    $faq[$j] => $faq_description[$j],    
                ];
            }
            $data['faq'] = json_encode($faqs);
        } else {
            $data['faq'] = '[]';
        }
    
        // Remove the 'faq_description' key as it's not needed anymore
        unset($data['faq_description']);
    
        $practicearea->parent_id = $request->input('parent_id');
        $practicearea->title = $request->input('title');
        $practicearea->slug = $request->input('slug');
        $practicearea->short_description = $request->input('short_description');
        $practicearea->content = $request->input('content');
        $practicearea->why_choose_us = $request->input('why_choose_us');
        $practicearea->faq = $data['faq'];
        $practicearea->meta_title = $request->input('meta_title');
        $practicearea->meta_description = $request->input('meta_description');
        $practicearea->breadcrumb_title = $request->input('breadcrumb_title');
        $practicearea->breadcrumb_subtitle = $request->input('breadcrumb_subtitle');
    
        $practicearea->save();

        $response = [
            'status' => true,
            'notification' => 'Testimonial Update successfully!',
        ];

        return response()->json($response);
    }   
}
