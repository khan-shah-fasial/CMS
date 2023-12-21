<div class="col-lg-2 col-0 pd-0">
    <div class="menu_left_fixed">
        <div class="logo">
            <a href="{{ url(route('index')) }}"><img src="/assets/frontend/images/header_logo.webp" alt="logo" /></a>
        </div>
        <div class="menu_listing">
            <ul>
                <li><a href="{{ url(route('about')) }}">Our Journey</a></li>
                <li><a href="{{ url(route('practicearea')) }}">Our Expertise</a></li>
                <li><a href="{{ url(route('team')) }}">Our Professionals</a></li>
                <li class="sidebar_item">
                    <span class="sub-btn">Insights <img src="/assets/frontend/images/arrow_icon.png" alt="down Arrow" />
                    </span>
                    
                    <ol class="sub-menu">
                        <li><a href="{{ url(route('blog')) }}" class="sub-item">Blogs</a></li>
                        <li><a href="{{ url(route('news')) }}" class="sub-item">A&amp;A Newscast</a></li>
                        <li><a href="{{ url(route('media-coverage')) }}" class="sub-item">Media Coverages</a></li>
                        <!--<a href="{{ url(route('news')) }}" class="sub-item">Life at A&amp;A</a>-->
					</ol>
                </li>
                <li><a href="{{ url(route('career')) }}">Career</a></li>

            </ul>
            <div class="text-center">
                <button type="button" data-bs-toggle="modal" data-bs-target="#contact" class="menu_btn">Contact Us
                    Now</button>
            </div>

            <!--whatsapp chat box open-->

            <div class="desktop_whatsapp">
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
                            <div class="wcs_popup_person" data-number="+{{ get_settings('whatsapp') }}">
                                <div class="wcs_popup_person_img"><img src="/assets/frontend/images/whats_icon1.png"
                                        alt="" /></div>
                                <div class="wcs_popup_person_content">
                                    <div class="wcs_popup_person_name">Ahlawat & Associates</div>
                                    <div class="wcs_popup_person_description">Ahlawat & Associates</div>
                                    <div class="wcs_popup_person_status">I'm Online</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <!--whatsapp chat box close-->

        </div>
    </div>
</div>

<div class="modal fade" id="contact" tabindex1="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body ">
                <div class="career_popup_form">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    @include('frontend.component.popup_form')
                </div>

            </div>
        </div>
    </div>
</div>