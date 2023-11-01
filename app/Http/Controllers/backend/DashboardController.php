<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PracticeArea;
use App\Models\Blog;
use App\Models\Team;
use App\Models\Contact;

class DashboardController extends Controller
{
    public function index(){
        $practiceAreaCount = PracticeArea::count();
        $postCount = Blog::count();
        $teamCount = Team::count();
        $contactCount = Contact::count();
        return view('backend.pages.dashboard.index', compact('practiceAreaCount', 'postCount', 'teamCount', 'contactCount'));
    }
}
