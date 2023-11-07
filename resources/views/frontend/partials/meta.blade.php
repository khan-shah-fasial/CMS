@php

$title = !empty(trim($__env->yieldContent('page.title'))) ? $__env->yieldContent('page.title') : 'Ahlawat Associates:
Top Lawyers &amp; Law Firms in Delhi, India';

$description = !empty(trim($__env->yieldContent('page.description'))) ? $__env->yieldContent('page.description') :
'Ahlawat Associates is one of the best law firms in Delhi, India. We provide legal assistance for startups, FDI,
Property law, IP, and more.';

$page_type = !empty(trim($__env->yieldContent('page.type'))) ? $__env->yieldContent('page.type') : 'website';

$publish_time = !empty(trim($__env->yieldContent('page.publish_time'))) ? $__env->yieldContent('page.publish_time') :
'2023-09-18T13:41:39+00:00';

$url = url()->current();

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



<!----------------- og tag ------------------->

<meta property="og:image" content="{{ asset('assets/frontend/images/logo.png') }}">
<meta property="og:image:width" content="500">
<meta property="og:image:height" content="500">
<meta property="og:image:type" content="image/png" />

<!----------------- og tag ------------------->

<!----------------- twitter ------------------->

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Ahlawat & Associates">
<meta name="twitter:description" content="Ahlawat & Associates">
<meta name="twitter:image" content="{{ asset('assets/frontend/images/logo.png') }}">
<meta name="twitter:site" content="@ahlawatlaw" />
<link rel="shortcut icon" href="{{ asset('/assets/frontend/images/favicon.png') }}">

<!----------------- twitter ------------------->

<!----------------- canonical ------------------->

<link rel="canonical" href="{{ url()->current() }}">

<!----------------- canonical ------------------->


<!----------------- schema ------------------->
<script type="application/ld+json"
    class="yoast-schema-graph">{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://www.ahlawatassociates.com/","url":"https://www.ahlawatassociates.com/","name":"Ahlawat & Associates: Top Lawyers & Law Firms in Delhi, India","isPartOf":{"@id":"https://www.ahlawatassociates.com/#website"},"about":{"@id":"https://www.ahlawatassociates.com/#organization"},"primaryImageOfPage":{"@id":"https://www.ahlawatassociates.com/#primaryimage"},"image":{"@id":"https://www.ahlawatassociates.com/#primaryimage"},"thumbnailUrl":"https://www.ahlawatassociates.com/wp-content/uploads/2021/08/logo-website-02.png","datePublished":"2021-03-08T12:19:37+00:00","dateModified":"2023-09-18T13:41:39+00:00","description":"Ahlawat & Associates is one of the best law firms in Delhi, India. We provide legal assistance for startups, FDI, Property law, IP, and more.","breadcrumb":{"@id":"https://www.ahlawatassociates.com/#breadcrumb"},"inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["https://www.ahlawatassociates.com/"]}]},{"@type":"ImageObject","inLanguage":"en-US","@id":"https://www.ahlawatassociates.com/#primaryimage","url":"https://www.ahlawatassociates.com/wp-content/uploads/2021/08/logo-website-02.png","contentUrl":"https://www.ahlawatassociates.com/wp-content/uploads/2021/08/logo-website-02.png","width":625,"height":625,"caption":"Ahlawat & Associates"},{"@type":"BreadcrumbList","@id":"https://www.ahlawatassociates.com/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home"}]},{"@type":"WebSite","@id":"https://www.ahlawatassociates.com/#website","url":"https://www.ahlawatassociates.com/","name":"Ahlawat & Associates","description":"Advocates","publisher":{"@id":"https://www.ahlawatassociates.com/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://www.ahlawatassociates.com/?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"en-US"},{"@type":"Organization","@id":"https://www.ahlawatassociates.com/#organization","name":"Ahlawat Associates","url":"https://www.ahlawatassociates.com/","logo":{"@type":"ImageObject","inLanguage":"en-US","@id":"https://www.ahlawatassociates.com/#/schema/logo/image/","url":"https://www.ahlawatassociates.com/wp-content/uploads/2021/08/logo-website-02.png","contentUrl":"https://www.ahlawatassociates.com/wp-content/uploads/2021/08/logo-website-02.png","width":625,"height":625,"caption":"Ahlawat Associates"},"image":{"@id":"https://www.ahlawatassociates.com/#/schema/logo/image/"},"sameAs":["https://www.facebook.com/ahlawatassociates/","https://twitter.com/ahlawatlaw","https://in.linkedin.com/company/ahlawat-associates"]}]}</script>
<!----------------- schema ------------------->

<!--google tag manager code open-->
<script type="rocketlazyloadscript" async
    data-rocket-src="https://www.googletagmanager.com/gtag/js?id=G-GTLLQV0KXE"></script>
<script type="rocketlazyloadscript">
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-GTLLQV0KXE');
</script>
<!--google tag manager code close-->

<base id="baseUrl" href="{{url('')}}">