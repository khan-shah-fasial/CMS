@php
$practice_Area = DB::table('practice_areas')->where('parent_id', null)->limit(8)->orderBy('series', 'asc')->get();
@endphp

<!--------------Header start----------------->
<header>
    <div class="container">
        <div class="row">
            <div class="col-md-12 px0">
                <div class="nav_bar d-flex align-items-center justify-content-between">
                    <div>
                        <div class="bottom_nav_links d-flex align-items-center gap-4">
                            <ul class="nav_links d-flex align-items-start gap-4 list-unstyled mb-0">
                                @foreach($practice_Area as $row)
                                @php $subcategory = DB::table('practice_areas')->where('parent_id', $row->id)->get();
                                @endphp

                                <li>
                                    <a
                                        href="{{ url(route('practicearea-detail', ['slug' => strtolower(str_replace(' ', '-',$row->slug))] )) }}">
                                        <span>{{ $row->title }}</span>
                                        @if(!$subcategory->isEmpty())
                                        <img src="/assets/frontend/images/arrow_icon.png" alt="down Arrow" />
                                        @endif
                                    </a>
                                    @if(!$subcategory->isEmpty())
                                    <ul class="dropdown">
                                        @foreach($subcategory as $item)
                                        <li><a
                                                href="{{ url(route('practicearea-detail', ['slug' => strtolower(str_replace(' ', '-',$item->slug))] )) }}">{{ $item->title }}</a>
                                        </li>
                                        @endforeach
                                    </ul>
                                    @endif
                                </li>
                                @endforeach
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- ------------------------ Mobile Menu ------------------------ -->

                <div class="wrapper">
                    <nav>

                        <div class="logo">
                            <a href="{{ url(route('index')) }}"><img src="/assets/frontend/images/logo.png"
                                    alt="logo" /></a>
                        </div>
                        <input type="checkbox" id="menu" name="menu" class="m-menu__checkbox" />
                        <label class="m-menu__toggle" for="menu">
                            <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2"
                                stroke-linecap="butt" stroke-linejoin="arcs">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </label>
                        <label class="m-menu__overlay" for="menu"></label>

                        <div class="m-menu">
                            <div class="m-menu__header">
                                <div class="logo">
                                    <a href="{{ url(route('index')) }}"><img src="/assets/frontend/images/logo.png"
                                            alt="logo" /></a>
                                </div>
                                <label class="m-menu__toggle" for="menu">
                                    <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#000000"
                                        stroke-width="2" stroke-linecap="butt" stroke-linejoin="arcs">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </label>
                            </div>
                            <ul>
                                <li><a href="{{ url(route('practicearea')) }}">Practice Area</a></li>
                                <li><a href="{{ url(route('team')) }}">Team</a></li>
                                <li><a href="{{ url(route('blog')) }}">Blog</a></li>
                                <li><a href="{{ url(route('contact')) }}">Contact Us</a></li>
                                <li><a href="{{ url(route('career')) }}">Careers</a></li>
                                <li>
                                    <label class="a-label__chevron" for="item-1">CORPORATE COMMERCIAL</label>
                                    <input type="checkbox" id="item-1" name="item-1" class="m-menu__checkbox" />
                                    <div class="m-menu">
                                        <div class="m-menu__header">
                                            <label class="m-menu__toggle" for="item-1">
                                                <svg width="35" height="35" viewBox="0 0 24 24" fill="none"
                                                    stroke="#000000" stroke-width="2" stroke-linecap="butt"
                                                    stroke-linejoin="arcs">
                                                    <path d="M19 12H6M12 5l-7 7 7 7" />
                                                </svg>
                                            </label>
                                            <span>CORPORATE COMMERCIAL</span>
                                        </div>
                                        <ul>
                                            <!-- <li>
                                                <label class="a-label__chevron" for="item-2-2">Item 2.2</label>
                                                <input type="checkbox" id="item-2-2" name="item-1"
                                                    class="m-menu__checkbox" />
                                                <div class="m-menu">
                                                    <div class="m-menu__header">
                                                        <label class="m-menu__toggle" for="item-2-2">
                                                            <svg width="35" height="35" viewBox="0 0 24 24" fill="none"
                                                                stroke="#000000" stroke-width="2" stroke-linecap="butt"
                                                                stroke-linejoin="arcs">
                                                                <path d="M19 12H6M12 5l-7 7 7 7" />
                                                            </svg>
                                                        </label>
                                                        <span>Item 2.2 </span>
                                                    </div>
                                                    <ul>
                                                        <li><label>Item 2.3.1</label></li>
                                                    </ul>
                                                </div>
                                            </li> -->
                                            <li><a href="#">Merger & Acquisitions</a></li>
                                            <li><a href="#">Private Equity/Venture Capital</a></li>
                                            <li><a href="#">Joint Ventures</a></li>
                                            <li><a href="#">Commercial Contracts</a></li>
                                            <li><a href="#">Banking & Finance</a></li>
                                            <li><a href="#">Taxation</a></li>
                                            <li><a href="#">Corporate Governance</a></li>
                                            <li><a href="#">Corporate Transaction Advisory</a></li>
                                            <li><a href="#">Media & Entertainment</a></li>
                                            <li><a href="#">Telecom & Broadcasting</a></li>
                                            <li><a href="#">Real Estate</a></li>
                                            <li><a href="#">Regulatory & Compliance</a></li>
                                            <li><a href="#">Employment/Labour/HR</a></li>
                                            <li><a href="#">NRI Legal Services</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <label class="a-label__chevron" for="item-2">CORPORATE SECRETERIAL</label>
                                    <input type="checkbox" id="item-2" name="item-2" class="m-menu__checkbox" />
                                    <div class="m-menu">
                                        <div class="m-menu__header">
                                            <label class="m-menu__toggle" for="item-2">
                                                <svg width="35" height="35" viewBox="0 0 24 24" fill="none"
                                                    stroke="#000000" stroke-width="2" stroke-linecap="butt"
                                                    stroke-linejoin="arcs">
                                                    <path d="M19 12H6M12 5l-7 7 7 7" />
                                                </svg>
                                            </label>
                                            <span>CORPORATE SECRETERIAL</span>
                                        </div>
                                        <ul>
                                            <li><a href="#">FEMA</a></li>
                                            <li><a href="#">Secretarial Audit</a></li>
                                            <li><a href="#">Risk Advisory & Due</a></li>
                                            <li><a href="#">Closure</a></li>
                                            <li><a href="#">FEMA</a></li>
                                            <li><a href="#">Secretarial Audit</a></li>
                                            <li><a href="#">Risk Advisory & Due Diligence</a></li>
                                            <li><a href="#">Closure of Companies</a></li>
                                            <li><a href="#">Conversion of Companies</a></li>
                                            <li><a href="#">Oppression & Mismanagement</a></li>
                                            <li><a href="#">Merger & Amalgamation</a></li>
                                            <li><a href="#">Demerger</a></li>
                                            <li><a href="#">Restructuring</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <label class="a-label__chevron" for="item-3">DATA PROTECTION</label>
                                    <input type="checkbox" id="item-3" name="item-3" class="m-menu__checkbox" />
                                    <div class="m-menu">
                                        <div class="m-menu__header">
                                            <label class="m-menu__toggle" for="item-3">
                                                <svg width="35" height="35" viewBox="0 0 24 24" fill="none"
                                                    stroke="#000000" stroke-width="2" stroke-linecap="butt"
                                                    stroke-linejoin="arcs">
                                                    <path d="M19 12H6M12 5l-7 7 7 7" />
                                                </svg>
                                            </label>
                                            <span>DATA PROTECTION</span>
                                        </div>
                                        <ul>
                                            <li><a href="#">Data Breach</a></li>
                                            <li><a href="#">Data Processing</a></li>
                                            <li><a href="#">Data Localization</a></li>
                                            <li><a href="#">Management Services</a></li>
                                            <li><a href="#">Agreements</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <label class="a-label__chevron" for="item-4">DISPUTE RESOLUTION</label>
                                    <input type="checkbox" id="item-4" name="item-4" class="m-menu__checkbox" />
                                    <div class="m-menu">
                                        <div class="m-menu__header">
                                            <label class="m-menu__toggle" for="item-4">
                                                <svg width="35" height="35" viewBox="0 0 24 24" fill="none"
                                                    stroke="#000000" stroke-width="2" stroke-linecap="butt"
                                                    stroke-linejoin="arcs">
                                                    <path d="M19 12H6M12 5l-7 7 7 7" />
                                                </svg>
                                            </label>
                                            <span>DISPUTE RESOLUTION</span>
                                        </div>
                                        <ul>
                                            <li><a href="#">Arbitration</a></li>
                                            <li><a href="#">Mediation</a></li>
                                            <li><a href="#">Litigation</a></li>
                                            <li><a href="#">Insolvency Bankruptcy </a></li>
                                            <li><a href="#">Prevention of Money Laundering></a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <label class="a-label__chevron" for="item-5">GAMING & SPORTS</label>
                                    <input type="checkbox" id="item-5" name="item-5" class="m-menu__checkbox" />
                                    <div class="m-menu">
                                        <div class="m-menu__header">
                                            <label class="m-menu__toggle" for="item-5">
                                                <svg width="35" height="35" viewBox="0 0 24 24" fill="none"
                                                    stroke="#000000" stroke-width="2" stroke-linecap="butt"
                                                    stroke-linejoin="arcs">
                                                    <path d="M19 12H6M12 5l-7 7 7 7" />
                                                </svg>
                                            </label>
                                            <span>GAMING & SPORTS</span>
                                        </div>
                                        <ul>
                                            <li><a href="#">Online Gaming</a></li>
                                            <li><a href="#">Player Reperesntatio</a></li>
                                            <li><a href="#">Gaming & Gambling Laws</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <label class="a-label__chevron" for="item-6">INTELLECTUAL PROPERTY</label>
                                    <input type="checkbox" id="item-6" name="item-6" class="m-menu__checkbox" />
                                    <div class="m-menu">
                                        <div class="m-menu__header">
                                            <label class="m-menu__toggle" for="item-6">
                                                <svg width="35" height="35" viewBox="0 0 24 24" fill="none"
                                                    stroke="#000000" stroke-width="2" stroke-linecap="butt"
                                                    stroke-linejoin="arcs">
                                                    <path d="M19 12H6M12 5l-7 7 7 7" />
                                                </svg>
                                            </label>
                                            <span>INTELLECTUAL PROPERTY</span>
                                        </div>
                                        <ul>
                                            <li><a href="#">Trademarks</a></li>
                                            <li><a href="#">Copyrights</a></li>
                                            <li><a href="#">Patents</a></li>
                                            <li><a href="#">Design</a></li>
                                            <li><a href="#">Domain Names</a></li>
                                            <li><a href="#">Geographical Indications</a></li>
                                            <li><a href="#">IP litigation Services</a></li>
                                            <li><a href="#">Gloabal IP Solutions</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <label class="a-label__chevron" for="item-7">SETTING UP IN INDIA</label>
                                    <input type="checkbox" id="item-7" name="item-7" class="m-menu__checkbox" />
                                    <div class="m-menu">
                                        <div class="m-menu__header">
                                            <label class="m-menu__toggle" for="item-7">
                                                <svg width="35" height="35" viewBox="0 0 24 24" fill="none"
                                                    stroke="#000000" stroke-width="2" stroke-linecap="butt"
                                                    stroke-linejoin="arcs">
                                                    <path d="M19 12H6M12 5l-7 7 7 7" />
                                                </svg>
                                            </label>
                                            <span>SETTING UP IN INDIA</span>
                                        </div>
                                        <ul>
                                            <li><a href="#">FDI</a></li>
                                            <li><a href="#">Private Limited Company</a></li>
                                            <li><a href="#">Tech Support Company</a></li>
                                            <li><a href="#">eCommerce Business</a></li>
                                            <li><a href="#">Fintech Company</a></li>
                                            <li><a href="#">LLP Company in India</a></li>
                                            <li><a href="#">India Entry Strategy</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>GENERAL COUNSEL SERVICES</span>
                                    </a>

                                </li>

                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</header>





<!--------------header end-------------------->