@extends('frontend.layouts.app')

@section('page.title', 'Ahlawat Associates: Top Lawyers &amp; Law Firms in Delhi, India')

@section('page.description', 'Ahlawat &amp; Associates is one of the best law firms in Delhi, India. We provide legal assistance for startups, FDI, Property law, IP, and more')

@section('page.type', 'website')

@section('page.content')



<!--  ----------------- 404 start --------------------- -->


<section class="404">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="container_404 d-flex align-items-center justify-content-center flex-column">
                    <h2>404</h2>
                    <h4>Something’s missing.</h4>
                    <p>This page is missing or you assembled the link incorrectly.</p>
                    <button>Go to Website</button>
                </div>
            </div>
        </div>
    </div>
</section>




<!--  ----------------- 404 End --------------------- -->







<!-- -------------- service get in touch  start ---------------------- -->


@include('frontend.component.get_in_touch')

<!-- -------------- service get in touch  end ---------------------- -->

<!------------------ awards_section Start -------------------------->
@include('frontend.component.awards')
<!------------------ awards_section End -------------------------->

@endsection