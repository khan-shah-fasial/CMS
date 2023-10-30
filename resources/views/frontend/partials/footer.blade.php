@php
    $practice_Area = DB::table('practice_areas')->where('parent_id', null)->limit(8)->get();
@endphp
    <!--------------------footer start----------------------------->
    <!------------------ Contact Start -------------------------->

    <section class="contact">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="contact_info_box">
                        <img src="/assets/frontend/images/footer_logo.png" alt="" data-aos-once="true"
                            data-aos="fade-up" />
                        <p class="mobile" data-aos-once="true" data-aos="fade-up">011-41023400</p>
                        <p class="email" data-aos-once="true" data-aos="fade-up">info@ahlawatassociates.in</p>
                    </div>
                </div>
                <div class="col-md-3">
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
                <div class="col-md-6">
                    <form class="contact_form">
                        <h3 data-aos-once="true" data-aos="fade-up">Want to know more</h3>
                        <div class="d-flex align-items-center gap-3">
                            <input type="text" placeholder="Write Your Name..." data-aos-once="true"
                                data-aos="fade-up" />
                            <input type="text" placeholder="Write Your Email..." data-aos-once="true"
                                data-aos="fade-up" />
                        </div>
                        <div class="d-flex align-items-center gap-3">
                            <input type="text" placeholder="Write Your Phone No" data-aos-once="true"
                                data-aos="fade-up" />
                            <select data-aos-once="true" data-aos="fade-up">
                                <option>Secretarial Audit</option>
                                <option>Options</option>
                                <option>Options</option>
                                <option>Options</option>
                                <option>Options</option>
                            </select>
                        </div>
                        <input type="text" placeholder="Brief description of your legal issue" data-aos-once="true"
                            data-aos="fade-up" />
                        <div class="text-center">
                            <button class="contact_form_button" data-aos-once="true" data-aos="fade-up">SEND</button>
                        </div>
                    </form>
                </div>
                <div class="col-md-3">
                    <div class="address_box">
                        <p class="title" data-aos-once="true" data-aos="fade-up">Delhi (Head Office)</p>
                        <p data-aos-once="true" data-aos="fade-up">
                            Plot No. 66, LGF, #TheHub, <br />
                            Okhla Phase III, Okhla Industrial <br />
                            Estate, New Delhi, 110020,
                        </p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="address_box">
                        <p class="title" data-aos-once="true" data-aos="fade-up">Mumbai</p>
                        <p data-aos-once="true" data-aos="fade-up">
                            No. 611, Reliables Pride opp. <br />
                            Om Heera Panna Mall, Anand <br />
                            Nagar, Jogeshwari West, Mumbai.
                        </p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="address_box">
                        <p class="title" data-aos-once="true" data-aos="fade-up">Chandigarh</p>
                        <p data-aos-once="true" data-aos="fade-up">
                            Space jam, SCO, 50-51, <br />
                            Sector 34A, Chandigarh, <br />160022, India
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <hr />

    <!------------------ Contact End -------------------------->
    <!------------------ footer Start -------------------------->

    <section class="footer">
        <div class="container">
            <div class="row">
                
                @foreach($practice_Area as $row)
                    @php $subcategory = DB::table('practice_areas')->where('parent_id', $row->id)->get(); @endphp

                    @if(!$subcategory->isEmpty())
                        <div class="col-md-3">
                            <h6 data-aos-once="true" data-aos="fade-up">{{ $row->title }}</h6>
                            <ul>
                                @foreach($subcategory as $item)
                                    <li data-aos-once="true" data-aos="fade-up"><a href="{{ url(route('practicearea-detail', ['slug' => strtolower(str_replace(' ', '-',$item->slug))] )) }}">{{ $item->title }}</a></li>
                                @endforeach
                            </ul>
                        </div>
                    @endif
                @endforeach

            </div>
        </div>
    </section>

    <!------------------ footer End -------------------------->
	