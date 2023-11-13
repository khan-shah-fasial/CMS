@extends('frontend.layouts.app')

@php
$url = request()->segment('1');
$page = DB::table('blog_categories')->where('slug', $url)->first();
@endphp

@section('page.title', "$detail->meta_title")

@section('page.description', "$detail->meta_description")

@section('page.type', "$page->name")

@section('page.publish_time', "$detail->updated_at")

@section('page.schema')
<!--------------------------- Page Schema --------------------------------->

<script type="application/ld+json">
    {
      "@context": "https://schema.org/", 
      "@type": "BreadcrumbList", 
      "itemListElement": [{
        "@type": "ListItem", 
        "position": 1, 
        "name": "Home",
        "item": "{{ url(route('index')) }}"  
      },{
        "@type": "ListItem", 
        "position": 2, 
        "name": "{{ $page->name }}",
        "item": "{{ url(route(''.$url.'')) }}"  
      },{
        "@type": "ListItem", 
        "position": 3, 
        "name": "@php echo str_replace('&nbsp;',' ',htmlspecialchars_decode ($detail->title)); @endphp",
        "item": "{{ url()->current() }}"  
      }]
    }
</script>

@if($page->name != 'Deal Update' )
<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "{{ $page->name }}Posting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "{{ url()->current() }}"
      },
      "headline": "@php echo str_replace('&nbsp;',' ',htmlspecialchars_decode ($detail->title)); @endphp",
      "description": "@php echo str_replace('&nbsp;',' ',htmlspecialchars_decode ($detail->short_description)); @endphp",
      "image": "{{ asset('storage/' . $detail->main_image) }}",  
      "author": {
        "@type": "Person",
        "name": "{{ $author->name }}",
        "url": "{{ url('') }}/"
      },  
      "publisher": {
        "@type": "Organization",
        "name": "{{ url('') }}/",
        "logo": {
          "@type": "ImageObject",
          "url": "{{ asset('/assets/frontend/images/logo.png') }}"
        }
      },
      "datePublished": "{{ $detail->updated_at }}"
    }
</script>
@endif
    
<!--------------------------- Page Schema end--------------------------------->
@endsection

@section('page.content')

<!-------================ blog detail start ============ ------------>


<!-- -------------------- blog details banner start ---------------- -->

<div class="blog_details_page_banner">
    <img src="{{ asset('storage/' . $detail->main_image) }}" alt="{{ $detail->alt_main_image }}" />

</div>

<!-- -------------------- blog details banner end   ---------------- -->

<!-- -------------------- blog details breadcrumb start ---------------- -->

<section class="blog_details_page_breadcrumb">
    <div class="container">
        <div class="row">
            <div class="col-md-8 px0">
                <ul class="d-flex align-items-center gap-3 list-unstyled" data-aos="fade-up" data-aos-once="true">
                    <li>
                        <a href="{{ url(route('index')) }}" class="text-decoration-none" data-aos="fade-up"
                            data-aos-once="true">Home</a>
                    </li>
                    <li>></li>
                    <li>
                        <a href="{{ url(route(''. $url.'')) }}" class="text-decoration-none" data-aos="fade-up"
                            data-aos-once="true">
                            {{ ucfirst($page->name) }}
                        </a>
                    </li>
                    <li>></li>
                    <li>{{ $detail->title }}</li>
                </ul>
            </div>
            <div class="col-md-4 px0">
                <div class="d-flex align-items-center justify-content-md-end gap-4">
                    <p class="d-flex align-items-center gap-2 author" data-aos="fade-up" data-aos-once="true">
                        <img src="/assets/frontend/images/author.png" alt="" />
                        <span>{{ $author->name }}</span>
                    </p>
                    <p class="d-flex align-items-center gap-2 author" data-aos="fade-up" data-aos-once="true">
                        <img src="/assets/frontend/images/calender.png" alt="" />
                        <span>{{ $detail->created_at->format('F j, Y') }}</span>
                    </p>
                </div>
            </div>
        </div>
</section>

<!-- -------------------- blog details breadcrumb end   ---------------- -->

<!-- -------------------- blog details Title start ---------------- -->

<section class="blog_details_page_title_desc pt-0">
    <div class="container">
        <div class="row">
            <div class="col-md-12 px0">
                <h1>{{ $detail->title }}</h1>
                @php echo html_entity_decode($detail->content) @endphp
            </div>

        </div>
    </div>
</section>

<!-- -------------------- blog details Title end   ---------------- -->

<!-- -------------------- blog details social start ---------------- -->

