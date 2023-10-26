@extends('frontend.layouts.app')

@section('page.content')



    <!-- -------------------- career banner start ---------------- -->

    <section class="career_page_banner mt105">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="text-center">
              <h1 class="heading">Career</h1>
              <nav
                aria-label="breadcrumb"
                class="breadcrumb d-flex justify-content-center mb-0"
              >
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
          <div class="col-md-12">
            <p class="desc mb-4" data-aos-once="true" data-aos="fade-up">
              <strong>Lawyer/ Assessment Trainees</strong> – To apply, please
              send us an email with your name, PQE and field of law that you
              wish to apply for, in <br />
              the subject line along with your CV at
              <a href="#"><em>careers@ahlawatassociates.in</em></a>
            </p>
            <p class="desc mb-4" data-aos-once="true" data-aos="fade-up">
              <strong>
                Internship – To apply for an internship position, please follow
                these steps:
              </strong>
            </p>
            <ol>
              <li>
                <span
                  class="d-flex flex-column"
                  data-aos-once="true"
                  data-aos="fade-up"
                >
                  <span class="mb-2"
                    >Submit Your CV: Send your updated CV to
                    <a href="#">careers@ahlawatassociates.in.</a> Make sure to
                    highlight your academic achievements, <br />
                    relevant skills, and any previous legal experience.</span
                  >
                  <span data-aos-once="true" data-aos="fade-up">
                    <button class="career_button">Submit your CV</button>
                  </span>
                </span>
              </li>
              <li>
                <span class="d-flex flex-column">
                  <span class="mb-3" data-aos-once="true" data-aos="fade-up">
                    <strong>
                      Along with your CV, please provide the following
                      information:
                    </strong>
                  </span>
                  <span class="mb-3" data-aos-once="true" data-aos="fade-up">
                    <strong>Educational Qualification:</strong> Specify your
                    highest level of education completed.
                  </span>
                  <span class="mb-3" data-aos-once="true" data-aos="fade-up">
                    <strong>Year of Completion:</strong> Mention the year in
                    which you completed your education.
                  </span>
                  <span class="mb-3" data-aos-once="true" data-aos="fade-up">
                    <strong>Current Year of Study:</strong> Indicate your
                    current academic year or level of study.
                  </span>
                  <span class="mb-3" data-aos-once="true" data-aos="fade-up">
                    <strong>Preferred Month for Internship:</strong> Let us know
                    when you would like to start your internship with us.Note:
                    Due to the high volume of applications we receive, only
                    shortlisted candidates will be contacted for further
                    evaluation.
                  </span>
                  <span class="mb-3" data-aos-once="true" data-aos="fade-up">
                    Note: Due to the high volume of applications we receive,
                    only shortlisted candidates will be contacted for further
                    evaluation.
                  </span>
                  <span class="mb-3" data-aos-once="true" data-aos="fade-up">
                    <strong>Support Staff –</strong> We value support staff and
                    consider them an integral part of A&A. If you are interested
                    in joining the A&A team, in whichever capacity, please email
                    on
                    <strong
                      ><a href="#"
                        ><em>admin@ahlawatassociates.in</em></a
                      ></strong
                    >
                    with your details.
                  </span>
                </span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <!-- -------------------- career content end   ---------------- -->

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