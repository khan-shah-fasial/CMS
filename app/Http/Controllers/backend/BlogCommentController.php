<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\BlogComment;

class BlogCommentController extends Controller
{
    public function index() {
        $blogcomment = BlogComment::orderBy('id', 'desc')->get();
        return view('backend.pages.blogcomment.index', compact('blogcomment'));
    }

    
    public function delete($id) {
        
        $blogcomment = BlogComment::find($id);
        if (!$blogcomment) {
            $response = [
                'status' => false,
                'notification' => 'Record not found.!',
            ];
            return response()->json($response);
        }
        $blogcomment->delete();

        $response = [
            'status' => true,
            'notification' => 'Comment deleted successfully!',
        ];

        return response()->json($response);
    }  
    
    public function status($id, $status) { 
        $blogcomment = BlogComment::find($id);
        $blogcomment->status = $status;
        $blogcomment->save();
    
        return redirect(route('blogcomment.index'))->with('success', 'Status changed successfully!');
    }  
     
}
