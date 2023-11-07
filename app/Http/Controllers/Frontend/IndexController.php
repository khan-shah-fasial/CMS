<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PracticeArea;
use App\Models\Blog;
use App\Models\BlogCategory;
use App\Models\User;
use App\Models\Team;
use App\Models\Faq;
use App\Models\Contact;
use App\Models\BlogComment;
use Illuminate\Support\Facades\Validator;

class IndexController extends Controller
{
    public function index(){
        return view('frontend.pages.home.index');
    }

    public function practice_area(){
        $practiceAreas = PracticeArea::where('parent_id', null)->get();
        //return $practiceAreas;
        return view('frontend.pages.practicearea.index', compact('practiceAreas'));
    }

    public function practice_area_detail($slug){
        $detail = PracticeArea::where('slug', $slug)->where('status', 1)->first();

        //$slug = str_replace('-', ' ', $slug);
        $blog_Catg = BlogCategory::where('slug', $slug)->where('status', 1)->first();

        if(!empty($blog_Catg)){
            $blog = Blog::where('status', 1)->whereJsonContains('blog_category_ids', ''.$blog_Catg->id.'')->limit(3)->orderBy('id', 'desc')->get();
        } else {
            $blog = [];
        }

        

        if(empty($detail->parent_id)){  
            $child_detail = PracticeArea::where('parent_id', $detail->id)->where('status', 1)->get();
        } else  {
            $child_detail = [];
        }

        return view('frontend.pages.practicearea.detail', compact('detail', 'child_detail', 'blog'));
    }

    public function blog(){
        $blog = Blog::where('status', 1)->whereJsonContains('blog_category_ids', '3')->get();

        return view('frontend.pages.blog.index', compact('blog'));
    }

    public function blog_detail($category, $slug){

        $category_id = BlogCategory::where('slug',$category)->first();

        $detail = Blog::where('slug', $slug)->where('status', 1)->first();

        $author = User::find($detail->user_id);

        $blog = Blog::where('status', 1)->whereJsonContains('blog_category_ids', json_decode($detail->blog_category_ids))->where('id', '!=', $detail->id)->limit(3)->orderBy('id', 'desc')->get();

        $current_id = $detail->id;

        $previous = Blog::where('status', 1)->whereJsonContains('blog_category_ids', ''.$category_id->id.'')->where('id', '<', $current_id)->orderBy('id', 'desc')->first();
        $next = Blog::where('status', 1)->whereJsonContains('blog_category_ids', ''.$category_id->id.'')->where('id', '>', $current_id)->orderBy('id', 'asc')->first();

        $previous_slug = $previous ? $previous->slug : null;
        $next_slug = $next ? $next->slug : null;

        return view('frontend.pages.blog.detail', compact('detail','author','blog','previous_slug','next_slug'));
    }

    public function team_members(){
        $team = Team::orderBy('series', 'asc')->get();

        return view('frontend.pages.team.index', compact('team'));
    }

    public function not_found(){

        return view('frontend.pages.404.index');
    }
    public function thank_you(){

        return view('frontend.pages.thankyou.index');
    }



    public function team_detail($slug){
        $slug = str_replace('-', ' ', $slug);

        $detail = Team::where('name', $slug)->where('status', 1)->first();

        return view('frontend.pages.team.detail', compact('detail'));
    }

    public function contact_us(){
        return view('frontend.pages.contact.index');
    }

    public function career(){
        return view('frontend.pages.career.index');
    }

    public function faq(){
        $faq = Faq::where('status', 1)->get();
        return view('frontend.pages.faq.index', compact('faq'));
    }

    public function about_us(){
        return view('frontend.pages.about.index');
    }

    public function privacy_policy(){
        return view('frontend.pages.privacypolice.index');
    }

    public function contact_save(Request $request)
    {
        $rules = [
            'cv' => 'nullable|mimetypes:application/pdf,application/msword',
        ];
    
        $validator = \Validator::make($request->all(), $rules); // Pass $request->all() as the first argument
    
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'notification' => $validator->errors(),
            ]);
        }
    
        if ($request->hasFile('cv')) {
            $cvPath = $request->file('cv')->store('assets/image/pdf', 'public');
        } else {
            $cvPath = null; // Set to null if 'cv' is not provided
        }
    
        // Create the contact record, including 'cv' if provided
        $contactData = $request->all();
        $contactData['cv'] = $cvPath;
    
        // Create the contact record
        Contact::create($contactData);
    
        $response = [
            'status' => true,
            'notification' => 'Contact added successfully!',
        ];
    
        return response()->json($response);
    }
    
    public function news(){
        $news = Blog::where('status', 1)->whereJsonContains('blog_category_ids', '4')->get();

        return view('frontend.pages.news.index', compact('news'));
    }

    public function deal_update(){
        $deal_update = Blog::where('status', 1)->whereJsonContains('blog_category_ids', '5')->get();

        return view('frontend.pages.deal_update.index', compact('deal_update'));
    }

    public function search(Request $request){

        $query = $request->input('query');

        $blogs = Blog::where(function ($queryBuilder) use ($query) {
            $queryBuilder->where('title', 'like', "%$query%")
                ->orWhere('short_description', 'like', "%$query%")
                ->orWhere('content', 'like', "%$query%");
        })->where('status', 1)->get();
        
        $practiceAreas = PracticeArea::where(function ($queryBuilder) use ($query) {
            $queryBuilder->where('title', 'like', "%$query%")
                ->orWhere('short_description', 'like', "%$query%")
                ->orWhere('content', 'like', "%$query%");
        })->where('status', 1)->get();

        return view('frontend.pages.search.index', compact('blogs','practiceAreas'));
    }

    public function comment_save(Request $request)
    {
        $commentData = $request->all();

        $validator = Validator::make($commentData, [
            'g-recaptcha-response' => 'required|captcha',
        ]);
        
        if ($validator->fails()) {
            $response = [
                'status' => false,
                'notification' => $validator->errors()->all()
            ];
        }else{
            // Create the contact record
            BlogComment::create($commentData);
        
            $response = [
                'status' => true,
                'notification' => 'Comment added successfully!',
            ];
        }      
    
        return response()->json($response);
    }

}