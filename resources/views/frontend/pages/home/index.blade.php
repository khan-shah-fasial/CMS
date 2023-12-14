@extends('frontend.layouts.app')

@section('page.title', 'Ahlawat Associates: Top Lawyers & Law Firms in Delhi, India')

@section('page.description', 'Ahlawat & Associates is one of the best law firms in Delhi, India. We provide legal
assistance for startups, FDI, Property law, IP, and more')

@section('page.type', 'website')

@section('page.content')

<!-----===== home content start============---->
<!-- 
<style>
.banner_content {
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url("{{ asset('storage/' . get_settings('Banner_1')) }}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /*box-shadow: 1000px 1000px 1000px 1000px inset #00000094;*/
    color: white;
    transition: 2s;
    animation-name: animate;
    animation-direction: alternate-reverse;
    animation-duration: 15s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-play-state: running;
    animation-timing-function: ease-in-out;
}

@keyframes animate {
    0% {
        background-image: url("{{ asset('storage/' . get_settings('Banner_5')) }}");
    }
    25% {
        background-image: url("{{ asset('storage/' . get_settings('Banner_4')) }}");
    }
    50% {
        background-image: url("{{ asset('storage/' . get_settings('Banner_3')) }}");
    }
    75% {
        background-image: url("{{ asset('storage/' . get_settings('Banner_2')) }}");
    }
    100% {
        background-image: url("{{ asset('storage/' . get_settings('Banner_1')) }}");
    }
    0% {
        background-image: url("{{ asset('storage/' . get_settings('Banner_5')) }}");
    }
}

</style> -->
<section class="banner_section">
<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img loading="lazy" src="{{ asset('storage/' . get_settings('Banner_1')) }}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img loading="lazy" src="{{ asset('storage/' . get_settings('Banner_2')) }}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img loading="lazy" src="{{ asset('storage/' . get_settings('Banner_3')) }}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img loading="lazy" src="{{ asset('storage/' . get_settings('Banner_4')) }}" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</section>

<!------------------ Banner End -------------------------->

<!------------------ awards_section Start -------------------------->
@include('frontend.component.awards')
<!------------------ awards_section End -------------------------->



<!------------------ About Start -------------------------->

<section class="about pb-0 contentjstfy">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 px0">
                <div class="underline_heading">
                    <h6 class="main_heading" data-aos-once="true" data-aos="fade-up">Our Journey</h6>
                </div>
                <h2 class="main_heading mb-lg-4 mb-2" data-aos-once="true" data-aos="fade-up">{{ get_settings('oj_home') }}</h2>
                @php echo html_entity_decode(get_settings('oj_content')) @endphp
            </div>

            <div class="col-md-6 px0" data-aos-once="true" data-aos="fade-up">
                <img loading="lazy" src="/assets/frontend/images/about_us_img_new.jpg" alt="About Us" class="about_img" />
            </div>
        </div>
    </div>
</section>

<!------------------ About End -------------------------->

<!-- -------------------- service counter start ---------------------- -->
@include('frontend.component.service_counter')
<!-- -------------------- service counter  end ---------------------- -->

<!------------------ practice Start -------------------------->

@include('frontend.component.award_practice_area')

<!------------------ practice End -------------------------->
<!------------------ news Start -------------------------->

<section class="news contentjstfy">
    <div class="container">
        <div class="row">
            <div class="col-md-12 px0">
                <div class="news_box ">
                    <h1 class="main_heading mb-md-4 mb-2" data-aos-once="true" data-aos="fade-up">{{ get_settings('ana_home') }}
                    </h1>

                </div>
            </div>
            <div class="col-lg-6 px0">
                <div class="news_box">

                    <img loading="lazy" src="/assets/frontend/images/india_law.jpg" alt="" data-aos-once="true" data-aos="fade-up" />

                </div>
            </div>
            <div class="col-lg-6 px0">
                <div class="news_box">
                    @php echo html_entity_decode(get_settings('ana_content')) @endphp
                    <!-- <p class="desc">
                        This is reflected through our team of associates, who
                        abide by the system and ensure that the client’s needs
                        always come first.
                    </p> -->
                </div>
            </div>
            <!-- <div class="col-md-6 px0">
                <div class="news_box ms-xl-5">
                    <h1 class="main_heading mb-md-4 mb-2" data-aos-once="true" data-aos="fade-up">Top Lawyer in Delhi
                    </h1>
                    <img src="/assets/frontend/images/delhi_img.jpg" alt="" data-aos-once="true" data-aos="fade-up" />
                    <p class="desc" data-aos-once="true" data-aos="fade-up">
                        A&A adopted an approach that demands the highest levels
                        of understanding in each of their practice areas,
                        technical skill and service delivery allowing us to
                        provide accurate, reliable, timely and cost-effective
                        advice across a range of industry groups and sectors.
                        This is reflected through our team of associates, who
                        abide by the system and ensure that the client’s needs
                        always come first.
                    </p>
                    <p class="desc" data-aos-once="true" data-aos="fade-up">
                        This is reflected through our team of associates, who
                        abide by the system and ensure that the client’s needs
                        always come first.
                    </p>
                </div>
            </div> -->
        </div>
    </div>
</section>

<!------------------ news End -------------------------->
<!------------------ Team Start -------------------------->

@include('frontend.component.team_member')

<!------------------ Team End -------------------------->

<!------------------ media Start -------------------------->

@include('frontend.component.media_coverage')

<!------------------ media End -------------------------->

<!------------------ blog Start -------------------------->

@include('frontend.component.blog')

<!------------------ blog End -------------------------->

<!----------------------- home content end --------------->
@endsection

