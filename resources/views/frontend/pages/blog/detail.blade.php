@extends('frontend.layouts.app')

@section('page.content')

<!-------================ blog detail start ============ ------------>


<!-- -------------------- blog details banner start ---------------- -->

<section class="blog_details_page_banner" style="background-image: url({{ asset('storage/' . $detail->main_image) }});"></section>

<!-- -------------------- blog details banner end   ---------------- -->

<!-- -------------------- blog details breadcrumb start ---------------- -->

<section class="blog_details_page_breadcrumb">
    <div class="container">
        <div class="row">
          <div class="col-md-6">
            <ul class="d-flex align-items-center gap-3 list-unstyled" data-aos="fade-up"
              data-aos-once="true"  >
              <li>Home</li>
              <li>></li>
              <li>{{ $detail->title }}</li>
            </ul>
          </div>
          <div class="col-md-6">
            <div class="d-flex align-items-center justify-content-end gap-4">
              <p class="d-flex align-items-center gap-2 author" data-aos="fade-up"
              data-aos-once="true">
                <img src="/assets/frontend/images/author.png" alt="" />
                <span>{{ $author->name }}</span>
              </p>
              <p class="d-flex align-items-center gap-2 author" data-aos="fade-up"
              data-aos-once="true" >
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
          @php echo html_entity_decode($detail->content) @endphp
        </div>
      </div>
    </section>

<!-- -------------------- blog details Title end   ---------------- -->

<!-- -------------------- blog details social start ---------------- -->

<section class="blog_details_social pt-0">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="category d-flex align-items-center gap-5">
                    
                    <span data-aos="fade-up" data-aos-once="true">agency</span>
                    <span data-aos="fade-up" data-aos-once="true">corporate</span>
                    <span data-aos="fade-up" data-aos-once="true">digital</span>

                </div>
            </div>
            <div class="col-md-6">
                <div class="icons d-flex align-items-center justify-content-end gap-3 mt-2">
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
            <div class="col-md-1">
                <div class="avatar" data-aos="fade-up" data-aos-once="true">
                    <img src="/assets/frontend/images/profile.png" alt="" />
                </div>
            </div>
            <div class="col-md-9">
                <p class="name" data-aos="fade-up" data-aos-once="true">Riva Collins</p>
                <p class="date" data-aos="fade-up" data-aos-once="true">November 19, 2019 at 11:00 am</p>
                <p class="comment" data-aos="fade-up" data-aos-once="true">
                    It’s no secret that the digital industry is booming. From exciting
                    startups to need ghor global and brands, companies are reaching
                    out.
                </p>
            </div>
            <div class="col-md-1">
                <button data-aos="fade-up" data-aos-once="true">Reply</button>
            </div>
            <div class="col-md-12">
                <h1 class="post_heading" data-aos="fade-up" data-aos-once="true">Post A Comment</h1>
                <p class="post_comment" data-aos="fade-up" data-aos-once="true">
                    Your email address will not be published *
                </p>
                <button data-aos="fade-up" data-aos-once="true">Post Comment</button>
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
 
            <div class="col-md-4">
                <div class="blog_big_box" data-aos="fade-up" data-aos-once="true">
                    <img src="{{ asset('storage/' . $row->main_image) }}" alt="" class="blog_img" />
                    <div class="blog_content">
                        <p>{{ $row->short_description }}</p>
                        <a href="{{ url(route('blog.detail', ['slug' => strtolower(str_replace(' ', '-',$row->slug))] )) }}">View More</a>
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


<!----------========= blog detail end ========== ------------------->

@endsection