<section class="blog_details_social pt-0">
    <div class="container">
        <div class="row">
            <div class="col-md-6 px0">
                <div class="category d-flex align-items-center gap-md-5 gap-2">
                    @php
                    $category = json_decode($detail->blog_category_ids);
                    @endphp

                    @foreach ($category as $row)
                    @php $category_name = DB::table('blog_categories')->where('id', $row)->first()->name; @endphp

                    <span data-aos="fade-up" data-aos-once="true">{{ $category_name }}</span>
                    @endforeach

                </div>
            </div>
            <div class="col-md-6 px0">
                <!-- <div class="icons d-flex align-items-center justify-content-end gap-3 mt-md-2 mt-4">
                    <img src="/assets/frontend/images/icon_1.png" alt="" data-aos="fade-up" data-aos-once="true" />
                    <img src="/assets/frontend/images/icon_2.png" alt="" data-aos="fade-up" data-aos-once="true" />
                    <img src="/assets/frontend/images/icon_3.png" alt="" data-aos="fade-up" data-aos-once="true" />
                    <img src="/assets/frontend/images/icon_4.png" alt="" data-aos="fade-up" data-aos-once="true" />
                </div> -->
            </div>
        </div>
    </div>
</section>

<!-- -------------------- blog details social end   ---------------- -->

<!-- -------------------- blog details buttons start ---------------- -->

<section class="blog_details_page_buttons">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="buttons d-flex align-items-center justify-content-between">
                    @if($previous_slug != null)
                    <a
                        href="{{ url(route('blog.detail', ['category' => $url,'slug' => strtolower(str_replace(' ', '-',$previous_slug))] )) }}">
                        <button data-aos="fade-up" data-aos-once="true">
                            << Previous Post</button>
                    </a>
                    @endif

                    @if($next_slug != null)
                    <a
                        href="{{ url(route('blog.detail', ['category' => $url,'slug' => strtolower(str_replace(' ', '-',$next_slug))] )) }}">
                        <button data-aos="fade-up" data-aos-once="true">Next Post >></button>
                    </a>
                    @endif

                </div>
            </div>
        </div>
    </div>
</section>

<!-- -------------------- blog details buttons end   ---------------- -->
<!-- -------------------- blog details comments start ---------------- -->
@if($url == 'blog')
<section class="blog_details_page_comments">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="heading" data-aos="fade-up" data-aos-once="true">Comments</h1>
            </div>
            @php $comment = DB::table('blog_comments')->where('status', 1)->where('blog_id', $detail->id)->orderBy('id',
            'desc')->get(); @endphp

            @foreach ($comment as $row)

            <div class="col-xl-1 col-md-2">
                <div class="avatar" data-aos="fade-up" data-aos-once="true">
                    <img src="/assets/frontend/images/profile.png" alt="" />
                </div>
            </div>
            <div class="col-xl-9 col-md-8">
                <p class="name" data-aos="fade-up" data-aos-once="true">{{ $row->name }}</p>
                <p class="date" data-aos="fade-up" data-aos-once="true">
                    {{ date('F d, Y \a\t h:i a', strtotime($row->created_at)) }}</p>
                <p class="comment" data-aos="fade-up" data-aos-once="true">
                    {{ $row->comment }}
                </p>
            </div>

            @endforeach

            <div class="col-md-12 mt-md-0 mt-4">
                <h1 class="post_heading" data-aos="fade-up" data-aos-once="true">Post A Comment</h1>
                <p class="post_comment" data-aos="fade-up" data-aos-once="true">
                    Your email address will not be published *
                </p>
                <button type="button" data-bs-toggle="modal" data-bs-target="#comment" data-aos="fade-up"
                    data-aos-once="true">Post Comment</button>
            </div>
        </div>
    </div>
</section>
@endif

<!-- -------------------- blog details comments end   ---------------- -->

<!-- -------------------- service related start ---------------------- -->

@if(count($blog) > 0)
<section class="service_related">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="heading mb-4 text-center" data-aos="fade-up" data-aos-once="true">Related
                    {{ ucfirst($page->name) }}</h1>
            </div>

            @foreach ($blog as $row)

            <div class="col-md-4 px0 mb-3">
                <div class="blog_big_box" data-aos="fade-up" data-aos-once="true">
                    <img src="{{ asset('storage/' . $row->main_image) }}" alt="" class="blog_img" />
                    <div class="blog_content">
                        <p>{{ $row->short_description }}</p>
                        <a
                            href="{{ url(route('blog.detail', ['category' => $url, 'slug' => strtolower(str_replace(' ', '-',$row->slug))] )) }}">View
                            More</a>
                    </div>
                </div>
            </div>

            @endforeach

        </div>
    </div>
</section>
@endif

<!-- -------------------- service related  end ---------------------- -->

<!-- ---------- service get in touch  start ---------------------- -->

@include('frontend.component.get_in_touch')

<!-- -------------- service get in touch  end ---------------------- -->

<!------------------ awards_section Start -------------------------->
@include('frontend.component.awards')
<!------------------ awards_section End -------------------------->

@if($url == 'blog')
@include('frontend.component.comment_form')
@endif


<!----------========= blog detail end ========== ------------------->

@endsection