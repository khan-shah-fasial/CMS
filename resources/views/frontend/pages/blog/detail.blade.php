@extends('frontend.layouts.app')

@section('page.content')

<!-------================ blog detail start ============ ------------>


<!-- -------------------- blog details banner start ---------------- -->

    <section class="blog_details_page_banner mt105" style="background-image: url({{ asset('storage/' . $detail->main_image) }});"></section>

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
                <span>{{ $detail->created_at }}</span>
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

    <section class="blog_details_social">
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
            <div
              class="icons d-flex align-items-center justify-content-end gap-3 mt-2"
            >
              <img src="/assets/frontend/images/icon_1.png" alt=""  data-aos="fade-up" data-aos-once="true"/>
              <img src="/assets/frontend/images/icon_2.png" alt="" data-aos="fade-up" data-aos-once="true" />
              <img src="/assets/frontend/images/icon_3.png" alt=""  data-aos="fade-up" data-aos-once="true"/>
              <img src="/assets/frontend/images/icon_4.png" alt=""  data-aos="fade-up" data-aos-once="true"/>
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
            <div
              class="buttons d-flex align-items-center justify-content-between"
            >
              <button data-aos="fade-up" data-aos-once="true" ><< Previous Post</button>
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
            <h1 class="heading" data-aos="fade-up" data-aos-once="true" >Comments</h1>
          </div>
          <div class="col-md-1">
            <div class="avatar" data-aos="fade-up" data-aos-once="true" >
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
            <h1 class="heading" data-aos="fade-up" data-aos-once="true">Related Blogs</h1>
          </div>
          <div class="col-md-4">
            <div class="blog_big_box" data-aos="fade-up" data-aos-once="true">
              <img src="/assets/frontend/images/blog_1.png" alt="" class="blog_img" />
              <div class="blog_content">
                <p>Dior call Jennifer campaign backlash ‘not all justified’.</p>
                <a href="#">View More</a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="blog_big_box" data-aos="fade-up" data-aos-once="true">
              <img src="/assets/frontend/images/blog_2.png" alt="" class="blog_img" />
              <div class="blog_content">
                <p>Dior call Jennifer campaign backlash ‘not all justified’.</p>
                <a href="#">View More</a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="blog_big_box" data-aos="fade-up" data-aos-once="true">
              <img src="/assets/frontend/images/blog_2.png" alt="" class="blog_img" />
              <div class="blog_content">
                <p>Dior call Jennifer campaign backlash ‘not all justified’.</p>
                <a href="#">View More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- -------------------- service related  end ---------------------- -->

    <!-- -------------------- service get in touch  start ---------------------- -->

    <section class="service_get_in_touch">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="text-center">
              <h1 class="heading" data-aos-once="true" data-aos="fade-up">
                GET IN TOUCH WITH US TODAY
              </h1>
              <p class="desc" data-aos-once="true" data-aos="fade-up">
                We can be reached at
              </p>
              <a
                href="#"
                class="d-flex align-items-center justify-content-center gap-2"
                data-aos-once="true"
                data-aos="fade-up"
              >
                <span><img src="/assets/frontend/images/phone.png" alt="" /></span>
                <span>011-41023400</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- -------------------- service get in touch  end ---------------------- -->

    <!------------------ awards_section Start -------------------------->
    <section class="awards_section about_bg">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div
              class="underline_heading d-flex align-items-center justify-content-center"
            >
              <h6
                class="main_heading text-center"
                data-aos-once="true"
                data-aos="fade-up"
              >
                Awards
              </h6>
            </div>
            <h2 class="heading" data-aos-once="true" data-aos="fade-up">
              Awards & Recognitions
            </h2>
            <p class="desc" data-aos="fade-up" data-aos-once="true">
                The man, who is in a stable condition in hospital, has "potentially
                life-changing injuries" after the overnight attack in Garvagh,
                County Londonderry. He was shot in the arms and legs."What sort of
                men would think it is acceptable to subject a young girl to this
                level of brutality and violence?
            </p>
            <p class="desc" data-aos="fade-up" data-aos-once="true">
                "Every child has the right to feel safe and protected in their own
                home - how is this poor child going to sleep tonight or in coming
                nights? What are the long term effects on her going to be?"
            </p>
            <p class="desc" data-aos="fade-up" data-aos-once="true">
                "It's quite obvious the hypocrites who carried out this dreadful
                attack don't care at all about the children in their community. I
                wonder how they would feel if their own child witnessed such a level
                of violence?
            </p>
            <p class="desc" data-aos="fade-up" data-aos-once="true">
                "There is absolutely no justification for an attack like this in our
                communities and we must all work together to bring those responsible
                to justice and to stop this from happening to another child."
            </p>
            <p class="desc mb-5" data-aos="fade-up" data-aos-once="true">
                Earlier this month, the PSNI launched a hard-hitting advertisement
                campaign aimed at changing public attitudes to paramilitary attacks.
            </p>
            <div class="testimonial">
                <div class="img_container">
                    <span>"</span>
                </div>
                <div class="d-flex align-items-center justify-content-center text">
                    <p data-aos="fade-up" data-aos-once="true">
                        What sort of men would think it is acceptable to subject a young
                        girl to this level of brutality and violence? an attack like
                        this in ourcommunities and we must all work together.
                    </p>
                </div>
            </div>
            <h2 class="heading" data-aos="fade-up" data-aos-once="true">A Kentucky woman who was accused last year.</h2>
            <p class="desc" data-aos="fade-up" data-aos-once="true">
                The intruders chased the girl in the house and threatened her when
                she hid from them, according to the PSNI Limavady Facebook page.
            </p>
            <p class="desc" data-aos="fade-up" data-aos-once="true">
                "She came out petrified with her Piggy Bank, HER PIGGY BANK! hoping
                that the men would take it and leave her dad alone," one outraged
                officer wrote.
            </p>
            <p class="desc" data-aos="fade-up" data-aos-once="true">
                The intruders chased the girl in the house and threatened her when
                she hid from them, according to the PSNI Limavady Facebook page.
            </p>
            <p class="desc" data-aos="fade-up" data-aos-once="true">
                "She came out petrified with her Piggy Bank, HER PIGGY BANK! hoping
                that the men would take it and leave her dad alone," one outraged
                officer wrote.
            </p>
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
            <div class="col-md-4">
                <div class="blog_big_box" data-aos="fade-up" data-aos-once="true">
                    <img src="/assets/frontend/images/blog_1.png" alt="" class="blog_img" />
                    <div class="blog_content">
                        <p>Dior call Jennifer campaign backlash ‘not all justified’.</p>
                        <a href="#">View More</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="blog_big_box" data-aos="fade-up" data-aos-once="true">
                    <img src="/assets/frontend/images/blog_2.png" alt="" class="blog_img" />
                    <div class="blog_content">
                        <p>Dior call Jennifer campaign backlash ‘not all justified’.</p>
                        <a href="#">View More</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="blog_big_box" data-aos="fade-up" data-aos-once="true">
                    <img src="/assets/frontend/images/blog_2.png" alt="" class="blog_img" />
                    <div class="blog_content">
                        <p>Dior call Jennifer campaign backlash ‘not all justified’.</p>
                        <a href="#">View More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- -------------------- service related  end ---------------------- -->

