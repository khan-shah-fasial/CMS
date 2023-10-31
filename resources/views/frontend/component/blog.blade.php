@php 
    $blog = DB::table('blogs')->where('status', 1)->limit(6)->orderBy('id', 'desc')->get()->toArray();
    $right_blog = array_slice($blog, 2);
@endphp
<!-------============= blog ================---------------------->
<section class="blog">
    <div class="container">
        <div class="row">

            <div class="col-md-8">
                <div class="underline_heading" data-aos-once="true" data-aos="fade-up">
                    <h6 class="main_heading">Latest Blog</h6>
                </div>
                <h1 class="main_heading mb-4" data-aos-once="true" data-aos="fade-up">
                    Learn something more <br />
                    from our latest <span class="main_heading_color">Blog</span>
                </h1>
                <div class="row">

                    <div class="col-md-6">
                        <div class="blog_big_box" data-aos-once="true" data-aos="fade-up">
                            <img src="{{ asset('storage/' .$blog[0]->main_image) }}" alt="" class="blog_img" />
                            <div class="blog_content">
                                <p>
                                    {{ $blog[0]->title }}
                                </p>
                                <a href="{{ url(route('blog.detail', ['category' =>'blog', 'slug' => strtolower(str_replace(' ', '-',$blog[0]->slug))] )) }}">View More</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="blog_big_box" data-aos-once="true" data-aos="fade-up">
                            <img src="{{ asset('storage/' .$blog[1]->main_image) }}" alt="" class="blog_img" />
                            <div class="blog_content">
                                <p>
                                    {{ $blog[1]->title }}
                                </p>
                                <a href="{{ url(route('blog.detail', ['category' =>'blog', 'slug' => strtolower(str_replace(' ', '-',$blog[1]->slug))] )) }}">View More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <h2 class="heading mb-4 mt-4">
                    Learn something more from our latest
                    <span class="main_heading_color">News</span>
                </h2>

                @foreach ($right_blog  as $row)
                    
                <div class="blog_right_box" data-aos-once="true" data-aos="fade-up">
                    <img src="{{ asset('storage/' .$row->main_image) }}" alt="" />
                    <div>
                        <p class="desc">
                            {{ $row->title }}
                        </p>
                        <a href="{{ url(route('blog.detail', ['category' =>'blog', 'slug' => strtolower(str_replace(' ', '-',$row->slug))] )) }}">View More</a>
                    </div>
                </div>

                @endforeach

            </div>
        </div>
    </div>
</section>

<!----------============== blog =============------------->