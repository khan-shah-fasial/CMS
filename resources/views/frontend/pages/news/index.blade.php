@extends('frontend.layouts.app')

@section('page.title', 'Ahlawat Associates: Top Lawyers &amp; Law Firms in Delhi, India')

@section('page.description', 'Ahlawat &amp; Associates is one of the best law firms in Delhi, India. We provide legal
assistance for startups, FDI, Property law, IP, and more')

@section('page.type', 'news')

@section('page.content')

<!----------------=============== News start ================------------->
<!-- -------------------- News banner start ---------------- -->

<section class="blog_page_banner">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="text-center">
                    <h1 class="heading">News</h1>
                    <nav aria-label="breadcrumb" class="breadcrumb d-flex justify-content-center mb-0">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item home">
                                <a href="{{ url(route('index')) }}" data-aos="fade-up" data-aos-once="true">Home</a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">
                                News
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
        <div class="row" id="news_data">

            @include('frontend.component.news_card')

        </div>
    </div>
    @if(count($news) > '5')

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
            url: "{{ route('news-data') }}",
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
            $('#news_data').append(response.html);
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