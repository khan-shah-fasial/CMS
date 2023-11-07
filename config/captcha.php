<?php

return [
    'secret' => env('GOOGLE_CAPTCHA_SECRET'),
    'sitekey' => env('GOOGLE_CAPTCHA_SITEKEY'),
    'options' => [
        'timeout' => 30,
    ],
];
