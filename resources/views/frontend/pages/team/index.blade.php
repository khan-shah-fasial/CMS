@extends('frontend.layouts.app')

@section('page.content')

<!-------=================== Team start ======================----------->

    <!-- ---------------------- Team Banner start -------------------- -->

    <section class="team_banner mt105">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="text-center">
              <h1 class="heading">Team Members</h1>
              <p class="desc">
                Dedicated To Solving The Most Complex Challenges
              </p>
              <nav
                aria-label="breadcrumb"
                class="breadcrumb d-flex justify-content-center mb-0"
              >
                <ol class="breadcrumb mb-0">
                  <li class="breadcrumb-item home"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Team Members
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ---------------------- Team Banner end -------------------- -->
    <!-- ---------------------- Team Card start -------------------- -->

  <section class="team_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="team_box">
              <img
                src="/assets/frontend/images/team_4.png"
                alt=""
                data-aos="fade-up"
                data-aos-once="true"
              />
              <p class="name" data-aos="fade-up" data-aos-once="true">
                Mrs. Avnish Ahlawat
              </p>
              <p class="role">Founding Partner</p>
              <hr />
              <p class="bio" data-aos="fade-up" data-aos-once="true">
                Litigation & Dispute Resolution Employment & Labour Law
              </p>
              <a href="{{ url(route('team.detail')) }}" data-aos="fade-up" data-aos-once="true"
                >View Profile</a
              >
            </div>
          </div>
          <div class="col-md-3">
            <div class="team_box">
              <img
                src="/assets/frontend/images/team_5.png"
                alt=""
                data-aos="fade-up"
                data-aos-once="true"
              />
              <p class="name" data-aos="fade-up" data-aos-once="true">
                Uday Singh Ahlawat
              </p>
              <p class="role" data-aos="fade-up" data-aos-once="true">
                Manager Partner
              </p>
              <hr />
              <p class="bio" data-aos="fade-up" data-aos-once="true">
                Corporate Commercial Law Foreign Direct Investment
              </p>
              <a href="{{ url(route('team.detail')) }}" data-aos="fade-up" data-aos-once="true"
                >View Profile</a
              >
            </div>
          </div>
          <div class="col-md-3">
            <div class="team_box">
              <img
                src="/assets/frontend/images/team_6.png"
                alt=""
                data-aos="fade-up"
                data-aos-once="true"
              />
              <p class="name" data-aos="fade-up" data-aos-once="true">
                Tania Ahlawat
              </p>
              <p class="role" data-aos="fade-up" data-aos-once="true">
                Co - Managing Partner
              </p>
              <hr />
              <p class="bio" data-aos="fade-up" data-aos-once="true">
                Litigation & Dispute Resolution Employment & Labour Law
              </p>
              <a href="{{ url(route('team.detail')) }}" data-aos="fade-up" data-aos-once="true"
                >View Profile</a
              >
            </div>
          </div>
          <div class="col-md-3">
            <div class="team_box">
              <img
                src="/assets/frontend/images/team_7.png"
                alt=""
                data-aos="fade-up"
                data-aos-once="true"
              />
              <p class="name" data-aos="fade-up" data-aos-once="true">
                Gaurav Bhalla
              </p>
              <p class="role" data-aos="fade-up" data-aos-once="true">
                Partner
              </p>
              <hr />
              <p class="bio" data-aos="fade-up" data-aos-once="true">
                Intellectual Property Media & Entertainment
              </p>
              <a href="{{ url(route('team.detail')) }}" data-aos="fade-up" data-aos-once="true"
                >View Profile</a
              >
            </div>
          </div>
          <div class="col-md-3">
            <div class="team_box">
              <img
                src="/assets/frontend/images/team_8.png"
                alt=""
                data-aos="fade-up"
                data-aos-once="true"
              />
              <p class="name" data-aos="fade-up" data-aos-once="true">
                Sheena Ogra
              </p>
              <p class="role" data-aos="fade-up" data-aos-once="true">
                Partner
              </p>
              <hr />
              <p class="bio" data-aos="fade-up" data-aos-once="true">
                Corporate Commercial IPR & Employment
              </p>
              <a href="{{ url(route('team.detail')) }}" data-aos="fade-up" data-aos-once="true"
                >View Profile</a
              >
            </div>
          </div>
          <div class="col-md-3">
            <div class="team_box">
              <img
                src="/assets/frontend/images/team_9.png"
                alt=""
                data-aos="fade-up"
                data-aos-once="true"
              />
              <p class="name" data-aos="fade-up" data-aos-once="true">
                Apoorva Mishra
              </p>
              <p class="role" data-aos="fade-up" data-aos-once="true">
                Partner
              </p>
              <hr />
              <p class="bio" data-aos="fade-up" data-aos-once="true">
                Litigation & Dispute Resolution
              </p>
              <a href="{{ url(route('team.detail')) }}" data-aos="fade-up" data-aos-once="true"
                >View Profile</a
              >
            </div>
          </div>
          <div class="col-md-3">
            <div class="team_box">
              <img
                src="/assets/frontend/images/team_10.png"
                alt=""
                data-aos="fade-up"
                data-aos-once="true"
              />
              <p class="name" data-aos="fade-up" data-aos-once="true">
                Abhishek Paliwal
              </p>
              <p class="role" data-aos="fade-up" data-aos-once="true">
                Principal Associate
              </p>
              <hr />
              <p class="bio" data-aos="fade-up" data-aos-once="true">
                Practice Head – Corporate Secretarial & Compliance
              </p>
              <a href="{{ url(route('team.detail')) }}" data-aos="fade-up" data-aos-once="true"
                >View Profile</a
              >
            </div>
          </div>
          <div class="col-md-3">
            <div class="team_box">
              <img
                src="/assets/frontend/images/team_11.png"
                alt=""
                data-aos="fade-up"
                data-aos-once="true"
              />
              <p class="name" data-aos="fade-up" data-aos-once="true">
                Ajun Dewan
              </p>
              <p class="role" data-aos="fade-up" data-aos-once="true">
                Counsel - Chandigarh...
              </p>
              <hr />
              <p class="bio" data-aos="fade-up" data-aos-once="true">
                Real Estate Litigation & Dispute Resolution Arbitration
              </p>
              <a href="{{ url(route('team.detail')) }}" data-aos="fade-up" data-aos-once="true"
                >View Profile</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ---------------------- Team Card end -------------------- -->

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

<!--------============== Team end ================-------------->

@endsection
