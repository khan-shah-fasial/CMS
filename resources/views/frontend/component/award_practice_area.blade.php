@php
$ids = [14, 7, 12, 23, 31, 16];
$practice_Area = DB::table('practice_areas')->whereIn('id', $ids)->get();
@endphp

<!------=================== Awards Practice Area =====================------------------------->

<section class="practice">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="underline_heading d-flex align-items-center justify-content-center mb-md-0 mb-3">
                    <h6 class="main_heading text-center" data-aos-once="true" data-aos="fade-up">Our <span class="main_heading_color"> Practice</span> Area</h6>
                </div>
                <!-- <h1 class="main_heading text-center mb-md-4 mb-3" data-aos-once="true" data-aos="fade-up">
                    Our <span class="main_heading_color"> Practice</span> Area
                </h1> -->
            </div>

            @foreach ($practice_Area as $row)

            <div class="col-md-4 mb-4">
                <div class="practice_box" data-aos-once="true" data-aos="fade-up">
                    <div class="visible_box">
                        <img loading="lazy" src="{{ asset('storage/' .$row->thumnail_image) }}" alt="" />
                        <h4>{{ $row->title }}</h4>
                    </div>
                    <div class="hover_box">
                        <p>
                            {{ $row->short_description }}
                        </p>
                        <a href="{{ 
                                $row->special_service == '1' ? 
                                    url(route('practicearea-detail-specialised', ['slug' => $row->slug] )) :
                                    (
                                        $row->special_service == '2' ?
                                            url(route('practicearea-detail-page', ['slug' => $row->slug] )) :
                                            (
                                                $row->special_service == '3' ?
                                                    url(route('practicearea-detail-extra', ['slug1' => $row->slug] )) :
                                                    url(route('practicearea-detail', ['slug' => $row->slug] ))
                                            )
                                    )
                            }}">Learn 
                            More <img loading="lazy" src="/assets/frontend/images/right.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>

            @endforeach

            <div class="col-md-12">
                <div class="d-flex align-items-center justify-content-center mt-2" data-aos-once="true"
                    data-aos="fade-up">
                    <a href="{{ url(route('practicearea')) }}">
                        <button class="practice_button">Know More</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<!------=================== end Awards Practice Area =====================------------------------->