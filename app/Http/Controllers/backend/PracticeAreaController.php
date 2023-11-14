<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PracticeArea;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class PracticeAreaController extends Controller
{
    public function index() {
        $practicearea = PracticeArea::orderBy('id', 'desc')->get();
        return view('backend.pages.practicearea.index', compact('practicearea'));
    }

    public function add() {
        $practicearea = PracticeArea::where('status', 1)->get();
        return view('backend.pages.practicearea.add', compact('practicearea'));
    }  
    
    public function create(Request $request) {
        // Validate form data
        $validator = Validator::make($request->all(), [
            'title' => 'required|max:191',
            'slug' => 'required|unique:practice_areas',
            'short_description' => 'required',
            'content' => 'required',
            'thumnail_image' => 'image',
            'section_image' => 'image',
            'meta_title' => 'required|max:255',
            'meta_description' => 'required',
            'breadcrumb_title' => 'required|max:191',
            'breadcrumb_subtitle' => 'required|max:191',
            'breadcrumb_image' => 'required|image', 
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validator->errors()->all()
            ], 200);
        }        
    
        // Upload image
        $imagePath = $request->file('image')->store('assets/image/practicearea', 'public');
        $imagePath1 = $request->file('breadcrumb_image')->store('assets/image/practicearea', 'public');

        if ($request->hasFile('section_image')) {
            $imagePath2 = $request->file('section_image')->store('assets/image/practicearea', 'public');
        } else {
            $imagePath2 = null;
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

        $slug = Str::slug($request->input('slug'), '-');

        $focusArea = $request->input('focus_area', []);
        
        // Create the PracticeArea record with 'PracticeArea_category_ids' included
        PracticeArea::create([
            'parent_id' => $request->input('parent_id'),
            'title' => $request->input('title'),
            'slug' => $slug,
            'short_description' => $request->input('short_description'),
            'content' => $request->input('content'),
            'focus_area' => json_encode($focusArea),
            'why_choose_us' => $request->input('why_choose_us'),
            'faq' => $data['faq'],
            'thumnail_image' => $imagePath,
            'alt_thumnail_image' => $request->input('alt_thumnail_image'),
            'section_image' => $imagePath2,
            'alt_section_image' => $request->input('alt_section_image'),
            'meta_title' => $request->input('meta_title'),
            'meta_description' => $request->input('meta_description'),
            'breadcrumb_title' => $request->input('breadcrumb_title'),
            'breadcrumb_subtitle' => $request->input('breadcrumb_subtitle'),
            'breadcrumb_image' => $imagePath1,
        ]);
    
        $response = [
            'status' => true,
            'notification' => 'Practice area added successfully!',
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
        $practicearea->delete();

        $response = [
            'status' => true,
            'notification' => 'Practice area deleted successfully!',
        ];

        return response()->json($response);
    }  
    
    public function status($id, $status) { 
        $practicearea = PracticeArea::find($id);
        $practicearea->status = $status;
        $practicearea->save();
    
        return redirect(route('practicearea.index'))->with('success', 'Status changed successfully!');
    }  
    
    public function update(Request $request) {

        $validator = Validator::make($request->all(), [
            'title' => 'required|max:191',
            'slug' => 'required|unique:practice_areas,slug,'. $request->input('id'),
            'short_description' => 'required',
            'content' => 'required',
            'thumnail_image' => 'image',
            'section_image' => 'image',
            'meta_title' => 'required|max:255',
            'meta_description' => 'required',
            'breadcrumb_title' => 'required|max:191',
            'breadcrumb_subtitle' => 'required|max:191',
            'breadcrumb_image' => 'image', 
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validator->errors()->all()
            ], 200);
        }

        $id = $request->input('id');
        $practicearea = PracticeArea::find($id);
    
        if ($request->hasFile('image')) {
            // Update the image if a new one is uploaded
            $imagePath = $request->file('image')->store('assets/image/practicearea', 'public');
            $practicearea->thumnail_image = $imagePath;
        }else{
            if($request->has('image_check') && $practicearea->thumnail_image){
                Storage::disk('public')->delete($practicearea->thumnail_image);
                $practicearea->thumnail_image = null;
            }
        }

        if ($request->hasFile('breadcrumb_image')) {
            // Update the image if a new one is uploaded
            $imagePath1 = $request->file('breadcrumb_image')->store('assets/image/practicearea', 'public');
            $practicearea->breadcrumb_image = $imagePath1;
        }else{
            if($request->has('breadcrumb_image_check') && $practicearea->breadcrumb_image){
                Storage::disk('public')->delete($practicearea->breadcrumb_image);
                $practicearea->breadcrumb_image = null;
            }
        }

        if ($request->hasFile('section_image')) {
            // Update the image if a new one is uploaded
            $imagePath2 = $request->file('section_image')->store('assets/image/practicearea', 'public');
            $practicearea->section_image = $imagePath2;
        }else{
            if($request->has('section_image_check') && $practicearea->section_image){
                Storage::disk('public')->delete($practicearea->section_image);
                $practicearea->section_image = null;
            }
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

        $slug = Str::slug($request->input('slug'), '-');
    
        $practicearea->parent_id = $request->input('parent_id');
        $practicearea->title = $request->input('title');
        $practicearea->slug = $slug;
        $practicearea->alt_thumnail_image = $request->input('alt_thumnail_image');
        $practicearea->alt_section_image = $request->input('alt_section_image');
        $practicearea->short_description = $request->input('short_description');
        $practicearea->content = $request->input('content');
        $practicearea->focus_area = json_encode($request->input('focus_area'));
        $practicearea->why_choose_us = $request->input('why_choose_us');
        $practicearea->faq = $data['faq'];
        $practicearea->meta_title = $request->input('meta_title');
        $practicearea->meta_description = $request->input('meta_description');
        $practicearea->breadcrumb_title = $request->input('breadcrumb_title');
        $practicearea->breadcrumb_subtitle = $request->input('breadcrumb_subtitle');
    
        $practicearea->save();

        $response = [
            'status' => true,
            'notification' => 'Practice area updated successfully!',
        ];

        return response()->json($response);
    }   
}
