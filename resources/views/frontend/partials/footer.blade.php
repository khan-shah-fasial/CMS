@php
$practice_Area = DB::table('practice_areas')->where('parent_id', null)->limit(8)->orderBy('series', 'asc')->get();
@endphp
<!--------------------footer start----------------------------->
<!------------------ Contact Start -------------------------->

<section class="contact">

    <!-- <div class="mobile_whatsapp">
        <div class="whatsapp_chat_support wcs_fixed_right" id="example_1">

            <div class="wcs_button wcs_button_circle">
                <div class="whatsapp_blink">
                    <span href="" class="btn-whatsapp-pulse">
                        <span class="fa fa-whatsapp"></span>
                    </span>
                </div>
            </div>
            <div class="wcs_button_label">
                Need Help? Chat with us
            </div>

            <div class="wcs_popup">
                <div class="wcs_popup_close">
                    <span class="fa fa-close"></span>
                </div>
                <div class="wcs_popup_header">
                    <strong>Need Help? Chat with us</strong>
                    <br>
                    <div class="wcs_popup_header_description">Click one of our representatives below</div>
                </div>
                <div class="wcs_popup_person_container">
                    <div class="wcs_popup_person" data-number="+91 8882400643">
                        <div class="wcs_popup_person_img"><img src="/assets/frontend/images/whats_icon1.png" alt="" />
                        </div>
                        <div class="wcs_popup_person_content">
                            <div class="wcs_popup_person_name">Ahlawat & Associates</div>
                            <div class="wcs_popup_person_description">Ahlawat & Associates</div>
                            <div class="wcs_popup_person_status">I'm Online</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->

    <div class="container">
        <div class="row">
            <div class="col-md-3 col-6">
                <div class="contact_info_box d-flex  flex-column">
                    <img src="/assets/frontend/images/footer_logo.png" alt="" data-aos-once="true" data-aos="fade-up" />
                    <a href="tel:{{ get_settings('mobile') }}" class="mobile" data-aos-once="true" data-aos="fade-up">{{ get_settings('mobile') }}</a>
                    <a href="mailto:{{ get_settings('email') }}" class="email" data-aos-once="true"
                        data-aos="fade-up">{{ get_settings('email') }}</a>
                </div>
            </div>
            <div class="col-md-3 col-6">
                <div class="right_push_mob">
                    <div class="quick_links_box">
                        <h6 class="q_links_heading" data-aos-once="true" data-aos="fade-up">Quick Links</h6>
                        <ul>
                            <li data-aos-once="true" data-aos="fade-up"><a href="{{ url(route('about')) }}">About Us</a>
                            </li>
                            <li data-aos-once="true" data-aos="fade-up">
                                <a href="{{ url(route('practicearea')) }}">Practice Area </a>
                            </li>
                            <li data-aos-once="true" data-aos="fade-up"><a href="{{ url(route('career')) }}">Career </a>
                            </li>
                            <li data-aos-once="true" data-aos="fade-up"><a href="{{ url(route('team')) }}">Teams </a>
                            </li>
                            <li data-aos-once="true" data-aos="fade-up">
                                <a href="{{ url(route('contact')) }}">Contact Us </a>
                            </li>
                            <li data-aos-once="true" data-aos="fade-up"><a href="{{ url(route('blog')) }}">Blog </a>
                            </li>
                            <li data-aos-once="true" data-aos="fade-up"><a href="{{ url(route('faq')) }}">Faq </a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                @include('frontend.component.footer_form')
            </div>
            <div class="col-md-3 col-12">
                <div class="address_box">
                    <p class="title" data-aos-once="true" data-aos="fade-up">Delhi (Head Office)</p>
                    <p data-aos-once="true" data-aos="fade-up">
                        {{ get_settings('delhi_address') }}
                    </p>
                </div>
            </div>
            <div class="col-md-3 col-12">
                <div class="address_box">
                    <p class="title" data-aos-once="true" data-aos="fade-up">Mumbai</p>
                    <p data-aos-once="true" data-aos="fade-up">
                        {{ get_settings('mumbai_address') }}
                    </p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="address_box">
                    <p class="title" data-aos-once="true" data-aos="fade-up">Chandigarh</p>
                    <p data-aos-once="true" data-aos="fade-up">
                        {{ get_settings('chandigarh_address') }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<hr />

<!------------------ Contact End -------------------------->
<!------------------ footer Start -------------------------->

<footer class="footer">
    <div class="container">
        <div class="footer_count">

            @foreach($practice_Area as $row)
            @php $subcategory = DB::table('practice_areas')->where('parent_id', $row->id)->get(); @endphp

            @if(!$subcategory->isEmpty())
            <div class="footer_colums">
                <h6 data-aos-once="true" data-aos="fade-up">{{ $row->title }}</h6>
                <ul>
                    @foreach($subcategory as $item)
                    <li data-aos-once="true" data-aos="fade-up"><a
                            href="{{ url(route('practicearea-detail', ['slug' => strtolower(str_replace(' ', '-',$item->slug))] )) }}">{{ $item->title }}</a>
                    </li>
                    @endforeach
                </ul>
            </div>
            @endif
            @endforeach
        </div>

        <div class="row">
            <div class="col-md-12 mt-md-5 mt-2">
                <div
                    class="footer_bottom d-flex align-items-center text-md-start text-center justify-content-md-between  justify-content-center flex-md-row flex-column mb-md-0 mb-5">
                    <p class="mb-md-0 mb-2">2023 Ahlawat. All Rights Reserved.</p>
                    <ul class="d-flex align-items-center gap-md-5 gap-3  mb-md-0 mb-2">
                        <li><a href="{{ url(route('privacy-policy')) }}">Privacy Policy </a></li>
                        <li><a href="#">Cookie Policy</a></li>
                    </ul>
                    <ul class="d-flex align-items-center gap-3 mb-md-0 mb-3">
                        <li>
                            <a href="{{ get_settings('instagram') }}"><img src="assets/frontend/images/instagram.png" alt="" /></a>
                        </li>
                        <li>
                            <a href="{{ get_settings('facebook') }}" target="_blank"><img
                                    src="assets/frontend/images/facebook.png" alt="" /></a>
                        </li>
                        <li>
                            <a href="{{ get_settings('linkedin') }}"
                                target="_blank"><img src="assets/frontend/images/linkedIn.png" alt="" /></a>
                        </li>
                        <li>
                            <a href="{{ get_settings('twitter') }}"
                                target="_blank"><img src="assets/frontend/images/twitter.png" alt="" /></a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
    <div class="fix_footer">
        <a href="{{ url(route('index')) }}">
            <span>
                <i class="fa fa-home" aria-hidden="true"></i>
            </span>
            <span>
                Home
            </span>
        </a>
        <a href="https://api.whatsapp.com/send?phone={{ get_settings('whatsapp') }}">
            <span>
                <i class="fa fa-whatsapp" aria-hidden="true"></i>
            </span>
            <span>
                Whatsapp
            </span>
        </a>
        <a href="tel:+{{ get_settings('mobile') }}">
            <span>
                <i class="fa fa-phone" aria-hidden="true"></i>
            </span>
            <span>
                Call
            </span>
        </a>
        <a href="mailto:{{ get_settings('email') }}">
            <span>
                <i class="fa fa-envelope" aria-hidden="true"></i>
            </span>
            <span>
                Mail
            </span>
        </a>

    </div>
</footer>




<!------------------ footer End -------------------------->


<!--start cookies code-->
<div class="cookies_section">
    <div class="title-box">
        <i class="bx bx-cookie"></i>
        <h3> <img src="/assets/frontend/images/cookie_image.png" alt="" /> Cookies Consent</h3>
    </div>
    <div class="info">
        <p>
            We use cookies to help you navigate efficiently and perform certain functions. You will find detailed
            information about all cookies under each consent category below.
            <a href="{{url(route('cookie-policy'))}}"> Read more...</a>
        </p>
    </div>
    <div class="buttons">
        <button class="cookies_button" id="cookieAccept">Accept</button>
        <button class="cookies_button">Decline</button>
    </div>
</div>
<!--end cookies code-->