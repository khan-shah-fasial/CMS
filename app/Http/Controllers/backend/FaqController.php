<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Faq;

class FaqController extends Controller
{
    public function index() {
        $faq = Faq::orderBy('id', 'desc')->get();
        return view('backend.pages.faq.index', compact('faq'));
    }

    public function add() {
        return view('backend.pages.faq.add');
    }  
    
    public function create(Request $request) {
        $faq = Faq::create([
            'question' => $request->input('question'),
            'answer' => $request->input('answer'),
        ]);

        $response = [
            'status' => true,
            'notification' => 'Faq added successfully!',
        ];
        
        return response()->json($response);
    }     

    public function edit($id) {
        $faq = Faq::find($id);
        return view('backend.pages.faq.edit', compact('faq'));
    }  
    
    public function delete($id) {
        
        $faq = Faq::find($id);
        if (!$faq) {
            $response = [
                'status' => false,
                'notification' => 'Record not found.!',
            ];
            return response()->json($response);
        }
        $faq->delete();

        $response = [
            'status' => true,
            'notification' => 'Faq deleted successfully!',
        ];

        return response()->json($response);
    }  
    
    public function status($id, $status) { 
        $faq = Faq::find($id);
        $faq->status = $status;
        $faq->save();
    
        return redirect(route('faq.index'))->with('success', 'Status changed successfully!');
    }  
    
    public function update(Request $request) {
        $id = $request->input('id');
        $faq = Faq::find($id);
        $faq->update($request->all());

        $response = [
            'status' => true,
            'notification' => 'Faq updated successfully!',
        ];

        return response()->json($response);
    }   
}
