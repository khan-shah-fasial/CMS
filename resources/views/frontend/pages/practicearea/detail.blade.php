@extends('frontend.layouts.app')

@section('page.title', "$detail->meta_title")

@section('page.description', "$detail->meta_description")

@section('page.type', 'practice area')

@section('page.publish_time', "$detail->updated_at")

@section('page.schema')
<!--------------------------- Page Schema --------------------------------->

<script type="application/ld+json">
    {
      "@context": "https://schema.org/", 
      "@type": "BreadcrumbList", 
      "itemListElement": [{
        "@type": "ListItem", 
        "position": 1, 
        "name": "Home",
        "item": "{{ url(route('index')) }}"  
      },{
        "@type": "ListItem", 
        "position": 2, 
        "name": "Practice Areas",
        "item": "{{ url(route('practicearea')) }}"  
      },{
        "@type": "ListItem", 
        "position": 3, 
        "name": "@php echo str_replace('&nbsp;',' ',htmlspecialchars_decode ($detail->title)); @endphp",
        "item": "{{ url()->current() }}"  
      }]
    }
</script>
  
<!--------------------------- Page Schema end--------------------------------->
@endsection

@section('page.content')


<!-------===========practicearea start===================------------>
<!-- -------------------- service_banner start ---------------------- -->

<section class="service_banner" style="background-image: url({{ asset('storage/' . $detail->breadcrumb_image) }});">
    <div class="container">
        <div class="row">
            <div class="col-md-12 px0">
                <div class="text-center">
                    <h1 class="heading">{{ $detail->breadcrumb_title }}</h1>
                    <h2 class="desc">{{ $detail->breadcrumb_subtitle }}</h2>
                    <nav aria-label="breadcrumb" class="breadcrumb d-flex justify-content-center mb-0">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item home"><a href="{{ url(route('index')) }}">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">
                                <a href="{{ url(route('practicearea')) }}">Practice Area</a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">
                                {{ $detail->title }}
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- -------------------- service_banner  end ---------------------- -->

<!-- -------------------- service Title Desc start ---------------------- -->

<section class="service_title_desc">
    <div class="container">
        <div class="row">
            <div class="col-md-12 px0">
                @php echo html_entity_decode($detail->content) @endphp
            </div>
        </div>
    </div>
</section>

<!-- --------------------  service Title Desc  end ---------------------- -->
<!-- -------------------- service image start ---------------------- -->

@if(!empty($detail->section_image))

<section class="service_img" data-aos-once="true" data-aos="fade-up">
    <a href="@if(!empty($detail->section_link)){{ $detail->section_link }}@else # @endif" target="_blank">
        <img src="{{ asset('storage/' . $detail->section_image) }}" alt="{{ $detail->alt_section_image }}">
    </a>
</section>

@endif

<!-- -------------------- service image  end ---------------------- -->
<!-- -------------------- service counter start ---------------------- -->

@include('frontend.component.service_counter')

<!-- -------------------- service counter  end ---------------------- -->

<!-- -------------------- service why choose start ---------------------- -->

