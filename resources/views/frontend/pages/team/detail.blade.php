@extends('frontend.layouts.app')

@section('page.title', "$detail->meta_title")

@section('page.description', "$detail->meta_description")

@section('page.type', 'team')

@section('page.publish_time', "$detail->updated_at")

@section('page.content')


<!------------============ team detail start ============ -------------->


<!-- ------------- Team Details banner  start ---------------- -->

<section class="team_d_banner">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="text-center">
                    <h1 class="heading">{{ ucfirst($detail->name) }}</h1>
                    {{--<p class="desc mb-1">{{ ucfirst($detail->name) }}</p>--}}
                    <nav aria-label="breadcrumb" class="breadcrumb d-flex justify-content-center mb-0">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item "><a href="{{ url(route('index')) }}">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">
                                <a href="{{ url(route('team')) }}">Team Members</a> 
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">
                                {{ ucfirst($detail->name) }}
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ------------- Team Details banner  End ---------------- -->

<!-- ------------- Team Details content  start ---------------- -->

<section class="team_d_content">
    <div class="container">
        <div class="row">
            <div class="col-md-5 px0">
                <img src="{{ asset('storage/' . $detail->image) }}" alt="" class="team_img" data-aos="fade-up"
                    data-aos-once="true" />
            </div>
            <div class="col-md-7 px0">
                <div class="content">
                    <h4 class="main_heading" data-aos="fade-up" data-aos-once="true">
                        {{ ucfirst($detail->name) }}
                    </h4>

                    @if(!empty($detail->designation))
                    <h2 class="role" data-aos="fade-up" data-aos-once="true">
                        {{ ucfirst($detail->designation) }}
                    </h2>
                    @endif

                    <div class="d-flex align-items-center gap-3 mail ">

                        @if(!empty($detail->email))
                        <a href="mailto:{{ $detail->email }}">
                            <img src="/assets/frontend/images/mail.png" alt="" data-aos="fade-up"
                                data-aos-once="true" />
                        </a>
                        @endif

                        @if(!empty($detail->linkedin_link))
                        <a href="{{ $detail->linkedin_link }}">
                            <img src="/assets/frontend/images/linked.png" alt="" data-aos="fade-up"
                                data-aos-once="true" />
                        </a>
                        @endif

                    </div>

                    @if(!empty($detail->description))

                    <h4 class="sub_heading" data-aos="fade-up" data-aos-once="true">
                        Practice Area
                    </h4>

                    @php echo html_entity_decode($detail->description) @endphp

                    @endif

                </div>
            </div>
            <div class="col-md-12 px0">
                <h4 class="sub_heading mt-md-5" data-aos="fade-up" data-aos-once="true">
                    Professional Experience
                </h4>
                @php echo html_entity_decode($detail->about) @endphp
            </div>
        </div>
    </div>
</section>

<!-- ------------- Team Details content  End ---------------- -->

<!-- ---------- service get in touch  start ---------------------- -->

@include('frontend.component.get_in_touch')

<!-- -------------- service get in touch  end ---------------------- -->

<!------------------ awards_section Start -------------------------->
@include('frontend.component.awards')
<!------------------ awards_section End -------------------------->

<!---------============== team detail end =============----------------->

@endsection