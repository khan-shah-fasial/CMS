@extends('frontend.layouts.app')

@section('page.content')


<!-------===========practicearea start===================------------>
    <!-- -------------------- service_banner start ---------------------- -->

    <section class="service_banner mt105" style="background-image: url({{ asset('storage/' . $detail->breadcrumb_image) }});">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="text-center">
              <h1 class="heading">{{ $detail->breadcrumb_title }}</h1>
              <p class="desc">{{ $detail->breadcrumb_subtitle }}</p>
              <nav
                aria-label="breadcrumb"
                class="breadcrumb d-flex justify-content-center mb-0"
              >
                <ol class="breadcrumb mb-0">
                  <li class="breadcrumb-item home"><a href="{{ url(route('index')) }}">Home</a></li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Practice Area
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
          <div class="col-md-12">
            @php echo html_entity_decode($detail->content) @endphp
          </div>
        </div>
      </div>
    </section>

    <!-- --------------------  service Title Desc  end ---------------------- -->
    <!-- -------------------- service image start ---------------------- -->

    {{-- <section
      class="service_img"
      data-aos-once="true"
      data-aos="fade-up"
    ></section> --}}

    <!-- -------------------- service image  end ---------------------- -->
    <!-- -------------------- service counter start ---------------------- -->

    <section class="counter_section">
      <div class="container">
        <div class="row">
          <div class="col-md-12" id="counter">
            <div class="row">
              <div class="col-md-3">
                <div
                  class="about_counter_container"
                  data-aos-once="true"
                  data-aos="fade-up"
                >
                  <div class="about_right_counter d-flex">
                    <div class="about_counter_icon">
                      <div class="about_counter_img">
                        <img
                          src="/assets/frontend/images/trusted_icon.png"
                          alt="counter 1"
                          class="mb-4"
                        />
                      </div>
                    </div>
                    <div class="about_counter">
                      <p class="about_counter_number">
                        <span class="counter-value" data-count="23">0</span>k
                      </p>
                      <p class="about_counter_para">Trusted Clients</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 second_counter">
                <div
                  class="about_counter_container"
                  data-aos-once="true"
                  data-aos="fade-up"
                >
                  <div
                    class="about_right_counter"
                    data-aos="fade-up"
                    data-aos-once="true"
                  >
                    <div class="about_counter_icon">
                      <div class="about_counter_img">
                        <img
                          src="/assets/frontend/images/recovered_icons.png"
                          alt="counter 1"
                          class="mb-4"
                        />
                      </div>
                    </div>
                    <div class="about_counter">
                      <p class="about_counter_number">
                        <span class="counter-value" data-count="162">0</span>k
                      </p>
                      <p class="about_counter_para">Recovered Clients</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 third_counter">
                <div
                  class="about_counter_container"
                  data-aos-once="true"
                  data-aos="fade-up"
                >
                  <div
                    class="about_right_counter aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-once="true"
                  >
                    <div class="about_counter_icon">
                      <div class="about_counter_img">
                        <img
                          src="/assets/frontend/images/certified_icons.png"
                          alt="counter 1"
                          class="mb-4"
                        />
                      </div>
                    </div>
                    <div class="about_counter">
                      <p class="about_counter_number">
                        <span class="counter-value" data-count="90">0</span>%
                      </p>
                      <p class="about_counter_para">Special Cases</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div
                  class="about_counter_container"
                  data-aos-once="true"
                  data-aos="fade-up"
                >
                  <div
                    class="about_right_counter aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-once="true"
                  >
                    <div class="about_counter_icon">
                      <div class="about_counter_img">
                        <img
                          src="/assets/frontend/images/law_icons.png"
                          alt="counter 1"
                          class="mb-4"
                        />
                      </div>
                    </div>
                    <div class="about_counter">
                      <p class="about_counter_number">
                        <span class="counter-value" data-count="115">0</span>k
                      </p>
                      <p class="about_counter_para">Personal Injury Cases</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- -------------------- service counter  end ---------------------- -->

    <!-- -------------------- service why choose start ---------------------- -->

    <section class="service_why_choose">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">

            @if(!empty($child_detail))

              <li
                class="nav-item"
                role="presentation"
                data-aos-once="true"
                data-aos="fade-up"
              >
                <button
                  class="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Our Focus Are
                </button>
              </li>

            @endif

              <li
                class="nav-item"
                role="presentation"
                data-aos-once="true"
                data-aos="fade-up"
              >
                <button
                  class="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Why Choose Us
                </button>
              </li>
              <li
                class="nav-item"
                role="presentation"
                data-aos-once="true"
                data-aos="fade-up"
              >
                <button
                  class="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  FAQ
                </button>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">

            @if(!empty($child_detail))

              <div
                class="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div class="row">
                  <div class="col-md-12">
                    <h2 class="heading" data-aos-once="true" data-aos="fade-up">
                      Our Focus Area
                    </h2>
                    <p
                      class="desc mb-5"
                      data-aos-once="true"
                      data-aos="fade-up"
                    >
                    {{ $detail->focus_area }}
                    </p>
                  </div>

                  @foreach($child_detail as $row)

                    <div class="col-md-4" data-aos-once="true" data-aos="fade-up">
                      <div class="practice_box m-0">
                        <div class="visible_box">
                          <img src="{{ asset('storage/' . $detail->thumnail_image) }}" alt="" />
                          <h1>{{ $row->title }}</h1>
                        </div>
                        <div class="hover_box">
                          <p>
                            {{ $row->short_description }}
                          </p>
                          <a href="#"
                            >Read More <img src="/assets/frontend/images/right.png" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>

                  @endforeach

                </div>
              </div>

            @endif

              <div
                class="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div class="row">
                  <div class="col-md-12">
                    @php echo html_entity_decode($detail->why_choose_us) @endphp
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                <div class="row">
                  <div class="col-md-12">
                    <h2 class="heading" data-aos-once="true" data-aos="fade-up">
                      Frequently Asked Questions
                    </h2>
                    <ol>

                      @php 
                        $faqArray = json_decode($detail->faq, true);

                        if (is_array($faqArray)) {
                          foreach ($faqArray as $faqItem) {
                              foreach ($faqItem as $question => $answer) {
                      @endphp

                      <li class="mb-5" data-aos-once="true" data-aos="fade-up">
                        <p>
                          {{ $question }}
                        </p>
                          {{ $answer }}
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
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- -------------------- service why choose  end ---------------------- -->

    <!-- -------------------- service related start ---------------------- -->

    <section class="service_related">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1
              class="heading text-center"
              data-aos-once="true"
              data-aos="fade-up"
            >
              Related Articles
            </h1>
          </div>
          <div class="col-md-4">
            <div class="blog_big_box" data-aos-once="true" data-aos="fade-up">
              <img src="/assets/frontend/images/blog_1.png" alt="" class="blog_img" />
              <div class="blog_content">
                <p>Dior call Jennifer campaign backlash ‘not all justified’.</p>
                <a href="#">View More</a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="blog_big_box" data-aos-once="true" data-aos="fade-up">
              <img src="/assets/frontend/images/blog_6.png" alt="" class="blog_img" />
              <div class="blog_content">
                <p>Dior call Jennifer campaign backlash ‘not all justified’.</p>
                <a href="#">View More</a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="blog_big_box" data-aos-once="true" data-aos="fade-up">
              <img src="/assets/frontend/images/blog_7.png" alt="" class="blog_img" />
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

<!-------===========practicearea end===================------------>
@endsection