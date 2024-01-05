@extends('frontend.layouts.app')

@section('page.title', 'Media coverage | Ahlawat & Associates')

@section('page.description', 'Alhawat associates regularly update media coverage covering various legal fields in which
their lawyers specialize.')

@section('page.type', 'media coverage')

@section('page.content')

<!----------------=============== News start ================------------->
<!-- -------------------- News banner start ---------------- -->

<section class="blog_page_banner">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="text-center">
                    <h1 class="heading">Media Coverages</h1>
                    <nav aria-label="breadcrumb" class="breadcrumb d-flex justify-content-center mb-0">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item home">
                                <a href="{{ url(route('index')) }}" data-aos="fade-up" data-aos-once="true">Home</a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">
                                Media Coverages
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- -------------------- blog banner end   ---------------- -->

@include('frontend.component.category_breadcrumb')

<!-- -------------------- blog banner start ---------------- -->

<section class="blog_page_cards">
    <div class="container">
        <div class="row" id="media_coverage_data">

            @include('frontend.component.media_coverage_card')

        </div>
    </div>
    @if(count($media_coverage) > '5')
    <div class="text-center">
        <button class="load-more" id="load-more">View More</button>
    </div>
    @endif
</section>

<!-- -------------------- blog banner end   ---------------- -->

<!-- ---------- service get in touch  start ---------------------- -->

@include('frontend.component.get_in_touch')

<!-- -------------- service get in touch  end ---------------------- -->

<!------------------ awards_section Start -------------------------->
@include('frontend.component.awards')
<!------------------ awards_section End -------------------------->

<!----------------=============== blog end ================------------->
@endsection

@section('component.scripts')
<script>
var currentPage = 1; // Track the current page number

$('#load-more').click(function() {
    currentPage++; // Increment the page number

    $.ajax({
            url: "{{ route('media-coverage-data') }}",
            type: 'GET', // Change the method to GET
            data: {
                page: currentPage
            },
        })
        .done(function(response) {
            if (response.html === '') {
                $('#load-more').hide(); // Hide the button when there's no more data
                return;
            }
            $('#media_coverage_data').append(response.html);
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });
});
</script>
@endsection