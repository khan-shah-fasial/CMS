@extends('frontend.layouts.app')

@section('page.content')

<!----------------=============== blog start ================------------->
<!-- -------------------- blog banner start ---------------- -->

<section class="blog_page_banner mt105">
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

<!-- -------------------- blog banner start ---------------- -->

<section class="blog_page_cards">
    <div class="container">
        <div class="row">

            @foreach ($blog as $row)
                

            <div class="col-md-4">
                <div class="blog_big_box me-3 mb-5 ">
                    <div class="hover_effect_img">
                        <img src="{{ asset('storage/' . $row->main_image) }}" alt="" class="blog_img" data-aos="fade-up"
                            data-aos-once="true" />
                        <div class="overlay">
                            <div class="plus">
                                +
                            </div>
                        </div>
                    </div>

                    @php 
                        $author = DB::table('users')->where('id', $row->user_id)->first();
                    @endphp

                    <div class="blog_content">
                        <div class="d-flex align-items-center gap-4">
                            <p class="d-flex align-items-center gap-2 author" data-aos="fade-up" data-aos-once="true">
                                <img src="/assets/frontend/images/author.png" alt="" />
                                <span>{{ $author->name }}</span>
                            </p>
                            <p class="d-flex align-items-center gap-2 author" data-aos="fade-up" data-aos-once="true">
                                <img src="/assets/frontend/images/calender.png" alt="" />
                                <span> {{ $row->created_at->format('F j, Y') }} </span>
                            </p>
                        </div>
                        <p data-aos="fade-up" data-aos-once="true">
                            {{ $row->short_description }}
                        </p>
                        <a href="{{ url(route('blog.detail', ['slug' => strtolower(str_replace(' ', '-',$row->slug))] )) }}" data-aos="fade-up" data-aos-once="true">View More</a>
                    </div>
                </div>
            </div>

            @endforeach

        </div>
    </div>
</section>

<!-- -------------------- blog banner end   ---------------- -->

<!-- ---------- service get in touch  start ---------------------- -->

<section class="service_get_in_touch">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="text-center">
                    <h1 class="main_heading" data-aos-once="true" data-aos="fade-up">
                        GET IN TOUCH WITH US TODAY
                    </h1>
                    <p class="desc" data-aos-once="true" data-aos="fade-up">
                        We can be reached at
                    </p>
                    <a href="#" class="d-flex align-items-center justify-content-center gap-2" data-aos-once="true"
                        data-aos="fade-up">
                        <span><img src="/assets/frontend/images/phone.png" alt="" /></span>
                        <span>011-41023400</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- -------------- service get in touch  end ---------------------- -->

<!------------------ awards_section Start -------------------------->
<section class="awards_section about_bg">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="underline_heading d-flex align-items-center justify-content-center">
                    <h6 class="main_heading text-center" data-aos-once="true" data-aos="fade-up">
                        Awards
                    </h6>
                </div>
                <h2 class="main_heading text-center mb-4" data-aos-once="true" data-aos="fade-up">
                    Awards & Recognitions
                </h2>

                <div class="owl-carousel owl-theme" id="awards_slider">
                    <div class="item">
                        <div class="awards_box">
                            <h4>Top FDI Law Firm By</h4>
                            <img src="/assets/frontend/images/top_fdi.png" />
                        </div>
                    </div>

                    <div class="item">
                        <div class="awards_box">
                            <h4>India Firms to Watch by</h4>
                            <img src="/assets/frontend/images/asian_legal.png" />
                        </div>
                    </div>

                    <div class="item">
                        <div class="awards_box">
                            <h4>Recommended Firm by</h4>
                            <img src="/assets/frontend/images/benchmark.png" />
                        </div>
                    </div>

                    <div class="item">
                        <div class="awards_box">
                            <h4>M&A Law Firm by</h4>
                            <img src="/assets/frontend/images/pac.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!------------------ awards_section End -------------------------->

<!----------------=============== blog end ================------------->
@endsection