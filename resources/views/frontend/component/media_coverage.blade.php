@php
$media = DB::table('media_coverage')->where('status', 1)->orderBy('created_at', 'desc')->get();
@endphp
<!---========= Media coverage ==========--------------->

<section class="media">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="underline_heading d-flex align-items-center justify-content-center mt-5">
                    <h6 class="main_heading text-center" data-aos-once="true" data-aos="fade-up">Media</h6>
                </div>
                <h1 class="main_heading mb-md-2 text-center" data-aos-once="true" data-aos="fade-up">Media Coverage</h1>
            </div>

            <div class="col-md-12">
                <div class="owl-carousel owl-theme" id="media_slider_carousel">

                    @foreach ($media as $row)

                    <div class="item">
                        <a href="{{ $row->url }}" class="media_link">
                            <div class="media_box" data-aos-once="true" data-aos="fade-up">
                                <img src="{{ asset('storage/' . $row->image) }}" alt="" />
                                <h4 class="title">{{ $row->title }}</h4>
                            </div>
                        </a>
                    </div>

                    @endforeach

                </div>
            </div>

            <div class="col-md-12">
                <div class="text-center mt-3">
                    <a class="common_btn" href="{{ url(route('media-coverage')) }}">View More</a>
                </div>
            </div>
        </div>
    </div>
</section>
<!---========= End Media coverage ==========--------------->