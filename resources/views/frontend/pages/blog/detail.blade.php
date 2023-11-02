@extends('frontend.layouts.app')

@section('page.content')

<!-------================ blog detail start ============ ------------>


<!-- -------------------- blog details banner start ---------------- -->

<section class="blog_details_page_banner" style="background-image: url({{ asset('storage/' . $detail->main_image) }});">
</section>

<!-- -------------------- blog details banner end   ---------------- -->

<!-- -------------------- blog details breadcrumb start ---------------- -->

<section class="blog_details_page_breadcrumb">
    <div class="container">
        <div class="row">
            <div class="col-md-6 px0">
                <ul class="d-flex align-items-center gap-3 list-unstyled" data-aos="fade-up" data-aos-once="true">
                    <li>Home</li>
                    <li>></li>
                    <li>{{ $detail->title }}</li>
                </ul>
            </div>
            <div class="col-md-6 px0">
                <div class="d-flex align-items-center justify-content-md-end gap-4">
                    <p class="d-flex align-items-center gap-2 author" data-aos="fade-up" data-aos-once="true">
                        <img src="/assets/frontend/images/author.png" alt="" />
                        <span>{{ $author->name }}</span>
                    </p>
                    <p class="d-flex align-items-center gap-2 author" data-aos="fade-up" data-aos-once="true">
                        <img src="/assets/frontend/images/calender.png" alt="" />
                        <span>{{ $detail->created_at->format('F j, Y') }}</span>
                    </p>
                </div>
            </div>
        </div>
</section>

<!-- -------------------- blog details breadcrumb end   ---------------- -->

<!-- -------------------- blog details Title start ---------------- -->

<section class="blog_details_page_title_desc pt-0">
    <div class="container">
        <div class="row">
            <div class="col-md-12 px0">
                <h1>{{ $detail->title }}</h1>
                @php echo html_entity_decode($detail->content) @endphp
            </div>

        </div>
    </div>
</section>

<!-- -------------------- blog details Title end   ---------------- -->

<!-- -------------------- blog details social start ---------------- -->

<section class="blog_details_social pt-0">
    <div class="container">
        <div class="row">
            <div class="col-md-6 px0">
                <div class="category d-flex align-items-center gap-md-5 gap-2">

                    <span data-aos="fade-up" data-aos-once="true">agency</span>
                    <span data-aos="fade-up" data-aos-once="true">corporate</span>
                    <span data-aos="fade-up" data-aos-once="true">digital</span>

                </div>
            </div>
            <div class="col-md-6 px0">
                <div class="icons d-flex align-items-center justify-content-end gap-3 mt-md-2 mt-4">
                    <img src="/assets/frontend/images/icon_1.png" alt="" data-aos="fade-up" data-aos-once="true" />
                    <img src="/assets/frontend/images/icon_2.png" alt="" data-aos="fade-up" data-aos-once="true" />
                    <img src="/assets/frontend/images/icon_3.png" alt="" data-aos="fade-up" data-aos-once="true" />
                    <img src="/assets/frontend/images/icon_4.png" alt="" data-aos="fade-up" data-aos-once="true" />
                </div>
            </div>
        </div>
    </div>
</section>

<!-- -------------------- blog details social end   ---------------- -->

<!-- -------------------- blog details buttons start ---------------- -->

<section class="blog_details_page_buttons">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="buttons d-flex align-items-center justify-content-between">
                    <button data-aos="fade-up" data-aos-once="true">
                        << Previous Post</button>
                            <button data-aos="fade-up" data-aos-once="true">Next Post >></button>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- -------------------- blog details buttons end   ---------------- -->
<!-- -------------------- blog details comments start ---------------- -->

<section class="blog_details_page_comments">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="heading" data-aos="fade-up" data-aos-once="true">Comments</h1>
            </div>
            <div class="col-xl-1 col-lg-2 ">
                <div class="avatar mb-lg-0 mb-2" data-aos="fade-up" data-aos-once="true">
                    <img src="/assets/frontend/images/profile.png" alt="" />
                </div>
            </div>
            <div class="col-xl-9  col-lg-10">
                <p class="name" data-aos="fade-up" data-aos-once="true">Riva Collins</p>
                <p class="date" data-aos="fade-up" data-aos-once="true">November 19, 2019 at 11:00 am</p>
                <p class="comment" data-aos="fade-up" data-aos-once="true">
                    It’s no secret that the digital industry is booming. From exciting
                    startups to need ghor global and brands, companies are reaching
                    out.
                </p>
            </div>
            <div class="col-xl-2 mb-xl-0 mb-4">
                <button data-aos="fade-up" data-aos-once="true">Reply</button>
            </div>
            <div class="col-md-12 mt-md-0 mt-4">
                <h1 class="post_heading" data-aos="fade-up" data-aos-once="true">Post A Comment</h1>
                <p class="post_comment" data-aos="fade-up" data-aos-once="true">
                    Your email address will not be published *
                </p>
                <button type="button" data-bs-toggle="modal" data-bs-target="#comment" data-aos="fade-up"
                    data-aos-once="true">Post Comment</button>
            </div>
        </div>
    </div>
</section>

<!-- -------------------- blog details comments end   ---------------- -->

<!-- -------------------- service related start ---------------------- -->

<section class="service_related">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="heading mb-4" data-aos="fade-up" data-aos-once="true">Related Blogs</h1>
            </div>

            @foreach ($blog as $row)

            <div class="col-lg-4 col-md-6 px0 mb-3">
                <div class="blog_big_box" data-aos="fade-up" data-aos-once="true">
                    <img src="{{ asset('storage/' . $row->main_image) }}" alt="" class="blog_img" />
                    <div class="blog_content">
                        <p>{{ $row->short_description }}</p>
                        <a
                            href="{{ url(route('blog.detail', ['category' =>'blog', 'slug' => strtolower(str_replace(' ', '-',$row->slug))] )) }}">View
                            More</a>
                    </div>
                </div>
            </div>

            @endforeach

        </div>
    </div>
</section>

<!-- -------------------- service related  end ---------------------- -->

<!-- ---------- service get in touch  start ---------------------- -->

@include('frontend.component.get_in_touch')

<!-- -------------- service get in touch  end ---------------------- -->

<!------------------ awards_section Start -------------------------->
@include('frontend.component.awards')
<!------------------ awards_section End -------------------------->


<div class="modal fade" id="comment" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body ">
                <div class="career_popup_form">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <form class="contact_form">
                        <h3 data-aos-once="true" data-aos="fade-up">Want to know more</h3>
                        <div class="d-flex align-items-center gap-3 mb-3">
                            <textarea placeholder="Write your thoughts..." rows="10"></textarea>
                        </div>
                        <div class="d-flex align-items-center gap-3 mb-3">
                            <input type="text" placeholder="Name" data-aos-once="true" data-aos="fade-up" />
                            <input type="text" placeholder="Email" data-aos-once="true" data-aos="fade-up" />
                            <input type="text" placeholder="Phone No" data-aos-once="true" data-aos="fade-up" />
                        </div>

                        <div class="text-center mt-4">
                            <button class="contact_form_button" data-aos-once="true" data-aos="fade-up">SEND</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>
</div>


<!----------========= blog detail end ========== ------------------->

@endsection