{{--@if(count($child_detail) > 0 || !empty($detail->why_choose_us) || !empty(json_decode($detail->faq, true))) --}}
@if(count($child_detail) > 0 || empty($detail->why_choose_us) || !empty(json_decode($detail->faq, true)))
<section class="service_why_choose">
    <div class="container">
        <div class="row">
            <div class="col-md-12 px0">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    @php $a = 0; @endphp

                    @if(count($child_detail) > 0)
                    @php $a = 1; @endphp

                    <li class="nav-item" role="presentation" data-aos-once="true" data-aos="fade-up">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                            aria-selected="true">
                            Our Focus Area
                        </button>
                    </li>

                    @endif

                    @if(!empty($detail->why_choose_us))

                    <li class="nav-item" role="presentation" data-aos-once="true" data-aos="fade-up">
                        <button class="nav-link @if($a != 1) active @endif" id="pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                            aria-selected="@if($a != 1) true @else false @endif">
                            Why Choose Us
                        </button>
                    </li>
                    @php $a = 1; @endphp

                    @else

                    <li class="nav-item" role="presentation" data-aos-once="true" data-aos="fade-up">
                        <button class="nav-link @if($a != 1) active @endif" id="pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                            aria-selected="@if($a != 1) true @else false @endif">
                            Why Choose Us
                        </button>
                    </li>
                    @php $a = 1; @endphp

                    @endif

                    @if(!empty(json_decode($detail->faq, true)))

                    <li class="nav-item" role="presentation" data-aos-once="true" data-aos="fade-up">
                        <button class="nav-link  @if($a != 1) active @endif" id="pills-contact-tab"
                            data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab"
                            aria-controls="pills-contact" aria-selected="@if($a != 1) true @else false @endif">
                            FAQ
                        </button>
                    </li>

                    @endif
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    @php $b = 0; @endphp

                    @if(count($child_detail) > 0)
                    @php $b = 1; @endphp

                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                        aria-labelledby="pills-home-tab">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 class="heading3 mb-3" data-aos-once="true" data-aos="fade-up">
                                    Our Focus Area
                                </h2>
                                {{--
                                <p class="desc mb-5 d-none" data-aos-once="true" data-aos="fade-up">
                                    {{ $detail->focus_area }}
                                </p> 
                                --}}
                            </div>

                            @foreach($child_detail as $row)

                            <div class="col-md-4" data-aos-once="true" data-aos="fade-up">
                                <div class="practice_box m-0 mb-4">
                                    <div class="visible_box">
                                        <!--<img src="{{ asset('storage/' . $detail->thumnail_image) }}" alt="" />-->
                                        <h4>{{ $row->title }}</h4>
                                    </div>
                                    <div class="hover_box">
                                        <p>
                                            {{ $row->short_description }}
                                        </p>
                                        <a
                                            href="{{ 
                                                $row->special_service == '1' ? 
                                                    url(route('practicearea-detail-specialised', ['slug' => $row->slug] )) :
                                                    (
                                                        $row->special_service == '2' ?
                                                            url(route('practicearea-detail-page', ['slug' => $row->slug] )) :
                                                            (
                                                                $row->special_service == '3' ?
                                                                    url(route('practicearea-detail-extra', ['slug1' => $row->slug] )) :
                                                                    url(route('practicearea-detail', ['slug' => $row->slug] ))
                                                            )
                                                    )
                                            }}">Read
                                            More <img src="/assets/frontend/images/right.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            @endforeach

                        </div>
                    </div>

                    @endif

                    @if(!empty($detail->why_choose_us))

                    <div class="tab-pane fade @if($b != 1) show active @endif" id="pills-profile" role="tabpanel"
                        aria-labelledby="pills-profile-tab">
                        <div class="row">
                            <div class="col-md-12">
                                @php echo html_entity_decode($detail->why_choose_us) @endphp
                            </div>
                        </div>
                    </div>

                    @php $b = 1; @endphp

                    @else

                    <div class="tab-pane fade @if($b != 1) show active @endif" id="pills-profile" role="tabpanel"
                    aria-labelledby="pills-profile-tab">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 class="heading" data-aos-once="true" data-aos="fade-up">
                                    Experienced Team
                                </h2>
                                  <p class="desc" data-aos-once="true" data-aos="fade-up">
                                    A&A is among the top corporate law firms in India. At A&A, we believe that we are as good as our team, Our principle has guided us to ensure that we have the best corporate lawyers in India based at our main offices while the leading corporate lawyers in other parts of the world run our various practices across the nation, thus ensuring optimum management and service of even the most complex transactions. It is due to our standards of professional responsibility when dealing with our clients and various matters, which we stringently abide by that has enabled us to qualify as one of the reputed corporate law firms in India.
                                  </p>
                                <h2 class="heading" data-aos-once="true" data-aos="fade-up">
                                    Industry Experience
                                </h2>
                                  <p class="desc" data-aos-once="true" data-aos="fade-up">
                                    Whilst A&A commercial law services has been able to cater to legal needs pan India as well as globally, its main founding office and headquarters is in Delhi and it is due to this foothold. A&A corporate lawyer in India has played a vital role in providing advice to the government on various legal and policy-related issues and is amongst the few corporate law firms in India to have the experience and optimal understanding of interpretation and drafting of policy matters.
                                  </p>
                                <h2 class="heading" data-aos-once="true" data-aos="fade-up">
                                    Client-Centric Approach
                                </h2>
                                  <p class="desc" data-aos-once="true" data-aos="fade-up">
                                    A&A adopts an approach that demands the highest levels of knowledge, technical skill and service delivery allowing us to provide accurate, reliable, timely, and cost-effective advice while maintaining international standards of excellence and create a bespoke approach for every client and their business. Our commercial law solicitors unique perspective of working on our client’s matters as a critical part of their team allows us to address their problems like our own. We believe that each client comes with different requirements and concerns – and we work tirelessly to achieve their goals and pursue their objectives.
                                  </p>
                                <h2 class="heading" data-aos-once="true" data-aos="fade-up">
                                    Cost-Efficient
                                </h2>
                                  <p class="desc" data-aos-once="true" data-aos="fade-up">
                                    We make sure that our fee structure and the legal costs involved are very transparent and predictable for our clients. We believe that client relationships are based on trust and a sense of common purpose and we never falter on our promise making us one of the best corporate law firms in India. Our priority has been to deliver the best legal & business solutions and our fee arrangements are tailored to the needs of the client, the client’s goals, and the nature of the matter.
                                  </p>
                            </div>
                        </div>
                    </div>

                    @php $b = 1; @endphp

                    @endif

                    @if(!empty(json_decode($detail->faq, true)))

                    <div class="tab-pane fade @if($b != 1) show active @endif" id="pills-contact" role="tabpanel"
                        aria-labelledby="pills-contact-tab">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 class="heading3 mb-3" data-aos-once="true" data-aos="fade-up">
                                    Frequently Asked Questions
                                </h2>
                                <ol>

                                    @php
                                    $faqArray = json_decode($detail->faq, true);

                                    if (is_array($faqArray)) {
                                    foreach ($faqArray as $faqItem) {
                                    foreach ($faqItem as $question => $answer) {
                                    @endphp

                                    <li class="mb-4 mt-4" data-aos-once="true" data-aos="fade-up">
                                        <h3>
                                            <strong>{{ $question }}</strong>
                                        </h3>
                                        @php echo html_entity_decode($answer) @endphp
                                    </li>

                                    @php
                                    }
                                    }
                                    }
                                    @endphp

                                </ol>
                            </div>
                        </div>
                    </div>

                    @endif

                </div>
            </div>
        </div>
    </div>
