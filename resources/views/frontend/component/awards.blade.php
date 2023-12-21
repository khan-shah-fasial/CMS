@php
$awards = DB::table('awards')->where('status', 1)->orderBy('series', 'asc')->get();
@endphp

<!--------=========== Awards =========================------------------------>
@if(count($awards) >= 1)
<section class="awards_section about_bg">
    <div class="container">
        <div class="row">
            <div class="col-md-12 px0">
                <div class="underline_heading d-flex align-items-center justify-content-center mb-md-0 mb-3">
                    <h2 class="main_heading text-center " data-aos-once="true" data-aos="fade-up">Awards &
                    Recognitions</h2>
                </div>
                <!-- <h2 class="main_heading text-center mb-md-4 mb-2" data-aos-once="true" data-aos="fade-up">Awards &
                    Recognitions
                </h2> -->

                <div class="owl-carousel owl-theme" id="awards_slider">

                    @foreach ($awards as $row)

                    <div class="item">
                        <div class="awards_box">
                            <h4>{{ $row->title }}</h4>
                            <img loading="lazy" src="{{ asset('storage/' . $row->image) }}" alt="Awards Image"/>
                        </div>
                    </div>

                    @endforeach

                </div>
            </div>
        </div>
    </div>
</section>
@endif


<!--------------================= end Awards ================------------------->