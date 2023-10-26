<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function index(){
        return view('frontend.pages.home.index');
    }

    public function practice_area(){
        return view('frontend.pages.practicearea.index');
    }

    public function blog(){
        return view('frontend.pages.blog.index');
    }

    public function blog_detail(){
        return view('frontend.pages.blog.detail');
    }

    public function team_members(){
        return view('frontend.pages.team.index');
    }

    public function team_detail(){
        return view('frontend.pages.team.detail');
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
}
