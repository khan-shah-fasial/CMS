@extends('frontend.layouts.app')

@section('page.title', 'Ahlawat Associates: Top Lawyers &amp; Law Firms in Delhi, India')

@section('page.description', 'Ahlawat &amp; Associates is one of the best law firms in Delhi, India. We provide legal
assistance for startups, FDI, Property law, IP, and more')

@section('page.type', 'blogs')

@section('page.content')

<!----------------=============== blog start ================------------->
<!-- -------------------- blog banner start ---------------- -->

<section class="blog_page_banner">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="text-center">
                    <h1 class="heading">Blog</h1>
                    <nav aria-label="breadcrumb" class="breadcrumb d-flex justify-content-center mb-0">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item home">
                                <a href="{{ url(route('index')) }}" data-aos="fade-up" data-aos-once="true">Home</a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">
                                Blog
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- -------------------- blog banner end   ---------------- -->

@include('frontend.component.category_breadcrumb')

<!-- -------------------- blog banner start ---------------- -->

<section class="blog_page_cards">
    <div class="container">
        <div class="row">

            @foreach ($blog as $row)


            <div class="col-lg-4 col-md-6 px0" data-aos="fade-up" data-aos-once="true">
                <div class="blog_big_box me-xl-3 mb-md-5 mb-3 ">
                    <div class="hover_effect_img">
                        <img src="{{ asset('storage/' . $row->main_image) }}" alt="" class="blog_img" data-aos="fade-up"
                            data-aos-once="true" />
                        <div class="overlay">
                            <a
                                href="{{ url(route('blog.detail', ['category' =>'blog','slug' => strtolower(str_replace(' ', '-',$row->slug))] )) }}">
                                <div class="plus">
                                    +
                                </div>
                            </a>

                        </div>
                    </div>

                    @php
                    $author = DB::table('users')->where('id', $row->user_id)->first();
                    @endphp

                    <div class="blog_content">
                        <div
                            class="d-flex align-items-xl-center align-items-lg-start align-items-center  flex-xl-row flex-lg-column flex-row justify-content-between  gap-xl-4 gap-lg-0 gap-2 mb-2">
                            <p class="d-flex align-items-center gap-2 author mb-0">
                                <img src="/assets/frontend/images/author.png" alt="" />
                                <span>{{ $author->name }}</span>
                            </p>
                            <p class="d-flex align-items-center gap-2 author mb-0">
                                <img src="/assets/frontend/images/calender.png" alt="" />
                                <span> {{ $row->created_at->format('F j, Y') }} </span>
                            </p>
                        </div>
                        <p>
                            {{ $row->short_description }}
                        </p>
                        <a
                            href="{{ url(route('blog.detail', ['category' =>'blog','slug' => strtolower(str_replace(' ', '-',$row->slug))] )) }}">View
                            More</a>
                    </div>
                </div>
            </div>

            @endforeach

        </div>
    </div>
</section>

<!-- -------------------- blog banner end   ---------------- -->

<!-- ---------- service get in touch  start ---------------------- -->

@include('frontend.component.get_in_touch')

<!-- -------------- service get in touch  end ---------------------- -->

<!------------------ awards_section Start -------------------------->
@include('frontend.component.awards')
<!------------------ awards_section End -------------------------->

<!----------------=============== blog end ================------------->
@endsection