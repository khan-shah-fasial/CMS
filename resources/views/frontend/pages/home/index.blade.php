@extends('frontend.layouts.app')

@section('page.title', 'Ahlawat Associates: Top Lawyers &amp; Law Firms in Delhi, India')

@section('page.description', 'Ahlawat &amp; Associates is one of the best law firms in Delhi, India. We provide legal
assistance for startups, FDI, Property law, IP, and more')

@section('page.type', 'website')

@section('page.content')

<!-----===== home content start============---->

<section class="banner_section">
    <!-- <div class="banner_content">
                    <span>Welcome To</span>
                    <h3 class="main_heading">Ahlawat & Associates</h3>
                    <p>
                        Ahlawat & Associates is one of India’s leading
                        full-service law firms, catering to domestic and
                        international clients.
                    </p>
                    <a href="about-us">Read More
                        <span><img src="/assets/frontend/images/right.png" alt="" /></span>
                    </a>
                </div> -->

    <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="/assets/frontend/images/banner_slider1.jpg" class="d-block w-100" alt="...">
                <span class="overlay_banner"></span>
                <div class="carousel-caption ">
                    <div class="banner_content">
                        <span>Welcome To</span>
                        <h3 class="main_heading">Ahlawat & Associates</h3>
                        <p>
                            Ahlawat &amp; Associates is one of the leading full-service law firm in India (1k-10k)
                            catering to domestic
                            and international clients since 1978
                        </p>
                        <a href="about-us">Know More
                            <span><img src="/assets/frontend/images/right.png" alt="" /></span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <img src="/assets/frontend/images/banner_slider2.jpg" class="d-block w-100" alt="...">
                <span class="overlay_banner"></span>
                <div class="carousel-caption ">
                    <div class="banner_content">
                        <span>Welcome To</span>
                        <h3 class="main_heading">Ahlawat & Associates</h3>
                        <p>
                            Ahlawat &amp; Associates is one of the leading full-service law firm in India (1k-10k)
                            catering to domestic
                            and international clients since 1978
                        </p>
                        <a href="about-us">Know More
                            <span><img src="/assets/frontend/images/right.png" alt="" /></span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <img src="/assets/frontend/images/banner_slider3.jpg" class="d-block w-100" alt="...">
                <span class="overlay_banner"></span>
                <div class="carousel-caption ">
                    <div class="banner_content">
                        <span>Welcome To</span>
                        <h3 class="main_heading">Ahlawat & Associates</h3>
                        <p>
                            Ahlawat &amp; Associates is one of the leading full-service law firm in India (1k-10k)
                            catering to domestic
                            and international clients since 1978
                        </p>
                        <a href="about-us">Know More
                            <span><img src="/assets/frontend/images/right.png" alt="" /></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
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

<section class="about">
    <div class="container">
        <div class="row">
            <div class="col-md-6 px0">
                <div class="underline_heading">
                    <h6 class="main_heading" data-aos-once="true" data-aos="fade-up">Who We Are</h6>
                </div>
                <h2 class="main_heading mb-lg-4 mb-2" data-aos-once="true" data-aos="fade-up">Ahlawat & Associates</h2>
                <p class="desc" data-aos-once="true" data-aos="fade-up">
                    Ahlawat &amp; Associates is one of leading full-service law firms in India (1k-10k), catering to
                    domestic and
                    international clients. Incorporated in 1978 as a primary litigation practice by Mrs. Avnish
                    Ahlawat(100-
                    1k), A&amp;A gradually expanded its field of services and expertise and is now one of the leading
                    corporate /
                    dispute resolution law firms in India(100-1k). A&amp;A has been recognized for its expertise in
                    addressing
                    an array of legal issues especially those relating to Foreign Direct Investment (10k-100k)
                    (FDI)(100k-
                    1m), Joint Ventures(10k-100k), Corporate Compliance &amp; Governance as well as advisory support to
                    the
                    booming startup ecosystem, in both the domestic and international space.
                </p>
                <!-- <div class="d-flex align-items-start align-items-xl-center flex-xl-row flex-column gap-xl-4 mb-md-0 ">
                    <p data-aos-once="true" data-aos="fade-up" class="mb-1">
                        <span><img src="/assets/frontend/images/check.png" alt="" /></span>
                        <span class="desc">Best corporate law firm in India</span>
                    </p>
                    <p data-aos-once="true" data-aos="fade-up" class="mb-1">
                        <span><img src="/assets/frontend/images/check.png" alt="" /></span>
                        <span class="desc">Best dispute resolution law firm in India</span>
                    </p>
                </div> -->
                <div class="d-flex align-items-center gap-md-5 gap-2 link_number" data-aos-once="true"
                    data-aos="fade-up">
                    <p class="desc text-dark mb-0">
                        Any query <a href="#" data-bs-toggle="modal" data-bs-target="#contact" class="text-dark">lets
                            chat</a>
                    </p>
                    <span>
                        <a class="number" href="tel:011-41023400">{{ get_settings('mobile') }}</a>

                    </span>
                </div>
            </div>

            <div class="col-md-6 px0" data-aos-once="true" data-aos="fade-up">
                <img src="/assets/frontend/images/about_us_img.jpg" class="about_img" />
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
            <div class="col-md-12 px0">
                <div class="news_box ">
                    <h1 class="main_heading mb-md-4 mb-2" data-aos-once="true" data-aos="fade-up">How A&amp;A is best
                        law firm in India(1k-10k)?
                    </h1>

                </div>
            </div>
            <div class="col-md-6 px0">
                <div class="news_box">

                    <img src="/assets/frontend/images/india_law.jpg" alt="" data-aos-once="true" data-aos="fade-up" />

                </div>
            </div>
            <div class="col-md-6 px0">
                <div class="news_box">
                    <p class="desc" data-aos-once="true" data-aos="fade-up">
                        Ahlawat &amp; Associates is one of the top law-firms in India(1k-10k) because we at A&amp;A
                        adopted an
                        approach that demands the highest levels of understanding in each of our practice areas,
                        technical skill
                        and service delivery allowing us to provide accurate, reliable, timely and cost-effective advice
                        across a
                        range of industry groups and sectors. This is reflected through our team of best lawyer in India
                        (10k-
                        100k), who abide by the system and ensure that the client’s needs always come first. With our
                        expertise
                        and diversity of experience within the teams, we can keep in touch with the changing environment
                        that
                        our clients operate in and provide them with personalized solutions to their business
                        requirements or
                        legal reservations.
                    </p>
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