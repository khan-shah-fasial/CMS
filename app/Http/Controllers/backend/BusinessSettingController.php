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

    public function home_page() {
        return view('backend.pages.home.index');
    }
      
    public function update(Request $request) {
        // Assuming the request data is in key-value pairs
        $i = 0;
        $imgs = [];
        // Get all the data from the request
        $requestData = $request->all();
    
        foreach ($requestData as $key => $value) {
            
            if ($key === 'header_script') {
                if (empty($value)) {
                    BusinessSetting::where('type', $key)->update(['value' => '']);
                } else {
                    BusinessSetting::where('type', $key)->update(['value' => $value]);
                }
            }

            if ($key === 'cookie_content') {
                if (empty($value)) {
                    BusinessSetting::where('type', $key)->update(['value' => '']);
                } else {
                    BusinessSetting::where('type', $key)->update(['value' => $value]);
                }
            }

            if ($key !== '_token' && $value !== null) {
                if ($key === 'Banner_1' || $key === 'Banner_2' || $key === 'Banner_3' || $key === 'Banner_4') {
                   
                    
                    $type = $key;

                    //var_dump($key);
                    //echo'<pre>';
                    //var_dump($value);
                    //echo'<pre>';

                    //var_dump(count($value));
                    //echo'<pre>';

                    
                    
                    for ($j = 0; $j < count($value); $j++) {

                        if($type != 'Banner_2'){
                            
                            
                            $imagePath = $value[$i]->store('assets/image/banner', 'public');
                            $imgs[] = $imagePath;
                        } else {
                            //echo'Banner_2';
                           $imgs[] = $value[$j];
                           
                        } 
                        $i++;   
                    }

                    //echo'<pre>';
                    //var_dump($imgs);
                                        
                    //$imagePath = $value->store('assets/image/banner', 'public');
                    BusinessSetting::where('type', 'Banner_1')->update(['value' =>  $imgs]);
                } else {
                    BusinessSetting::where('type', $key)->update(['value' => $value]);
                }

            }
        }


        $response = [
            'status' => true,
            'notification' => 'Blog updated successfully!',
        ];

        return response()->json($response);
    }
}
