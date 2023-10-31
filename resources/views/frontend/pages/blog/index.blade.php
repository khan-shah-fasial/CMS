@extends('frontend.layouts.app')

@section('page.content')

<!----------------=============== blog start ================------------->
<!-- -------------------- blog banner start ---------------- -->

<section class="blog_page_banner">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="text-center">
                    <h1 class="heading">Blog</h1>
                    <nav aria-label="breadcrumb" class="breadcrumb d-flex justify-content-center mb-0">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item home">
                                <a href="{{ url(route('index')) }}" data-aos="fade-up" data-aos-once="true">Home</a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">
                                Blog
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- -------------------- blog banner end   ---------------- -->

<!-- -------------------- blog banner start ---------------- -->

<section class="blog_page_cards">
    <div class="container">
        <div class="row">

            @foreach ($blog as $row)
                

            <div class="col-md-4">
                <div class="blog_big_box me-3 mb-5 ">
                    <div class="hover_effect_img">
                        <img src="{{ asset('storage/' . $row->main_image) }}" alt="" class="blog_img" data-aos="fade-up"
                            data-aos-once="true" />
                        <div class="overlay">
                            <div class="plus">
                                +
                            </div>
                        </div>
                    </div>

                    @php 
                        $author = DB::table('users')->where('id', $row->user_id)->first();
                    @endphp

                    <div class="blog_content">
                        <div class="d-flex align-items-center gap-4">
                            <p class="d-flex align-items-center gap-2 author" data-aos="fade-up" data-aos-once="true">
                                <img src="/assets/frontend/images/author.png" alt="" />
                                <span>{{ $author->name }}</span>
                            </p>
                            <p class="d-flex align-items-center gap-2 author" data-aos="fade-up" data-aos-once="true">
                                <img src="/assets/frontend/images/calender.png" alt="" />
                                <span> {{ $row->created_at->format('F j, Y') }} </span>
                            </p>
                        </div>
                        <p data-aos="fade-up" data-aos-once="true">
                            {{ $row->short_description }}
                        </p>
                        <a href="{{ url(route('blog.detail', ['category' =>'blog','slug' => strtolower(str_replace(' ', '-',$row->slug))] )) }}" data-aos="fade-up" data-aos-once="true">View More</a>
                    </div>
                </div>
            </div>

            @endforeach

        </div>
    </div>
</section>

<!-- -------------------- blog banner end   ---------------- -->

<!-- ---------- service get in touch  start ---------------------- -->

@include('frontend.component.get_in_touch')

<!-- -------------- service get in touch  end ---------------------- -->

<!------------------ awards_section Start -------------------------->
@include('frontend.component.awards')
<!------------------ awards_section End -------------------------->

<!----------------=============== blog end ================------------->
@endsection