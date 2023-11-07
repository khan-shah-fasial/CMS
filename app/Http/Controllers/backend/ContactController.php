<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    public function index() {
        $contact = Contact::orderBy('id', 'desc')->get();
        return view('backend.pages.contact.index', compact('contact'));
    }    

    public function view($id) {
        $contact = Contact::find($id);
        return view('backend.pages.contact.view', compact('contact'));
    }  
    
    public function delete($id) {
        
        $contact = Contact::find($id);
        if (!$contact) {
            $response = [
                'status' => false,
                'notification' => 'Record not found.!',
            ];
            return response()->json($response);
        }
        $contact->delete();

        $response = [
            'status' => true,
            'notification' => 'Contact Deleted successfully!',
        ];

        return response()->json($response);
    }  
    /*
    public function status($id, $status) { 
        $contact = Contact::find($id);
        $contact->status = $status;
        $contact->save();
    
        return redirect(route('Contact.index'))->with('success', 'Status Change successfully!');
    }  
    
    public function update(Request $request) {
        $id = $request->input('id');
        $contact = Contact::find($id);
        $contact->update($request->all());

        $response = [
            'status' => true,
            'notification' => 'Contact Update successfully!',
        ];

        return response()->json($response);
    } */   
}
