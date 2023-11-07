@extends('frontend.layouts.app')

@section('page.title', 'Ahlawat Associates: Top Lawyers &amp; Law Firms in Delhi, India')

@section('page.description', 'Ahlawat &amp; Associates is one of the best law firms in Delhi, India. We provide legal assistance for startups, FDI, Property law, IP, and more')

@section('page.type', 'team')

@section('page.content')

<!-------=================== Team start ======================----------->

<!-- ---------------------- Team Banner start -------------------- -->

<section class="team_banner">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="text-center">
                    <h1 class="heading">Team Members</h1>
                    <p class="desc">
                        Dedicated To Solving The Most Complex Challenges
                    </p>
                    <nav aria-label="breadcrumb" class="breadcrumb d-flex justify-content-center mb-0">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item home"><a href="{{ url(route('index')) }}">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">
                                Team Members
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ---------------------- Team Banner end -------------------- -->
<!-- ---------------------- Team Card start -------------------- -->

<section class="team_wrapper">
    <div class="container">
        <div class="row px0">

            @foreach ($team as $row)

            <div class="col-xl-3 col-md-4 col-6 ">
                <div class="team_box">
                    <div class="team_main_img">
                        <img src="{{ asset('storage/' . $row->image) }}" alt="" data-aos="fade-up"
                            data-aos-once="true" />
                    </div>
                    <p class="name" data-aos="fade-up" data-aos-once="true">
                        {{ ucfirst($row->name) }}
                    </p>
                    <p class="desc">{{ ucfirst($row->designation) }}</p>
                    <hr />
                    <p class="bio" data-aos="fade-up" data-aos-once="true">
                        {{ str_replace([' ', '&amp;',', , '], [', ',', '], strip_tags($row->description)) }}
                    </p>
                    <a href="{{ url(route('team.detail', ['slug' => strtolower(str_replace(' ', '-',$row->name))] )) }}"
                        data-aos="fade-up" data-aos-once="true">View Profile</a>
                </div>
            </div>

            @endforeach

        </div>
    </div>
</section>

<!-- ---------------------- Team Card end -------------------- -->

<!-- ---------- service get in touch  start ---------------------- -->

@include('frontend.component.get_in_touch')

<!-- -------------- service get in touch  end ---------------------- -->

<!------------------ awards_section Start -------------------------->
@include('frontend.component.awards')
<!------------------ awards_section End -------------------------->

<!--------============== Team end ================-------------->

@endsection