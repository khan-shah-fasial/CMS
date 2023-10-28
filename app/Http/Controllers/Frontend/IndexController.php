<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PracticeArea;
use App\Models\Blog;
use App\Models\BlogCategory;
use App\Models\User;
use App\Models\Team;

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

        if(empty($detail->parent_id)){  
            $child_detail = PracticeArea::where('parent_id', $detail->id)->where('status', 1)->get();
        } else  {
            $child_detail = [];
        }

        return view('frontend.pages.practicearea.detail', compact('detail', 'child_detail'));
    }

    public function blog(){
        return view('frontend.pages.blog.index');
    }

    public function blog_detail($slug){
        $detail = Blog::where('slug', $slug)->where('status', 1)->first();
        $author = User::find($detail->user_id);

        return view('frontend.pages.blog.detail', compact('detail','author'));
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
        return view('frontend.pages.faq.index');
    }

    public function about_us(){
        return view('frontend.pages.about.index');
    }

    public function privacy_policy(){
        return view('frontend.pages.privacypolice.index');
    }
}