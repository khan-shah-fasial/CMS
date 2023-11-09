@foreach ($publication as $row)


<div class="col-lg-4 col-md-6 px0" data-aos="fade-up" data-aos-once="true">
    <div class="blog_big_box me-xl-3 mb-md-5 mb-3 ">
        <div class="hover_effect_img">
            <img src="{{ asset('storage/' . $row->image) }}" alt="" class="blog_img" data-aos="fade-up"
                data-aos-once="true" />
            <div class="overlay">
                <a
                    href="{{ $row->url }}">
                    <div class="plus">
                        +
                    </div>
                </a>

            </div>
        </div>

        <div class="blog_content">
            <div
                class="d-flex align-items-xl-center align-items-lg-start align-items-center  flex-xl-row flex-lg-column flex-row  gap-xl-4 gap-lg-0 gap-2 mb-2">
                <p class="d-flex align-items-center gap-2 author mb-0">
                    <img src="/assets/frontend/images/calender.png" alt="" />
                    <span> {{ $row->created_at->format('F j, Y') }} </span>
                </p>
            </div>
            <p>
                {{ $row->title }}
            </p>
            <a
                href="{{ $row->url }}">View
                More</a>
        </div>
    </div>
</div>

@endforeach