<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\BusinessSetting;
use Illuminate\Support\Facades\Validator;

class BusinessSettingController extends Controller
{
    public function index() {
        return view('backend.pages.setting.index');
    }

    public function privacy_policy() {
        return view('backend.pages.privacy.index');
    }

    public function cookie_policy() {
        return view('backend.pages.cookie.index');
    }

    public function about_us() {
        return view('backend.pages.about.index');
    }

    public function career() {
        return view('backend.pages.career.index');
    }

    public function contact_us() {
        return view('backend.pages.contact_us.index');
    }
      
    public function update(Request $request) {
        // Assuming the request data is in key-value pairs
    
        // Get all the data from the request
        $requestData = $request->all();
    
        foreach ($requestData as $key => $value) {
            if($key != '_token'){
                BusinessSetting::where('type', $key)->update(['value' => $value]);
            }
        }

        $response = [
            'status' => true,
            'notification' => 'Blog updated successfully!',
        ];

        return response()->json($response);
    }
}
