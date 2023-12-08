@extends('frontend.layouts.app')

@section('page.title', 'Facing Legal Issue? Contact us and Get your legal issue solved now')

@section('page.description', 'Feel free to contact us we are one of the India&#039;s leading full service law firm with expertise in all the practice area and get your legal issue solved')

@section('page.type', 'website')

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
            <div class="col-md-12 px0">
                <div class="sub_container">
                    <div class="row">

                        <div class="col-md-6 px0">
                            <h1 class="heading" data-aos-once="true" data-aos="fade-up">
                                {{ get_settings('contact_us_title') }}
                                <span class="main_heading_color"> {{ get_settings('contact_us_title2') }} </span>
                            </h1>
                            @php echo html_entity_decode(get_settings('contact_us_content')) @endphp

                            <div class="address">
                                <p class="title mb-0 main_heading_color" data-aos-once="true" data-aos="fade-up">
                                    Delhi (Head Office)
                                </p>
                                <p data-aos-once="true" data-aos="fade-up" class="desc">
                                    {{ get_settings('delhi_address') }}
                                </p>
                            </div>

                            <p class="info_heading" data-aos-once="true" data-aos="fade-up">
                                You can also contact us via:
                            </p>
                            <p class="phone_email" data-aos-once="true" data-aos="fade-up">

                                <span> <a href="tel:{{ get_settings('mobile') }}">{{ get_settings('mobile') }} </a></span>
                                <br />
                                <span> <a href="mailto:{{ get_settings('email') }}">
                                    {{ get_settings('email') }}
                                    </a> </span>
                            </p>
                        </div>
                        <div class="col-md-6 px0">
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
                                    {{ get_settings('mumbai_address') }}
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