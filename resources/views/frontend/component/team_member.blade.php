@php
//$team = DB::table('teams')->where('is_home', 1)->orderBy('series', 'asc')->get();
$team = DB::table('teams')->where('status', 1)->limit(6)->orderBy('series', 'asc')->get();
@endphp

<!----------------================= Team start =======================-------------->

<section class="team">
    <div class="container">
        <div class="row">
            <div class="col-md-12  px0">
                <div class="underline_heading d-flex align-items-center justify-content-center mb-md-0 mb-3">
                    <h5 class="main_heading text-center" data-aos-once="true" data-aos="fade-up">Our <span class="main_heading_color">Professionals</span></h5>
                </div>
                <!-- <h1 class="main_heading text-center" data-aos-once="true" data-aos="fade-up">
                    We feel very proud 
                    for our
                    <span class="main_heading_color"> Experts </span>
                </h1> -->
            </div>
            <!-- <div class="col-md-6 px0">
                <p class="desc mt-md-4 mt-2" data-aos-once="true" data-aos="fade-up">
                    Contact the best lawyers in India  Our team of Lawyers is highly skilled and confident in
                    their
                    ability to offer advice that transcends borders. They understand and align themselves with the
                    clients&#39;
                    needs and collaborate closely to assist them in achieving their goals.
                </p>
            </div> -->
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="owl-carousel owl-theme" id="banner_slider_carousel">

                    @foreach ($team as $row)

                    <div class="item" data-aos-once="true" data-aos="fade-up">
                        <a href="{{ url(route('team.detail', ['slug' => strtolower(str_replace(' ', '-',$row->name))] )) }}"
                            class="text-decoration-none">
                            <div class="team_box">
                                <div class="hover_img">
                                    <img loading="lazy" src="{{ asset('storage/' . $row->image) }}" alt="" class="team_img" />
                                </div>

                                <div class="d-flex align-items-center justify-content-center team_bio_container">
                                    <p class="team_bio_box">
                                        <span class="name text-decoration-none">{{ ucfirst($row->name) }}</span>
                                        <span class="role text-decoration-none">{{ ucfirst($row->designation) }}</span>
                                    </p>
                                </div>
                            </div>
                        </a>

                    </div>

                    @endforeach

                </div>
            </div>
        </div>
    </div>
</section>

<!----------------================= Team start =======================-------------->