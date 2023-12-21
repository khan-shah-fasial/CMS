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
                                <a href="https://www.google.com/maps/place/%23TheHub/@28.5495141,77.2648649,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce362dba5bca1:0x191c6dd29ebbec30!8m2!3d28.5495094!4d77.2674398!16s%2Fg%2F11h18n3l7n" target="_blank" data-aos-once="true" data-aos="fade-up" class="desc">
                                    {{ get_settings('delhi_address') }}
                                </a>
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
                                <a href="https://www.google.com/maps/place/CHAI+Kreative+%26+Advisory/@19.148569,72.827675,17z/data=!4m6!3m5!1s0x3be7b63f41eaaaab:0xb6ad0cd397a161bf!8m2!3d19.148569!4d72.8324386!16s%2Fg%2F11rss2sqd5?entry=ttu" target="_blank" data-aos-once="true" data-aos="fade-up">
                                    {{ get_settings('mumbai_address') }}
                                </a>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="address_box">
                                <p class="title mb-0 main_heading_color" data-aos-once="true" data-aos="fade-up">
                                    Chandigarh
                                </p>
                                <a href="https://www.google.com/maps/place/SpaceJam+Coworking+in+Chandigarh+-+Shared+Office+Space/@30.7227291,76.7675161,17z/data=!4m7!3m6!1s0x390fedadb971da4d:0xa82d772011e76be8!8m2!3d30.7228959!4d76.7704193!15sCj9TcGFjZWphbSwgU0NPLCA1MC01MSwgU2VjdG9yIDM0QiwgU2VjdG9yIDM0LCBDaGFuZGlnYXJoLCAxNjAwMjKSAQ9jb3dvcmtpbmdfc3BhY2XgAQA!16s%2Fg%2F11gbz9v208?entry=tts" target="_blank" data-aos-once="true" class="desc" data-aos="fade-up">
                                    Spacejam, SCO, 50-51, Sector 34A, <br />
                                    Chandigarh, 160022, <br />
                                    India
                                </a>
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

