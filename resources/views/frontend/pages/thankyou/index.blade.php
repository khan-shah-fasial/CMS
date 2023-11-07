@extends('frontend.layouts.app')

@section('page.title', 'Ahlawat Associates: Top Lawyers &amp; Law Firms in Delhi, India')

@section('page.description', 'Ahlawat &amp; Associates is one of the best law firms in Delhi, India. We provide legal assistance for startups, FDI, Property law, IP, and more')

@section('page.type', 'website')

@section('page.content')



<!--  ----------------- 404 start --------------------- -->


<section class="thankyou">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="thankyou_container d-flex align-items-center justify-content-center flex-column">
                    <h1 class="mb-0">Thank You</h1>
                    <img src="/assets/frontend/images/thankyou.png" alt="" class="py-3">
                    <h6>for Contacting us !</h6>
                    <p>We’ll reach you out immediately</p>
                    <a class="btn btn-success" href="{{url('/')}}">Back to Homepage</a>
                </div>
            </div>
        </div>
    </div>
</section>




<!--  ----------------- 404 End --------------------- -->









@include('frontend.component.get_in_touch')

<!-- -------------- service get in touch  end ---------------------- -->

<!------------------ awards_section Start -------------------------->
@include('frontend.component.awards')
<!------------------ awards_section End -------------------------->

@endsection