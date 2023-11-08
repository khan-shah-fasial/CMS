@php
//$team = DB::table('teams')->where('is_home', 1)->orderBy('series', 'asc')->get();
$team = DB::table('teams')->limit(5)->orderBy('series', 'asc')->get();
@endphp

<!----------------================= Team start =======================-------------->

<section class="team">
    <div class="container">
        <div class="row">
            <div class="col-md-6 px0">
                <div class="underline_heading">
                    <h6 class="main_heading" data-aos-once="true" data-aos="fade-up">Team member</h6>
                </div>
                <h1 class="main_heading" data-aos-once="true" data-aos="fade-up">
                    We feel very proud <br />
                    for our
                    <span class="main_heading_color"> Experts </span>
                </h1>
            </div>
            <div class="col-md-6 px0">
                <p class="desc mt-md-4 mt-2" data-aos-once="true" data-aos="fade-up">
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

                    @foreach ($team as $row)

                    <div class="item" data-aos-once="true" data-aos="fade-up">
                        <a href="{{ url(route('team.detail', ['slug' => strtolower(str_replace(' ', '-',$row->name))] )) }}"
                            class="text-decoration-none">
                            <div class="team_box">
                                <div class="hover_img">
                                    <img src="{{ asset('storage/' . $row->image) }}" alt="" class="team_img" />
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