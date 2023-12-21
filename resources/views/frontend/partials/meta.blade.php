@php

$title = !empty(trim($__env->yieldContent('page.title'))) ? str_replace(['&nbsp;', '&amp;', '&amp;amp;'], ['&amp;', '&', '&'], htmlspecialchars_decode($__env->yieldContent('page.title'))) : 'Ahlawat Associates:Top Lawyers &amp; Law Firms in Delhi, India';

$description = !empty(trim($__env->yieldContent('page.description'))) ? str_replace(['&nbsp;', '&amp;', '&amp;amp;'], ['&amp;', '&', '&'], htmlspecialchars_decode($__env->yieldContent('page.description'))) :
'Ahlawat Associates is one of the best law firms in Delhi, India. We provide legal assistance for startups, FDI,
Property law, IP, and more.';

$page_type = !empty(trim($__env->yieldContent('page.type'))) ? $__env->yieldContent('page.type') : 'website';

$publish_time = !empty(trim($__env->yieldContent('page.publish_time'))) ? $__env->yieldContent('page.publish_time') :
'2023-09-18T13:41:39+00:00';

$url = url()->current();

@endphp


<title>@php echo htmlspecialchars_decode($title) @endphp</title>
<meta charset="UTF-8" />
<title>{{ $title }}</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="author" content="NEXGENO">

<meta name="title" content="@php echo htmlspecialchars_decode($title) @endphp">
<meta name="description" content="@php echo htmlspecialchars_decode($description) @endphp">

<meta property="og:url" content="{{ $url }}">
<meta property="og:type" content="{{ $page_type }}">
<meta property="og:site_name" content="{{ url('') }}">
<meta property="og:locale" content="en_US">

<meta property="og:title" content="@php echo htmlspecialchars_decode($title) @endphp">
<meta property="og:description" content="@php echo htmlspecialchars_decode($description) @endphp">

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

<!---------------- logo Schema ------------------->

<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ahlawat Associates",
    "url": "{{ url('') }}/",
    "logo": "{{ asset('/assets/frontend/images/logo.png') }}",
    "sameAs": [
      "https://www.facebook.com/ahlawatassociates/",
      "https://twitter.com/AhlawatLaw/",
      "https://in.linkedin.com/company/ahlawat-associates"
    ]
  }
</script>
  
<!---------------- logo schema end --------------->

<!---------------- Contact Address Schema ------------------->

<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Ahlawat Associates",
    "image": "{{ asset('/assets/frontend/images/logo.png') }}",
    "@id": "",
    "url": "{{ url('') }}/",
    "telephone": "011-41023400",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Plot No. 66, LGF, #TheHub, Okhla Phase III, Okhla Industrial Estate,",
        "addressLocality": "New Delhi",
        "postalCode": "110020",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "No. 611, Reliables Pride opp.Om Heera Panna Mall, Anand Nagar, Jogeshwari West,",
        "addressLocality": "Mumbai",
        "postalCode": "400102",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Space jam, SCO, 50-51, Sector 34A,",
        "addressLocality": "Chandigarh",
        "postalCode": "160022",
        "addressCountry": "IN"
      }
    ]  
  }
</script>

@yield('page.schema')
  

<!---------------- Contact Address Schema end ------------------->

<!-- Yandex.Metrika counter 
<script type="text/javascript" >
  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  ym(95221741, "init", {
       clickmap:true,
       trackLinks:true,
       accurateTrackBounce:true,
       webvisor:true
  });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/95221741" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
 -->


<!-- Google Tag Manager 
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-T93DNMW');</script>
 -->


<!-- Google tag (gtag.js)  <script async src="https://www.googletagmanager.com/gtag/js?id=G-0N029ZM0WG"></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-0N029ZM0WG'); </script>
-->

<!-- Google tag (gtag.js)  <script async src="https://www.googletagmanager.com/gtag/js?id=G-GTLLQV0KXE"></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-GTLLQV0KXE'); </script>
-->
<base id="baseUrl" href="{{url('')}}">