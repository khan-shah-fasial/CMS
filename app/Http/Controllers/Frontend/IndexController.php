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

        $slug = str_replace('-', ' ', $slug);
        $blog_Catg = BlogCategory::where('name', $slug)->where('status', 1)->first();

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
        $blog = Blog::where('status', 1)->get();

        return view('frontend.pages.blog.index', compact('blog'));
    }

    public function blog_detail($slug){
        
        $detail = Blog::where('slug', $slug)->where('status', 1)->first();

        $author = User::find($detail->user_id);

        $blog = Blog::where('status', 1)->whereJsonContains('blog_category_ids', json_decode($detail->blog_category_ids))->where('id', '!=', $detail->id)->limit(3)->orderBy('id', 'desc')->get();

        return view('frontend.pages.blog.detail', compact('detail','author','blog'));
    }

    public function team_members(){
        $team = Team::orderBy('series', 'asc')->get();

        return view('frontend.pages.team.index', compact('team'));
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
        // Create the contact record
        Contact::create($request->all());
    
        $response = [
            'status' => true,
            'notification' => 'Contact added successfully!',
        ];
    
        return response()->json($response);
    }
}