@php
$blog = DB::table('blogs')->where('status', 1)->whereJsonContains('blog_category_ids',
'3')->limit(6)->orderBy('created_at', 'desc')->get();
$right_news = DB::table('blogs')->where('status', 1)->whereJsonContains('blog_category_ids',
'4')->limit(10)->orderBy('created_at', 'desc')->get();
@endphp
@if(count($blog) > 1)
<!-------============= blog ================---------------------->
<section class="blog">
    <div class="container">
        <div class="row">

            <div class="col-lg-8 px0">
                <div class="underline_heading" data-aos-once="true" data-aos="fade-up">
                    <h6 class="main_heading">Latest Blogs</h6>
                </div>
                <h1 class="main_heading mb-4" data-aos-once="true" data-aos="fade-up">
                    Enhance your legal knowledge <br> with <a href="{{ url(route('blog')) }}"
                        class="main_heading_color text-decoration-none cursor-pointer">Blogs</a>
                </h1>
                <div class="row">

                <div class="col-md-12">
                    
                        <div class="owl-carousel owl-theme" id="blog_slider">

                            @foreach ($blog as $row)
                                <div class="item">
                                    <div class="blog_big_box" data-aos-once="true" data-aos="fade-up">
                                            <img src="{{ asset('storage/' .$row->main_image) }}" alt="" class="blog_img" />
                                            <div class="blog_content">
                                                <p>
                                                    {{ $row->title }}
                                                </p>
                                                <a
                                                    href="{{ url(route('blog.detail', ['category' =>'blog', 'slug' => strtolower(str_replace(' ', '-',$row->slug))] )) }}">View
                                                    More</a>
                                            </div>
                                        
                                    </div>
                                
                                </div>
                            @endforeach
                        </div>
                    </div>
                    

                    <!-- <div class="col-md-6 col-6  ">
                        <div class="blog_big_box" data-aos-once="true" data-aos="fade-up">
                            <img src="{{ asset('storage/' .$blog[0]->main_image) }}" alt="" class="blog_img" />
                            <div class="blog_content">
                                <p>
                                    {{ $blog[0]->title }}
                                </p>
                                <a
                                    href="{{ url(route('blog.detail', ['category' =>'blog', 'slug' => strtolower(str_replace(' ', '-',$blog[0]->slug))] )) }}">View
                                    More</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-6">
                        <div class="blog_big_box" data-aos-once="true" data-aos="fade-up">
                            <img src="{{ asset('storage/' .$blog[1]->main_image) }}" alt="" class="blog_img" />
                            <div class="blog_content">
                                <p>
                                    {{ $blog[1]->title }}
                                </p>
                                <a
                                    href="{{ url(route('blog.detail', ['category' =>'blog', 'slug' => strtolower(str_replace(' ', '-',$blog[1]->slug))] )) }}">View
                                    More</a>
                            </div>
                        </div>
                    </div> -->





                </div>
            </div>

            <div class="col-lg-4 px0 ">
                <h2 class="heading mb-4 mt-4">
                    Get yourself updated with A&amp;A
                    <a href="{{ url(route('news')) }}"
                        class="main_heading_color text-decoration-none cursor-pointer">Newscast!</a>
                </h2>


    <div class="marquee main_marque ">
            @foreach ($right_news as $row)

                <div class="item">
                  <div class="blog_right_box" data-aos-once="true" data-aos="fade-up">
                    <img src="{{ asset('storage/' .$row->main_image) }}" alt="" />
                    <div>
                        <p class="desc">
                            {{ $row->title }}
                        </p>
                        <a
                            href="{{ url(route('blog.detail', ['category' =>'news', 'slug' => strtolower(str_replace(' ', '-',$row->slug))] )) }}">View
                            More</a>
                    </div>
                  </div>
                </div>
               
            @endforeach
      </div>

                

                <!-- <marquee direction="up">
                @foreach ($right_news as $row)
                <div class="item">
                  <div class="blog_right_box" data-aos-once="true" data-aos="fade-up">
                    <img src="{{ asset('storage/' .$row->main_image) }}" alt="" />
                    <div>
                        <p class="desc">
                            {{ $row->title }}
                        </p>
                        <a
                            href="{{ url(route('blog.detail', ['category' =>'news', 'slug' => strtolower(str_replace(' ', '-',$row->slug))] )) }}">View
                            More</a>
                    </div>
                  </div>
                </div>
               
                @endforeach
                </marquee> -->

            </div>
        </div>
    </div>
</section>
@endif

<!----------============== blog =============------------->