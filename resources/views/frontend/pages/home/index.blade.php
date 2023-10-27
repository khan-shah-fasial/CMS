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
<section class="awards_section about_bg">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="underline_heading d-flex align-items-center justify-content-center">
                    <h6 class="main_heading text-center" data-aos-once="true" data-aos="fade-up">AWARDS</h6>
                </div>
                <h2 class="main_heading text-center mb-4" data-aos-once="true" data-aos="fade-up">Awards & Recognitions
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

<section class="counter_section">
    <div class="container">
        <div class="row">
            <div class="col-md-12" id="counter">
                <div class="row">
                    <div class="col-md-3">
                        <div class="about_counter_container" data-aos-once="true" data-aos="fade-up">
                            <div class="about_right_counter d-flex">
                                <div class="about_counter_icon">
                                    <div class="about_counter_img">
                                        <img src="/assets/frontend/images/trusted_icon.png" alt="counter 1"
                                            class="mb-4" />
                                    </div>
                                </div>
                                <div class="about_counter">
                                    <p class="about_counter_number">
                                        <span class="counter-value" data-count="23">0</span>k
                                    </p>
                                    <p class="about_counter_para">Trusted Clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 second_counter">
                        <div class="about_counter_container" data-aos-once="true" data-aos="fade-up">
                            <div class="about_right_counter" data-aos="fade-up" data-aos-once="true">
                                <div class="about_counter_icon">
                                    <div class="about_counter_img">
                                        <img src="/assets/frontend/images/recovered_icons.png" alt="counter 1"
                                            class="mb-4" />
                                    </div>
                                </div>
                                <div class="about_counter">
                                    <p class="about_counter_number">
                                        <span class="counter-value" data-count="162">0</span>k
                                    </p>
                                    <p class="about_counter_para">Recovered Clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 third_counter">
                        <div class="about_counter_container" data-aos-once="true" data-aos="fade-up">
                            <div class="about_right_counter aos-init aos-animate" data-aos="fade-up"
                                data-aos-once="true">
                                <div class="about_counter_icon">
                                    <div class="about_counter_img">
                                        <img src="/assets/frontend/images/certified_icons.png" alt="counter 1"
                                            class="mb-4" />
                                    </div>
                                </div>
                                <div class="about_counter">
                                    <p class="about_counter_number">
                                        <span class="counter-value" data-count="90">0</span>%
                                    </p>
                                    <p class="about_counter_para">Special Cases</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="about_counter_container" data-aos-once="true" data-aos="fade-up">
                            <div class="about_right_counter aos-init aos-animate" data-aos="fade-up"
                                data-aos-once="true">
                                <div class="about_counter_icon">
                                    <div class="about_counter_img">
                                        <img src="/assets/frontend/images/law_icons.png" alt="counter 1" class="mb-4" />
                                    </div>
                                </div>
                                <div class="about_counter">
                                    <p class="about_counter_number">
                                        <span class="counter-value" data-count="115">0</span>k
                                    </p>
                                    <p class="about_counter_para">Personal Injury Cases</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- -------------------- service counter  end ---------------------- -->

<!------------------ practice Start -------------------------->