<!-- ---------- service get in touch  start ---------------------- -->

<section class="service_get_in_touch">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="text-center">
                    <h1 class="main_heading" data-aos-once="true" data-aos="fade-up">
                        GET IN TOUCH WITH US TODAY
                    </h1>
                    <p class="desc" data-aos-once="true" data-aos="fade-up">
                        We can be reached at
                    </p>
                    <a href="#" class="d-flex align-items-center justify-content-center gap-2" data-aos-once="true"
                        data-aos="fade-up">
                        <span><img src="/assets/frontend/images/phone.png" alt="" /></span>
                        <span>011-41023400</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- -------------- service get in touch  end ---------------------- -->

<!------------------ awards_section Start -------------------------->
<section class="awards_section about_bg">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="underline_heading d-flex align-items-center justify-content-center">
                    <h6 class="main_heading text-center" data-aos-once="true" data-aos="fade-up">
                        Awards
                    </h6>
                </div>
                <h2 class="main_heading text-center mb-4" data-aos-once="true" data-aos="fade-up">
                    Awards & Recognitions
                </h2>

                <div class="owl-carousel owl-theme" id="awards_slider">
                    <div class="item">
                        <div class="awards_box">
                            <h4>Top FDI Law Firm By</h4>
                            <img src="/assets/frontend/images/top_fdi.png" />
                        </div>
                    </div>

                    <div class="item">
                        <div class="awards_box">
                            <h4>India Firms to Watch by</h4>
                            <img src="/assets/frontend/images/asian_legal.png" />
                        </div>
                    </div>

                    <div class="item">
                        <div class="awards_box">
                            <h4>Recommended Firm by</h4>
                            <img src="/assets/frontend/images/benchmark.png" />
                        </div>
                    </div>

                    <div class="item">
                        <div class="awards_box">
                            <h4>M&A Law Firm by</h4>
                            <img src="/assets/frontend/images/pac.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!------------------ awards_section End -------------------------->


<!----------========= blog detail end ========== ------------------->

@endsection