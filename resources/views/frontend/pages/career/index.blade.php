@extends('frontend.layouts.app')

@section('page.title', 'Career in Law: Join Ahlawat & Associates')

@section('page.description', 'If you are interested in joining the A&amp;A team for a career in law, please email us at admin@ahlawatassociates.in or contact any of our offices directly.')

@section('page.type', 'website')

@section('page.content')



<!-- -------------------- career banner start ---------------- -->

<section class="career_page_banner">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="text-center">
                    <h1 class="heading">Career</h1>
                    <nav aria-label="breadcrumb" class="breadcrumb d-flex justify-content-center mb-0">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item home">
                                <a href="#" data-aos="fade-up" data-aos-once="true">Home</a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">
                                Career
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- -------------------- career banner end   ---------------- -->
<!-- -------------------- career content start ---------------- -->

<section class="career_page_content">
    <div class="container">
        <div class="row">
            <div class="col-md-12 padd00mb">
                @php echo html_entity_decode(get_settings('career_content')) @endphp
            </div>
        </div>
    </div>
</section>

<!-- -------------------- career content end   ---------------- -->
<!-- ---------- service get in touch  start ---------------------- -->

@include('frontend.component.get_in_touch')

<!-- -------------- service get in touch  end ---------------------- -->

<!------------------ awards_section Start -------------------------->
@include('frontend.component.awards')
<!------------------ awards_section End -------------------------->

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body ">
                <div class="career_popup_form">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    @include('frontend.component.career_form')

                </div>

            </div>
        </div>
    </div>
</div>

@endsection