</section>
@endif

<!-- -------------------- service why choose  end ---------------------- -->

<!-- -------------------- service related start ---------------------- -->
@if(count($blog) > 0)
<section class="service_related">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="heading text-center" data-aos-once="true" data-aos="fade-up">
                    Related Articles
                </h1>
            </div>

            @foreach ($blog as $row)

            <div class="col-md-4">
                <div class="blog_big_box" data-aos-once="true" data-aos="fade-up">
                    <img src="{{ asset('storage/' . $row->main_image) }}" alt="" class="blog_img" />
                    <div class="blog_content">
                        <p>{{ $row->short_description }}</p>
                        <a
                            href="{{ url(route('blog.detail', ['category' => 'blog', 'slug' => strtolower(str_replace(' ', '-',$row->slug))] )) }}">View
                            More</a>
                    </div>
                </div>
            </div>

            @endforeach

        </div>
    </div>
</section>
@endif

<!-- -------------------- service related  end ---------------------- -->
<!-- -------------------- service get in touch  start ---------------------- -->

@include('frontend.component.get_in_touch')

<!-- -------------------- service get in touch  end ---------------------- -->

<!------------------ awards_section Start -------------------------->
@include('frontend.component.awards')
<!------------------ awards_section End -------------------------->

<!-------===========practicearea end===================------------>
@endsection