<?php

use Illuminate\Support\Facades\Cache;
//use App\Models\Award;
//use App\Models\Blog;
//use App\Models\BlogCategory;
//use App\Models\BlogComment;
use App\Models\BusinessSetting;
//use App\Models\Contact;
//use App\Models\Faq;
//use App\Models\MediaCoverage;
//use App\Models\PracticeArea;
//use App\Models\Publication;
//use App\Models\Team;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

use App\Models\Contact;


    if (!function_exists('datetimeFormatter')) {
        function datetimeFormatter($value)
        {
            return date('d M Y H:iA', strtotime($value));
        }
    }

    //sensSMS function for OTP
    if (!function_exists('get_settings')) {
        function get_settings($type)
        {
            $cacheKey = "business_setting_{$type}";
        
            // Check if the value is already in the cache
            if (Cache::has($cacheKey)) {
                return Cache::get($cacheKey);
            }
        
            // If not in the cache, retrieve the value from the database
            $businessSetting = BusinessSetting::where('type', $type)->first();
        
            if ($businessSetting) {
                $value = $businessSetting->value;
        
                // Store the value in the cache with a specific lifetime (e.g., 60 minutes)
                Cache::put($cacheKey, $value, now()->addMinutes(60));
        
                return $value;
            }
        
            // Handle the case where no record is found
            return null; // or any default value or error handling you prefer
        }
    }

    if(!function_exists('sendEmail')){
        function sendEmail($to, $subject, $body, $attachments = [])
        {
            return \Illuminate\Support\Facades\Mail::raw($body, function ($message) use ($to, $subject, $attachments) {
                $message->to($to)
                //$message->to('khanfaisal.makent@gmail.com')
                        ->subject($subject);
        
                // Attachments
                foreach ($attachments as $attachment) {
                    $message->attach($attachment['path'], ['as' => $attachment['name']]);
                }
            });
        }  
    }

    if(!function_exists('customSlug')){
        function customSlug($value)
        {
            return preg_replace('/[^a-z0-9\/]/i', '-', Str::lower($value));
        }
    }

    if(!function_exists('ip_info')){
        function ip_info(){
            
            if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
                $ip = $_SERVER['HTTP_CLIENT_IP'];
            } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
                $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
            } else {
                $ip = $_SERVER['REMOTE_ADDR'] ?  $_SERVER['REMOTE_ADDR'] : '';
            }
            $ip = explode(',', $ip);
            $ip = $ip[0];
            //$ip = '103.175.61.38';
            		
            //$info = file_get_contents("http://ipinfo.io/{$ip}/geo");
            
            $curl = curl_init();
            
            curl_setopt($curl, CURLOPT_URL, 'ipinfo.io/'.$ip.'?token='.env('IPINFO_API_TOKEN'));
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($curl, CURLOPT_ENCODING, '');
            curl_setopt($curl, CURLOPT_MAXREDIRS, 10);
            curl_setopt($curl, CURLOPT_TIMEOUT, 0);
            curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
            curl_setopt($curl, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
            curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'GET');
            
            $info = curl_exec($curl);
            curl_close($curl);
            
            if(!empty($info)){
                return $info; //return in json
            }else{
                $info = '{ "ip": "none", "city": "none", "region": "none", "country": "none", "loc": "none", "postal": "none", "timezone": "none", "readme": "none" }';
                return $info; //return in json
            }
        }
    }

    if (!function_exists('blog_url_comment')) {
        function blog_url_comment($value)
        {
            return Cache::remember('blog_url_comment_' . $value, now()->addDay(), function () use ($value) {
                $blog = DB::table('blogs')->where('id', $value)->get()->first();
    
                if ($blog) {
                    $category = json_decode($blog->blog_category_ids);
                    if(!empty($category)){
                        $category_slug = DB::table('blog_categories')->where('id', $category[0])->value('slug');
                        $url = url(route('blog.detail', ['category' => $category_slug, 'slug' => strtolower(str_replace(' ', '-', $blog->slug))]));
        
                        $data = json_encode(['url' => $url, 'title' => $blog->title]);
                    } else {
                        $data = "Category Not exist";
                    }

                } else {
                    $data = "No Blog Found";
                }
    
                return $data;
            });
        }
    }

    if(!function_exists('zoho_token')){
        function zoho_token(){
            
            $curl = curl_init();

            curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://accounts.zoho.in/oauth/v2/token',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS => 'refresh_token=1000.d55457585527e822e4e400a7445bf23c.86644df7fed25fcf5fe2f49f1a1b4208&client_id=1000.EIB30REY5ITAJGA7WEO4QBNNQV3KMD&client_secret=dc1140a7e5c9e52a0b59f738d553f19b6065b9e5c2&grant_type=refresh_token',
            CURLOPT_HTTPHEADER => array(
                'Content-Type: application/x-www-form-urlencoded',
                'Cookie: 6e73717622=3bcf233c3836eb7934b6f3edc257f951; _zcsr_tmp=f23e9be0-5fc5-43f2-9040-1861acbac7a5; iamcsr=f23e9be0-5fc5-43f2-9040-1861acbac7a5'
            ),
            ));
    
            $response = curl_exec($curl);
    
            curl_close($curl);
            return $response;

        }
    }


    if(!function_exists('zoho_lead_create')){
        function zoho_lead_create($access_token, $api_domain, $name, $email, $phone, $services, $description, $url, $state, $city){
            
            $curl = curl_init();

            curl_setopt_array($curl, array(
            CURLOPT_URL => '' . $api_domain . '/crm/v6/Leads',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS =>'{
                "data": [
                    {
                        "Lead_Source": "Website",
                        "Company" : " - ",
                        "Last_Name": " - ",
                        "First_Name": "'.$name.'",
                        "Email": "'.$email.'",
                        "State": "'.$state.'",
                        "Phone": "'.$phone.'",
                        "Mobile": "'.$phone.'",
                        "Designation": "'.$services.'",
                        "City": "'.$city.'",
                        "Description": "'.$description.'",
                        "Brief_description_of_your_legal_issues": "'.$description.'",
                        "Submitted_Page_URL": "'.$url.'",
                        "Service_Requests": "'.$services.'"

                    }
                ],
                "trigger": [
                    "approval",
                    "workflow",
                    "blueprint"
                ]
            }',
            CURLOPT_HTTPHEADER => array(
                'Authorization: Zoho-oauthtoken ' . $access_token,
                'Content-Type: application/json'
            ),
            ));

            $response = curl_exec($curl);

            curl_close($curl);
            return $response;

        }
    }



    if(!function_exists('zoho_pending_lead')){
        function zoho_pending_lead(){
            
            $contact = Contact::where('success','0')->get();

            if(count($contact) > 0){
                foreach($contact as $row){
                    $location = json_decode($row->response);
        
                    $token = json_decode(zoho_token(), true);
        
                    $access_token = $token['access_token'];
                    $api_domain = $token['api_domain'];
                    $state = $location->state;
                    $city = $location->city;
        
                    $name = $row->name;
                    $email = $row->email;
                    $phone = $row->phone;
                    $services = $row->services;
                    $description = $row->description;
                    $url = $row->url;
        
        
        
                    if($token['access_token'] && $token['api_domain']){
        
                        // Remove newline characters and spaces
                        $description = str_replace(array("\n", "\r"), '', $description);
            
                        $zoho = zoho_lead_create($access_token, $api_domain, $name, $email, $phone, $services, $description, $url, $state, $city);
            
                        $zoho_response = json_decode($zoho);
            
                        if(isset($zoho_response->data)){
                            $zoho_status = $zoho_response->data[0]->code;
                        } else {
                            $zoho_status = '';
                        }
            
            
                        // Get the ID of the newly created contact
                        $ContactId = $row->id;
    
    
                        $zoho_data = [
                            'zoho' => $zoho,
                            'state' => $location->state,
                            'city' => $location->city,
                        ];
            
                        if($zoho_status == "SUCCESS"){
            
                            Contact::where('id', $ContactId)->update([
                                'success' => '1',
                                'response' => json_encode($zoho_data),
                                'attempt' => '0'
                            ]);
            
                        } else {
            
                            Contact::where('id', $ContactId)->update([
                                'success' => '0',
                                'response' => json_encode($zoho_data),
                                'attempt' => $row->attempt + 1,
                            ]);
            
                        }
            
                    } 
                }
    
    
    
    
    
    
            }


        }
    }


