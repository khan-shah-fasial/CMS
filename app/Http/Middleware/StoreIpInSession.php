<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Session;


class StoreIpInSession
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $ipAddress = $request->ip();

        if (!Session::has('user_ip')) {
            $user_ip = ip_info();
     
            $session_data = json_decode($user_ip, true);

            if (!isset($session_data["ip"])) {
                
                $user_ip = '{ "ip": "none", "city": "none", "region": "none", "country": "none", "loc": "none", "postal": "none", "timezone": "none", "readme": "none" }';
                Session::put('user_ip', $user_ip);
            } else {
                Session::put('user_ip', $user_ip);
            }
        } else {
            
            $session_data = json_decode(session('user_ip'), true);
            if (!isset($session_data["ip"])) {
                
                $user_ip = '{ "ip": "none", "city": "none", "region": "none", "country": "none", "loc": "none", "postal": "none", "timezone": "none", "readme": "none" }';
                Session::put('user_ip', $user_ip);
            }
           
        } 

        return $next($request);
    }
}
