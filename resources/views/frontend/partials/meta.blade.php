
@php

$title = !empty(trim($__env->yieldContent('page.title'))) ? $__env->yieldContent('page.title') : 'Ahlawat Associates: Top Lawyers &amp; Law Firms in Delhi, India';

$description = !empty(trim($__env->yieldContent('page.description'))) ? $__env->yieldContent('page.description') : 'Ahlawat Associates is one of the best law firms in Delhi, India. We provide legal assistance for startups, FDI, Property law, IP, and more.';

$page_type = !empty(trim($__env->yieldContent('page.type'))) ? $__env->yieldContent('page.type') : 'website';

$publish_time = !empty(trim($__env->yieldContent('page.publish_time'))) ? $__env->yieldContent('page.publish_time') : '2023-09-18T13:41:39+00:00';

$url =  url()->current();

@endphp



<title>{{ $title }}</title>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="author" content="NEXGENO">

<meta name="title" content="{{ $title }}">
<meta name="description" content="{{ $description }}">

<meta property="og:url" content="{{ $url }}">
<meta property="og:type" content="{{ $page_type }}">
<meta property="og:site_name" content="{{ url('') }}">
<meta property="og:locale" content="en_US">

<meta property="og:title" content="{{ $title }}">
<meta property="og:description" content="{{ $description }}">

<meta property="article:publisher" content="https://www.facebook.com/ahlawatassociates/" />
<meta property="article:modified_time" content="{{ $publish_time }}" />

<meta property="og:image" content="{{ asset('assets/frontend/images/logo.png') }}">
<meta property="og:image:width" content="500">
<meta property="og:image:height" content="500">
<meta property="og:image:type" content="image/png" />

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Ahlawat & Associates">
<meta name="twitter:description" content="Ahlawat & Associates">
<meta name="twitter:image" content="{{ asset('assets/frontend/images/logo.png') }}">
<meta name="twitter:site" content="@ahlawatlaw" />
<link rel="shortcut icon" href="{{ asset('/assets/frontend/images/favicon.png') }}">


<link rel="canonical" href="{{ url()->current() }}">
