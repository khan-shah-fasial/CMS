@extends('frontend.layouts.app')

@section('page.content')


    <!-- -------------------- faq banner start ---------------- -->

    <section class="faq_page_banner mt105 breadcrumes_padd">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="text-center">
              <h1 class="heading">Faq</h1>
              <nav
                aria-label="breadcrumb"
                class="breadcrumb d-flex justify-content-center mb-0"
              >
                <ol class="breadcrumb mb-0">
                  <li class="breadcrumb-item home">
                    <a href="#">Home</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Faq
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- -------------------- faq banner end   ---------------- -->
    <!-- -------------------- faq accordion start ---------------- -->

    <section class="faq_page_accordion">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 padd00mb">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Do I need a lawyer to start a business? Can’t my chartered
                    accountant handle everything?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div
                    class="accordion-body"
                  >
                    More often than not, a person/company is made to believe
                    that the accountant can draft the incorporation documents
                    and do all the necessary filings. However, in our experience
                    most companies come to us after they realise that the
                    accountant has failed to or missed drafting an essential
                    clause due to which the company faces penalties or their
                    rights have been protected properly.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Do I need to get my tradename registered?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    More often than not, a person/company is made to believe
                    that the accountant can draft the incorporation documents
                    and do all the necessary filings. However, in our experience
                    most companies come to us after they realise that the
                    accountant has failed to or missed drafting an essential
                    clause due to which the company faces penalties or their
                    rights have been protected properly.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How important is it to protect my intellectual property?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    More often than not, a person/company is made to believe
                    that the accountant can draft the incorporation documents
                    and do all the necessary filings. However, in our experience
                    most companies come to us after they realise that the
                    accountant has failed to or missed drafting an essential
                    clause due to which the company faces penalties or their
                    rights have been protected properly.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    How important is it to protect my intellectual property?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    More often than not, a person/company is made to believe
                    that the accountant can draft the incorporation documents
                    and do all the necessary filings. However, in our experience
                    most companies come to us after they realise that the
                    accountant has failed to or missed drafting an essential
                    clause due to which the company faces penalties or their
                    rights have been protected properly.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Should I invest in real estate? What are my other options?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    More often than not, a person/company is made to believe
                    that the accountant can draft the incorporation documents
                    and do all the necessary filings. However, in our experience
                    most companies come to us after they realise that the
                    accountant has failed to or missed drafting an essential
                    clause due to which the company faces penalties or their
                    rights have been protected properly.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- -------------------- faq accordion end   ---------------- -->

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

@endsection