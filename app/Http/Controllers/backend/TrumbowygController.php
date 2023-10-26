<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TrumbowygController extends Controller
{
    public function upload(Request $request){
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('assets/image/trumbowyg', 'public');
    
            return response()->json([
                'success' => true,
                'file' => url('storage/'.$imagePath)
            ]);
        }else{
            return response()->json([
                'success' => false,
                'message' => 'No image uploaded.'
            ]);
        }
    }
}
