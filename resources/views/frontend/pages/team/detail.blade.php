@extends('frontend.layouts.app')

@section('page.content')


<!------------============ team detail start ============ -------------->


<!-- ------------- Team Details banner  start ---------------- -->

<section class="team_d_banner">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="text-center">
                    <h1 class="heading">About</h1>
                    <p class="desc mb-1">{{ ucfirst($detail->name) }}</p>
                    <nav aria-label="breadcrumb" class="breadcrumb d-flex justify-content-center mb-0">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item home"><a href="{{ url(route('index')) }}">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">
                                Team Members About
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ------------- Team Details banner  End ---------------- -->

<!-- ------------- Team Details content  start ---------------- -->

<section class="team_d_content">
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <img src="{{ asset('storage/' . $detail->image) }}" alt="" class="team_img" data-aos="fade-up"
                    data-aos-once="true" />
            </div>
            <div class="col-md-9">
                <div class="content">
                    <h4 class="main_heading" data-aos="fade-up" data-aos-once="true">
                        {{ ucfirst($detail->name) }}
                    </h4>

                    @if(!empty($detail->designation))
                    <h2 class="role" data-aos="fade-up" data-aos-once="true">
                        {{ ucfirst($detail->designation) }}
                    </h2>
                    @endif

                    <div class="d-flex align-items-center gap-3 mail">

                        @if(!empty($detail->email))
                        <a href="mailto:{{ $detail->email }}">
                            <img src="/assets/frontend/images/mail.png" alt="" data-aos="fade-up" data-aos-once="true" />
                        </a>
                        @endif

                        @if(!empty($detail->linkedin_link))
                        <a href="{{ $detail->linkedin_link }}">
                            <img src="/assets/frontend/images/linked.png" alt="" data-aos="fade-up" data-aos-once="true" />
                        </a>
                        @endif

                    </div>

                    @if(!empty($detail->description))

                    <h4 class="sub_heading" data-aos="fade-up" data-aos-once="true">
                        Practice Area
                    </h4>

                    @php echo html_entity_decode($detail->description) @endphp

                    @endif

                </div>
            </div>
            <div class="col-md-12">
                <h4 class="sub_heading mt-5" data-aos="fade-up" data-aos-once="true">
                    Professional Experience
                </h4>
                @php echo html_entity_decode($detail->about) @endphp
            </div>
        </div>
    </div>
</section>

<!-- ------------- Team Details content  End ---------------- -->

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

<!---------============== team detail end =============----------------->

@endsection