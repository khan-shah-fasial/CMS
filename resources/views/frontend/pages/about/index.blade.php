@extends('frontend.layouts.app')

@section('page.content')

<!-- -------------------- About banner start ---------------- -->

<section class="about_page_banner mt105">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="text-center">
                    <h1 class="heading">About Us</h1>
                    <nav aria-label="breadcrumb" class="breadcrumb d-flex justify-content-center mb-0">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item home">
                                <a href="#" data-aos="fade-up" data-aos-once="true">Home</a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">
                                About Us
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- -------------------- About banner end   ---------------- -->

<!-- -------------------- About Content start ---------------- -->

<section class="about_page_content pb-0">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <!-- <h1 class="heading mb-4" data-aos-once="true" data-aos="fade-up">
                    About Us
                </h1> -->
                <p class="desc" data-aos-once="true" data-aos="fade-up">
                    Ahlawat & Associates (“A&A”) is one of the leading full-service
                    law firms in India, catering to domestic and international
                    clients.
                </p>
                <p class="desc mb-3" data-aos-once="true" data-aos="fade-up">
                    Incorporated in 1978 as a primary litigation practice by Mrs.
                    Avnish Ahlawat, A&A gradually expanded its field of services and
                    expertise and is now one of the leading law firms in India. A&A
                    offers comprehensive counsel on a range of legal services
                    including Mergers & Acquisitions, Private Equity, Real Estate,
                    Education, Intellectual Property, Employment and Labour, Licensing
                    and Registrations, Taxation (Direct & Indirect), Business Setup
                    (globally), thus catering to every legal need from across the
                    globe.
                </p>
                <p class="desc mb-3" data-aos-once="true" data-aos="fade-up">
                    Our services extend through diverse sectors of industry including
                    assistance to facilitate foreign direct investments and business
                    setup in India and our clientele include an array of domestic and
                    international individuals and companies.
                </p>
                <p class="desc mb-3" data-aos-once="true" data-aos="fade-up">
                    A&A has been recognized for its expertise in addressing an array
                    of legal issues especially those relating to Foreign Direct
                    Investment, Joint Ventures, Corporate Compliance & Governance as
                    well as advisory support to the booming startup ecosystem, in both
                    the domestic and international space. Since our diversification,
                    A&A has assisted and continues to assist clients from over 20
                    jurisdictions to enter and flourish in India by providing various
                    options to best suit their needs. A&A takes pride in being amongst
                    the most sought-after qualitative legal service provider globally.
                </p>
                <p class="desc mb-5" data-aos-once="true" data-aos="fade-up">
                    With an aim to provide valued, practical and strategic legal
                    solutions to help clients achieve their goals, A&A combines the
                    highest global standards with local expertise.
                </p>
                <img src="/assets/frontend/images/aboutUs.png" alt="" class="about_content_img" data-aos-once="true"
                    data-aos="fade-up" />
            </div>
        </div>
    </div>
</section>

<!-- -------------------- About Content end   ---------------- -->

<!------ counter_section Start -------------------------->

<section class="counter_section">
    <div class="container">
        <div class="row">
            <div class="col-md-12" id="counter">
                <div class="row">
                    <div class="col-md-3">
                        <div class="about_counter_container">
                            <div class="about_right_counter aos-init aos-animate d-flex">
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
                        <div class="about_counter_container">
                            <div class="about_right_counter aos-init aos-animate" data-aos="fade-up"
                                data-aos-once="true">
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
                        <div class="about_counter_container">
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
                        <div class="about_counter_container">
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

<!---------- counter_section End -------------------------->
<!-- -------------------- About Content start ---------------- -->

<section class="about_page_content_2 pb-0 pt-0">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="heading mb-3" data-aos-once="true" data-aos="fade-up">
                    Team Of Experts
                </h1>
                <p class="desc mb-5" data-aos-once="true" data-aos="fade-up">
                    All our partners are recognized leaders in their respective
                    fields. They have specialized knowledge of both the legal
                    framework as well as the specific business requirements of various
                    industry sectors. They have a well-established track record in
                    guiding companies and individuals based on their specific needs
                    for doing business in India. The partners are confident in their
                    ability to provide advise across borders, identifying themselves
                    with the clients’ requirements and work along with the clients to
                    help them achieve their objectives. With a keen focus on quality,
                    reliability and cost-effectiveness, A&A has adopted standards
                    employed by the top international law firms which put clients at
                    ease and have made A&A a dependable source of seamless knowledge
                    and implementation
                </p>
                <h1 class="heading mb-3" data-aos-once="true" data-aos="fade-up">
                    Our Uniqueness
                </h1>
                <p class="desc mb-5" data-aos-once="true" data-aos="fade-up">
                    A&A adopted an approach that demands the highest levels of
                    understanding in each of their practice areas, technical skill and
                    service delivery allowing us to provide accurate, reliable, timely
                    and cost-effective advice across a range of industry groups and
                    sectors. This is reflected through our team of associates, who
                    abide by the system and ensure that the client’s needs always come
                    first. With our expertise and diversity of experience within the
                    teams, we are able to keep in touch with the changing environment
                    that our clients operate in and provide them with personalized
                    solutions to their business requirements or legal reservations.
                    Our continuous relationship with our clients and comprehension of
                    their business have ensured that our services extend to our
                    keeping abreast with the latest legal findings and amendments on
                    issues that could influence the viability our clients business and
                    provide them dynamic solutions with respect to applicable legal
                    and regulatory compliances to enable smooth functionality of their
                    business’.
                </p>
                <h1 class="heading mb-3" data-aos-once="true" data-aos="fade-up">
                    Our Values
                </h1>
                <p class="desc mb-5" data-aos-once="true" data-aos="fade-up">
                    Our most valuable asset for progress is consistent cooperation and
                    coordinated effort within and between our teams, across each
                    practice area. Each partner-led team, having specific practice
                    area knowledge and expertise, understand the clients requirements
                    and revert expeditiously to the committed satisfaction of the
                    client. With emphasis on our core values of focusing on quality,
                    reliability and efficacy along with a basic understanding, that we
                    work best through teamwork and collaboration, we are able to work
                    seamlessly across all practice areas for our clients.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- -------------------- About Content end   ---------------- -->

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

@endsection