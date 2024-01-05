@extends('frontend.layouts.app')

@section('page.title', 'Ahlawat Associates: Top Lawyers &amp; Law Firms in Delhi, India')

@section('page.description', 'Ahlawat &amp; Associates is one of the best law firms in Delhi, India. We provide legal
assistance for startups, FDI, Property law, IP, and more')

@section('page.type', 'website')

@section('page.content')

<!-- -------------------- About banner start ---------------- -->

<section class="about_page_banner breadcrumes_padd">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="text-center">
                    <h4 class="heading">Our Journey</h4>
                    <nav aria-label="breadcrumb" class="breadcrumb d-flex justify-content-center mb-0">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item home">
                                <a href="{{ url(route('index')) }}" data-aos="fade-up" data-aos-once="true">Home</a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">
                                Our Journey
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
            <div class="col-md-12 padd00mb">

                @php echo html_entity_decode(get_settings('about_us_content1')) @endphp
                {{--<img src="/assets/frontend/images/aboutUs.png" alt="" class="about_content_img" data-aos-once="true"
                    data-aos="fade-up" />--}}
            </div>
        </div>
    </div>
</section>

<!-- -------------------- About Content end   ---------------- -->

<!------ counter_section Start -------------------------->

@include('frontend.component.service_counter')

<!---------- counter_section End -------------------------->
<!-- -------------------- About Content start ---------------- -->

<section class="about_page_content_2 pb-0 pt-0">
    <div class="container">
        <div class="row">
            <div class="col-md-12 padd00mb">
                @php echo html_entity_decode(get_settings('about_us_content2')) @endphp
            </div>
        </div>
    </div>
</section>

<!-- -------------------- About Content end   ---------------- -->
<!-- ---------- service get in touch  start ---------------------- -->

@include('frontend.component.get_in_touch')

<!-- -------------- service get in touch  end ---------------------- -->

<!------------------ awards_section Start -------------------------->
@include('frontend.component.awards')
<!------------------ awards_section End -------------------------->

@endsection