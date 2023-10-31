@extends('frontend.layouts.app')

@section('page.content')

<!-----===== home content start============---->

<section class="banner_section">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="banner_content">
                    <span>Welcome To</span>
                    <h3 class="main_heading">Ahlawat & Associates</h3>
                    <p>
                        Ahlawat & Associates is one of India’s leading
                        full-service law firms, catering to domestic and
                        international clients.
                    </p>
                    <a href="">Read More
                        <span><img src="/assets/frontend/images/right.png" alt="" /></span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<!------------------ Banner End -------------------------->

<!------------------ awards_section Start -------------------------->
@include('frontend.component.awards')
<!------------------ awards_section End -------------------------->



<!------------------ About Start -------------------------->

<section class="about">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="underline_heading">
                    <h6 class="main_heading" data-aos-once="true" data-aos="fade-up">About Us</h6>
                </div>
                <h2 class="main_heading mb-4" data-aos-once="true" data-aos="fade-up">Ahlawat & Associates</h2>
                <p class="desc" data-aos-once="true" data-aos="fade-up">
                    Ahlawat & Associates is one of India’s leading
                    full-service law firms, catering to domestic and
                    international clients. Our services extend through diverse
                    industry sectors, including assistance to facilitate
                    foreign direct investments and business setup in India and
                    our clientele includes an array of domestic and
                    international individuals and companies.
                </p>
                <div class="d-flex align-items-center gap-4">
                    <p data-aos-once="true" data-aos="fade-up">
                        <span><img src="/assets/frontend/images/check.png" alt="" /></span>
                        <span class="desc">Praesent feugiat sem mattis.</span>
                    </p>
                    <p data-aos-once="true" data-aos="fade-up">
                        <span><img src="/assets/frontend/images/check.png" alt="" /></span>
                        <span class="desc">Praesent feugiat sem mattis.</span>
                    </p>
                </div>
                <div class="d-flex align-items-center gap-5 link_number" data-aos-once="true" data-aos="fade-up">
                    <p class="link">
                        Call to ask <a href="#">any question</a>
                    </p>
                    <p class="number">011-41023400</p>
                </div>
            </div>

            <div class="col-md-6" data-aos-once="true" data-aos="fade-up">
                <img src="/assets/frontend/images/about_us_img.png" class="about_img" />
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

<section class="news">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="news_box me-5">
                    <h1 class="main_heading mb-4" data-aos-once="true" data-aos="fade-up">Best Law firm in India</h1>
                    <img src="/assets/frontend/images/news_1.png" alt="" data-aos-once="true" data-aos="fade-up" />
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
                    <p class="desc">
                        This is reflected through our team of associates, who
                        abide by the system and ensure that the client’s needs
                        always come first.
                    </p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="news_box ms-5">
                    <h1 class="main_heading mb-4" data-aos-once="true" data-aos="fade-up">Top Lawyer in Delhi</h1>
                    <img src="/assets/frontend/images/news_2.png" alt="" data-aos-once="true" data-aos="fade-up" />
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
            </div>
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