<section class="practice">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="underline_heading d-flex align-items-center justify-content-center">
                    <h6 class="main_heading text-center" data-aos-once="true" data-aos="fade-up">AWARDS</h6>
                </div>
                <h1 class="main_heading text-center mb-4" data-aos-once="true" data-aos="fade-up">
                    Our <span class="main_heading_color"> Practice</span> Area
                </h1>
            </div>
            <div class="col-md-4">
                <div class="practice_box" data-aos-once="true" data-aos="fade-up">
                    <div class="visible_box">
                        <img src="/assets/frontend/images/practice_1.png" alt="" />
                        <h1>Setting Up In India</h1>
                    </div>
                    <div class="hover_box">
                        <p>
                            A&A adopted an approach that demands the highest
                            levels of understanding in each of their practice
                            areas,
                        </p>
                        <a href="#">Read More <img src="/assets/frontend/images/right.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="practice_box" data-aos-once="true" data-aos="fade-up">
                    <div class="visible_box">
                        <img src="/assets/frontend/images/practice_2.png" alt="" />
                        <h1>Corporate Commercial</h1>
                    </div>
                    <div class="hover_box">
                        <p>
                            A&A adopted an approach that demands the highest
                            levels of understanding in each of their practice
                            areas,
                        </p>
                        <a href="#">Read More <img src="/assets/frontend/images/right.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="practice_box" data-aos-once="true" data-aos="fade-up">
                    <div class="visible_box">
                        <img src="/assets/frontend/images/practice_3.png" alt="" />
                        <h1>Intellectual Property</h1>
                    </div>
                    <div class="hover_box">
                        <p>
                            A&A adopted an approach that demands the highest
                            levels of understanding in each of their practice
                            areas,
                        </p>
                        <a href="#">Read More <img src="/assets/frontend/images/right.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="practice_box" data-aos-once="true" data-aos="fade-up">
                    <div class="visible_box">
                        <img src="/assets/frontend/images/practice_4.png" alt="" />
                        <h1>Online Gaming</h1>
                    </div>
                    <div class="hover_box">
                        <p>
                            A&A adopted an approach that demands the highest
                            levels of understanding in each of their practice
                            areas,
                        </p>
                        <a href="#">Read More <img src="/assets/frontend/images/right.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="practice_box" data-aos-once="true" data-aos="fade-up">
                    <div class="visible_box">
                        <img src="/assets/frontend/images/practice_5.png" alt="" />
                        <h1>Media Entertainment</h1>
                    </div>
                    <div class="hover_box">
                        <p>
                            A&A adopted an approach that demands the highest
                            levels of understanding in each of their practice
                            areas,
                        </p>
                        <a href="#">Read More <img src="/assets/frontend/images/right.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="practice_box" data-aos-once="true" data-aos="fade-up">
                    <div class="visible_box">
                        <img src="/assets/frontend/images/practice_6.png" alt="" />
                        <h1>Mergers Acquisitions</h1>
                    </div>
                    <div class="hover_box">
                        <p>
                            A&A adopted an approach that demands the highest
                            levels of understanding in each of their practice
                            areas,
                        </p>
                        <a href="#">Read More <img src="/assets/frontend/images/right.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <div class="d-flex align-items-center justify-content-center mt-2" data-aos-once="true"
                    data-aos="fade-up">
                    <button class="practice_button">Know More</button>
                </div>
            </div>
        </div>
    </div>
</section>

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

<section class="team">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="underline_heading">
                    <h6 class="main_heading" data-aos-once="true" data-aos="fade-up">Team member</h6>
                </div>
                <h1 class="main_heading" data-aos-once="true" data-aos="fade-up">
                    We feel very proud <br />
                    for our
                    <span class="main_heading_color"> Experts </span>
                </h1>
            </div>
            <div class="col-md-6">
                <p class="desc mt-4" data-aos-once="true" data-aos="fade-up">
                    Aenean tincidunt id mauris idology auctor. Donec at ligula
                    lacus. Nulla dig nissimmi quis neque interdum. An Ohio man
                    allegedly punched his lawyer in the face in court Tuesday
                    upon finding out he was sentenced.
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="owl-carousel owl-theme" id="banner_slider_carousel">
                    <div class="item" data-aos-once="true" data-aos="fade-up">
                        <div class="team_box">
                            <div class="hover_img">
                                <img src="/assets/frontend/images/team_1.png" alt="" class="team_img" />
                            </div>

                            <div class="d-flex align-items-center justify-content-center team_bio_container">
                                <p class="team_bio_box">
                                    <span class="name">Jonson</span>
                                    <span class="role">Civil Lawyer</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="item" data-aos-once="true" data-aos="fade-up">
                        <div class="team_box">
                            <div class="hover_img">
                                <img src="/assets/frontend/images/team_2.png" alt="" class="team_img" />
                            </div>

                            <div class="d-flex align-items-center justify-content-center team_bio_container">
                                <p class="team_bio_box">
                                    <span class="name">Jonson</span>
                                    <span class="role">Civil Lawyer</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="item" data-aos-once="true" data-aos="fade-up">
                        <div class="team_box">
                            <div class="hover_img">
                                <img src="/assets/frontend/images/team_3.png" alt="" class="team_img" />
                            </div>

                            <div class="d-flex align-items-center justify-content-center team_bio_container">
                                <p class="team_bio_box">
                                    <span class="name">Jonson</span>
                                    <span class="role">Civil Lawyer</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!------------------ Team End -------------------------->

