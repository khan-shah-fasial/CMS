<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BackendAuthenticateController extends Controller
{
    public function login(){
        return view('backend.auth.login');
    }
}
