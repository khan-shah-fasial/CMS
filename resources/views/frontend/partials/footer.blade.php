@php
$practice_Area = DB::table('practice_areas')->where('parent_id', null)->limit(8)->orderBy('series', 'asc')->get();
@endphp
<!--------------------footer start----------------------------->
<!------------------ Contact Start -------------------------->

<section class="contact">
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-6">
                <div class="contact_info_box d-flex  flex-column">
                    <img src="/assets/frontend/images/footer_logo.png" alt="" data-aos-once="true" data-aos="fade-up" />
                    <a href="tel:011-41023400" class="mobile" data-aos-once="true" data-aos="fade-up">011-41023400</a>
                    <a href="mailto:info@ahlawatassociates.in" class="email" data-aos-once="true"
                        data-aos="fade-up">info@ahlawatassociates.in</a>
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
            <div class="col-md-3 col-6">
                <div class="address_box">
                    <p class="title" data-aos-once="true" data-aos="fade-up">Delhi (Head Office)</p>
                    <p data-aos-once="true" data-aos="fade-up">
                        Plot No. 66, LGF, #TheHub, <br class="br" />
                        Okhla Phase III, Okhla Industrial <br class="br" />
                        Estate, New Delhi, 110020,
                    </p>
                </div>
            </div>
            <div class="col-md-3 col-6">
                <div class="address_box">
                    <p class="title" data-aos-once="true" data-aos="fade-up">Mumbai</p>
                    <p data-aos-once="true" data-aos="fade-up">
                        No. 611, Reliables Pride opp. <br class="br" />
                        Om Heera Panna Mall, Anand <br class="br" />
                        Nagar, Jogeshwari West, Mumbai.
                    </p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="address_box">
                    <p class="title" data-aos-once="true" data-aos="fade-up">Chandigarh</p>
                    <p data-aos-once="true" data-aos="fade-up">
                        Space jam, SCO, 50-51, <br class="br" />
                        Sector 34A, Chandigarh, <br class="br" />160022, India
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
        <div class="row">

            @foreach($practice_Area as $row)
            @php $subcategory = DB::table('practice_areas')->where('parent_id', $row->id)->get(); @endphp

            @if(!$subcategory->isEmpty())
            <div class="col-md-3">
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

            <div class="col-md-12 mt-md-5 mt-2">
                <div
                    class="footer_bottom d-flex align-items-center text-md-start text-center justify-content-md-between  justify-content-center flex-md-row flex-column">
                    <p class="mb-md-0 mb-2">2023 Ahlawat. All Rights Reserved.</p>
                    <ul class="d-flex align-items-center gap-md-5 gap-3  mb-md-0 mb-2">
                        <li><a href="#">Privacy Policy </a></li>
                        <li><a href="{{ url(route('privacy-policy')) }}"> Terms & Condition </a></li>
                        <li><a href="#">Cookie Policy</a></li>
                    </ul>
                    <ul class="d-flex align-items-center gap-3 mb-0">
                        <li>
                            <a href="#"><img src="assets/frontend/images/instagram.png" alt="" /></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/ahlawatassociates/" target="_blank"><img
                                    src="assets/frontend/images/facebook.png" alt="" /></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/ahlawat-associates?originalSubdomain=in"
                                target="_blank"><img src="assets/frontend/images/linkedIn.png" alt="" /></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FAhlawatLaw%2F"
                                target="_blank"><img src="assets/frontend/images/twitter.png" alt="" /></a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</footer>

<!------------------ footer End -------------------------->