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
                    <h2 class="main_heading text-center " >Awards &
                    Recognitions</h2>
                </div>

                <div class="owl-carousel owl-theme" id="awards_slider">

                    @foreach ($awards as $row)

                    <div class="item">
                        <div class="awards_box">
                            <h4>{{ $row->title }}</h4>
                            <img loading="lazy" src="{{ asset('storage/' . $row->image) }}" alt="{{ $row->title }}"/>
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