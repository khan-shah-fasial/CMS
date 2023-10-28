@extends('frontend.layouts.app')

@section('page.content')


<!-------===========practicearea list start===================------------>

    <section class="faq_page_banner mt105">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="text-center">
              <h1 class="heading">Practice Area</h1>
              <nav
                aria-label="breadcrumb"
                class="breadcrumb d-flex justify-content-center mb-0"
              >
                <ol class="breadcrumb mb-0">
                  <li class="breadcrumb-item home">
                    <a href="#">Home</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Practice Area
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ------------------- practice area box start ---------------- -->
    <section class="practice_w_box">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div
              class="practice_w_card d-flex align-items-center justify-content-center m-4"
            >
              <img src="/assets/frontend/images/p_1.png" alt="" class="mb-5" />
              <h1 class="heading">Setting Up In India</h1>
            </div>
          </div>
          <div class="col-md-4">
            <div
              class="practice_w_card d-flex align-items-center justify-content-center m-4"
            >
              <img src="/assets/frontend/images/p_1.png" alt="" class="mb-5" />
              <h1 class="heading">Setting Up In India</h1>
            </div>
          </div>
          <div class="col-md-4">
            <div
              class="practice_w_card d-flex align-items-center justify-content-center m-4"
            >
              <img src="/assets/frontend/images/p_1.png" alt="" class="mb-5" />
              <h1 class="heading">Setting Up In India</h1>
            </div>
          </div>
          <div class="col-md-4">
            <div
              class="practice_w_card d-flex align-items-center justify-content-center m-4"
            >
              <img src="/assets/frontend/images/p_1.png" alt="" class="mb-5" />
              <h1 class="heading">Setting Up In India</h1>
            </div>
          </div>
          <div class="col-md-4">
            <div
              class="practice_w_card d-flex align-items-center justify-content-center m-4"
            >
              <img src="/assets/frontend/images/p_1.png" alt="" class="mb-5" />
              <h1 class="heading">Setting Up In India</h1>
            </div>
          </div>
          <div class="col-md-4">
            <div
              class="practice_w_card d-flex align-items-center justify-content-center m-4"
            >
              <img src="/assets/frontend/images/p_1.png" alt="" class="mb-5" />
              <h1 class="heading">Setting Up In India</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ------------------- practice area box end ---------------- -->

        <!-- ---------- service get in touch  start ---------------------- -->

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
    
        <!-- -------------- service get in touch  end ---------------------- -->
    
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