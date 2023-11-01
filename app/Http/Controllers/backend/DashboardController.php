<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\models\PracticeArea;
use App\models\Blog;
use App\models\Team;
use App\models\Contact;

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
