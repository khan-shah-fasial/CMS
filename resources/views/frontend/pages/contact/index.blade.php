@extends('frontend.layouts.app')

@section('page.content')

<!----------========== contact start ===============-------------------->

<!-- ---------------------- Contact banner start--------------- -->

<section class="contact_p_banner breadcrumes_padd">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="text-center">
                    <h1 class="heading">
                        Contact Us
                    </h1>
                    <nav aria-label="breadcrumb" class="breadcrumb d-flex justify-content-center mb-0">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item home"><a href="{{ url(route('index')) }}">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">
                                Contact Us
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ---------------------- Contact banner end --------------- -->

<!-- ---------------------- Contact form start--------------- -->

<section class="contact_p_form">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="sub_container">
                    <div class="row">
                       
                        <div class="col-md-6">
						<h1 class="heading" data-aos-once="true" data-aos="fade-up">
                                Contact our support guys or make appointment 
                                with
                                <span class="main_heading_color"> Our Consultant </span>
                            </h1>
                            <p class="desc" data-aos-once="true" data-aos="fade-up">
                                Please contact us using the information below. For
                                additional information on our management consulting
                                services, please visit the appropriate page on our site.
                            </p>

                            <div class="address">
                                <p class="title mb-0 main_heading_color" data-aos-once="true" data-aos="fade-up">
                                    Delhi (Head Office)
                                </p>
                                <p data-aos-once="true" data-aos="fade-up" class="desc">
                                    Plot No. 66, LGF, <br />
                                    #TheHub, Okhla Phase III, <br />
                                    Okhla Industrial Estate, New <br />
                                    Delhi, 110020, India
                                </p>
                            </div>

                            <p class="info_heading" data-aos-once="true" data-aos="fade-up">
                                You can also contact us via:
                            </p>
                            <p class="phone_email" data-aos-once="true" data-aos="fade-up">
                                <span>011-41023400 </span>
                                <br />
                                <span> contact@ahlawatassociates.in </span>
                            </p>
                        </div>
                        <div class="col-md-6">
                            @include('frontend.component.contact_us_form')
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ---------------------- Contact form end --------------- -->
<!-- ---------------------- Contact Address start--------------- -->

<section class="contact_p_address">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="sub_container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="address_box">
                                <p class="title mb-0 main_heading_color" data-aos-once="true" data-aos="fade-up">
                                    Mumbai
                                </p>
                                <p data-aos-once="true" data-aos="fade-up">
                                    No. 611, Reliables Pride opp. Om Heera Panna Mall,<br />
                                    Anand Nagar, Jogeshwari West, <br />
                                    Mumbai, Maharashtra, 400102, India
                                </p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="address_box">
                                <p class="title mb-0 main_heading_color" data-aos-once="true" data-aos="fade-up">
                                    Chandigarh
                                </p>
                                <p data-aos-once="true" class="desc" data-aos="fade-up">
                                    Spacejam, SCO, 50-51, Sector 34A, <br />
                                    Chandigarh, 160022, <br />
                                    India
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ---------------------- Contact Address end --------------- -->

<!-------------=============== contact end =============== -------------------->

@endsection