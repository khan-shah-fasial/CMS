@extends('frontend.layouts.app')

@section('page.title', 'Ahlawat Associates: Top Lawyers &amp; Law Firms in Delhi, India')

@section('page.description', 'Ahlawat &amp; Associates is one of the best law firms in Delhi, India. We provide legal assistance for startups, FDI, Property law, IP, and more')

@section('page.type', 'practice area')

@section('page.content')


<!-------===========practicearea list start===================------------>

<section class="faq_page_banner">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="text-center">
                    <h1 class="heading">Practice Area</h1>
                    <nav aria-label="breadcrumb" class="breadcrumb d-flex justify-content-center mb-0">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item home">
                                <a href="{{ url(route('index')) }}">Home</a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">
                                Practice Area
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ------------------- practice area box start ---------------- -->
<section class="practice_w_box">
    <div class="container">
        <div class="row">
            @foreach($practiceAreas as $row)
            <div class="col-md-4 mb-2 px0">
                <a href="{{ url(route('practicearea-detail', ['slug' => strtolower(str_replace(' ', '-',$row->slug))] )) }}"
                    class="btn_hover btn-3 hover-border-5 text-center ">
                    <span>{{$row->title}}</span>
                </a>



                {{--
                 <a
                    href="{{ url(route('practicearea-detail', ['slug' => strtolower(str_replace(' ', '-',$row->slug))] )) }}">
                    <div class="practice_w_card d-flex align-items-center justify-content-center m-2 py-5">
                        <img src="{{ asset('storage/' . $row->breadcrumb_image) }}" alt="{{$row->title}}"
                        class="mb-4 w-100" />
                        <h4 class="heading text-center">{{$row->title}}</h4>
                    </div>
                </a> 
                --}}
            </div>
            @endforeach
        </div>
    </div>
</section>
<!-- ------------------- practice area box end ---------------- -->

<!-- ---------- service get in touch  start ---------------------- -->

@include('frontend.component.get_in_touch')

<!-- -------------- service get in touch  end ---------------------- -->

<!------------------ awards_section Start -------------------------->
@include('frontend.component.awards')
<!------------------ awards_section End -------------------------->

<!-------===========practicearea end===================------------>
@endsection