<!------------------ media Start -------------------------->

<section class="media">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="underline_heading d-flex align-items-center justify-content-center mt-4">
                    <h6 class="main_heading text-center" data-aos-once="true" data-aos="fade-up">Media</h6>
                </div>
                <h1 class="main_heading mb-4 text-center" data-aos-once="true" data-aos="fade-up">Media Coverage</h1>
            </div>

            <div class="col-md-12">
                <div class="owl-carousel owl-theme" id="media_slider_carousel">
                    <div class="item">
                        <div class="media_box" data-aos-once="true" data-aos="fade-up">
                            <img src="/assets/frontend/images/media_1.png" alt="" />
                            <h4 class="title">Aenean tincidunt id</h4>
                        </div>
                    </div>

                    <div class="item">
                        <div class="media_box" data-aos-once="true" data-aos="fade-up">
                            <img src="/assets/frontend/images/media_2.png" alt="" />
                            <h4 class="title">Aenean tincidunt id</h4>
                        </div>
                    </div>

                    <div class="item">
                        <div class="media_box" data-aos-once="true" data-aos="fade-up">
                            <img src="/assets/frontend/images/media_3.png" alt="" />
                            <h4 class="title">Aenean tincidunt id</h4>
                        </div>
                    </div>
                    <div class="item">
                        <div class="media_box" data-aos-once="true" data-aos="fade-up">
                            <img src="/assets/frontend/images/media_4.png" alt="" />
                            <h4 class="title">Aenean tincidunt id</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!------------------ media End -------------------------->

<!------------------ blog Start -------------------------->

<section class="blog">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <div class="underline_heading" data-aos-once="true" data-aos="fade-up">
                    <h6 class="main_heading">Latest Blog</h6>
                </div>
                <h1 class="main_heading mb-4" data-aos-once="true" data-aos="fade-up">
                    Learn something more <br />
                    from our latest <span class="main_heading_color">Blog</span>
                </h1>
                <div class="row">
                    <div class="col-md-6">
                        <div class="blog_big_box" data-aos-once="true" data-aos="fade-up">
                            <img src="/assets/frontend/images/blog_1.png" alt="" class="blog_img" />
                            <div class="blog_content">
                                <p>
                                    Dior call Jennifer campaign backlash ‘not all
                                    justified’.
                                </p>
                                <a href="#">View More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="blog_big_box" data-aos-once="true" data-aos="fade-up">
                            <img src="/assets/frontend/images/blog_2.png" alt="" class="blog_img" />
                            <div class="blog_content">
                                <p>
                                    Dior call Jennifer campaign backlash ‘not all
                                    justified’.
                                </p>
                                <a href="#">View More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <h2 class="heading mb-4 mt-4">
                    Learn something more from our latest
                    <span class="main_heading_color">News</span>
                </h2>
                <div class="blog_right_box" data-aos-once="true" data-aos="fade-up">
                    <img src="/assets/frontend/images/blog_3.png" alt="" />
                    <div>
                        <p class="desc">
                            What we are capable of usually gets discovered.
                        </p>
                        <a href="#">View More</a>
                    </div>
                </div>
                <div class="blog_right_box" data-aos-once="true" data-aos="fade-up">
                    <img src="/assets/frontend/images/blog_4.png" alt="" />
                    <div>
                        <p class="desc">
                            What we are capable of usually gets discovered.
                        </p>
                        <a href="#">View More</a>
                    </div>
                </div>
                <div class="blog_right_box" data-aos-once="true" data-aos="fade-up">
                    <img src="/assets/frontend/images/blog_5.png" alt="" />
                    <div>
                        <p class="desc">
                            What we are capable of usually gets discovered.
                        </p>
                        <a href="#">View More</a>
                    </div>
                </div>
                <div class="blog_right_box" data-aos-once="true" data-aos="fade-up">
                    <img src="/assets/frontend/images/blog_3.png" alt="" />
                    <div>
                        <p class="desc">
                            What we are capable of usually gets discovered.
                        </p>
                        <a href="#">View More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!------------------ blog End -------------------------->

<!----------------------- home content end --------------->
@endsection