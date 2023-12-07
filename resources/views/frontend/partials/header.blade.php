@php
$practice_Area = DB::table('practice_areas')
    ->whereIn('id', ['7', '9', '11', '8', '10', '12', '13', '14'])
    ->orderByRaw("FIELD(id, '7', '9', '11', '8', '10', '12', '13', '14')")
    ->get();

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
                                    <a href="{{ 
                                        $row->special_service == '1' ? 
                                            url(route('practicearea-detail-specialised', ['slug' => $row->slug] )) :
                                            (
                                                $row->special_service == '2' ?
                                                    url(route('practicearea-detail-page', ['slug' => $row->slug] )) :
                                                    (
                                                        $row->special_service == '3' ?
                                                            url(route('practicearea-detail-extra', ['slug1' => $row->slug] )) :
                                                            url(route('practicearea-detail', ['slug' => $row->slug] ))
                                                    )
                                            )
                                    }}">
                                        <span>{{ $row->title }}</span>
                                        @if(!$subcategory->isEmpty())
                                        <img src="/assets/frontend/images/arrow_icon.png" alt="down Arrow" />
                                        @endif
                                    </a>
                                    @if(!$subcategory->isEmpty())
                                    <ul class="dropdown">
                                        @foreach($subcategory as $item)
                                        <li>
                                            <a href="{{ 
                                                $item->special_service == '1' ? 
                                                    url(route('practicearea-detail-specialised', ['slug' => $item->slug] )) :
                                                    (
                                                        $item->special_service == '2' ?
                                                            url(route('practicearea-detail-page', ['slug' => $item->slug] )) :
                                                            (
                                                                $item->special_service == '3' ?
                                                                    url(route('practicearea-detail-extra', ['slug1' => $item->slug] )) :
                                                                    url(route('practicearea-detail', ['slug' => $item->slug] ))
                                                            )
                                                    )
                                            }}">{{ $item->title }}</a>
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
                                <li><a href="{{ url(route('practicearea')) }}">Our Expertise</a></li>
                                <li><a href="{{ url(route('team')) }}">Our Professionals</a></li>
                                <li>
                                    <label class="a-label__chevron" for="blog">Insights</label>
                                    <input type="checkbox" id="blog" name="blog"
                                        class="m-menu__checkbox" />
                                    <div class="m-menu">
                                        <div class="m-menu__header">
                                            <label class="m-menu__toggle" for="blog">
                                                <svg width="35" height="35" viewBox="0 0 24 24" fill="none"
                                                    stroke="#000000" stroke-width="2" stroke-linecap="butt"
                                                    stroke-linejoin="arcs">
                                                    <path d="M19 12H6M12 5l-7 7 7 7" />
                                                </svg>
                                            </label>
                                            <span>Insights</span>
                                        </div>
                                        <ul>
                                        <div class="sub-menu" style="display: block;">
                       
                    </div>

                                           
                                            <li>                <a href="{{ url(route('blog')) }}">Blogs</a>
                                            </li>
                                            <li>                <a href="{{ url(route('news')) }}">A&amp;A Newscast</a>
                                            </li>
                                            <li>                <a href="{{ url(route('media-coverage')) }}">Media Coverages</a>
                                            </li>
                                            <li>                <a href="{{ url(route('news')) }}">Life at A&amp;A</a>
                                            </li>
                                          
                                        </ul>
                                    </div>
                                </li>
                                <li><a href="{{ url(route('contact')) }}">Contact Us</a></li>
                                <li><a href="{{ url(route('career')) }}">Careers</a></li>

                                @php $i = 1 @endphp
                                @foreach($practice_Area as $row)
                                @php $subcategory = DB::table('practice_areas')->where('parent_id', $row->id)->get();
                                @endphp

                                @if(!$subcategory->isEmpty())
                                <li>
                                    <label class="a-label__chevron" for="item-{{ $i }}">{{ $row->title }}</label>
                                    <input type="checkbox" id="item-{{ $i }}" name="item-{{ $i }}"
                                        class="m-menu__checkbox" />
                                    <div class="m-menu">
                                        <div class="m-menu__header">
                                            <label class="m-menu__toggle" for="item-{{ $i }}">
                                                <svg width="35" height="35" viewBox="0 0 24 24" fill="none"
                                                    stroke="#000000" stroke-width="2" stroke-linecap="butt"
                                                    stroke-linejoin="arcs">
                                                    <path d="M19 12H6M12 5l-7 7 7 7" />
                                                </svg>
                                            </label>
                                            <span>{{ $row->title }}</span>
                                        </div>
                                        <ul>

                                            @foreach($subcategory as $item)
                                            <li><a href="{{ 
                                                $item->special_service == '1' ? 
                                                    url(route('practicearea-detail-specialised', ['slug' => $item->slug] )) :
                                                    (
                                                        $item->special_service == '2' ?
                                                            url(route('practicearea-detail-page', ['slug' => $item->slug] )) :
                                                            (
                                                                $item->special_service == '3' ?
                                                                    url(route('practicearea-detail-extra', ['slug1' => $item->slug] )) :
                                                                    url(route('practicearea-detail', ['slug' => $item->slug] ))
                                                            )
                                                    )
                                            }}">{{ $item->title }}</a>
                                            </li>
                                            @endforeach

                                        </ul>
                                    </div>
                                </li>
                                @php $i++ @endphp
                                @else
                                <li>
                                    <a href="{{ 
                                        $row->special_service == '1' ? 
                                            url(route('practicearea-detail-specialised', ['slug' => $row->slug] )) :
                                            (
                                                $row->special_service == '2' ?
                                                    url(route('practicearea-detail-page', ['slug' => $row->slug] )) :
                                                    (
                                                        $row->special_service == '3' ?
                                                            url(route('practicearea-detail-extra', ['slug1' => $row->slug] )) :
                                                            url(route('practicearea-detail', ['slug' => $row->slug] ))
                                                    )
                                            )
                                    }}">
                                        <span> {{ $row->title }} </span>
                                    </a>

                                </li>
                                @endif
                                @endforeach

                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</header>





<!--------------header end-------------------->