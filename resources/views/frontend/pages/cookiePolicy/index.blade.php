@extends('frontend.layouts.app')

@section('page.title', 'Cookie Policy of the Website | Ahlawat & Associates Cookie Policy')

@section('page.description', 'A&amp;A’s Cookie Policy is relevant to anyone who uses the website or provides personal data relating to a natural person who can be identified.')

@section('page.type', 'website')

@section('page.content')
    <!-- -------------------- blog banner start ---------------- -->
        <!-- -------------------- blog banner start ---------------- -->

        <section class="blog_page_banner breadcrumes_padd">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="text-center">
                            <h1 class="heading">Cookie Policy</h1>
                            <nav aria-label="breadcrumb" class="breadcrumb d-flex justify-content-center mb-0">
                                <ol class="breadcrumb mb-0">
                                    <li class="breadcrumb-item home">
                                        <a href="#" data-aos="fade-up" data-aos-once="true">Home</a>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">
                                        Cookie Policy
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        <!-- -------------------- blog banner end   ---------------- -->

    <section class="">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    @php echo html_entity_decode(get_settings('cookie_content')) @endphp
				</div>
            </div>
        </div>
    </section>
    <!------------------ awards_section End -------------------------->

    @endsection

