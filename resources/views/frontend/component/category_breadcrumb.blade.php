<!----================================= category Breadcrumb ==================---------------------->

<section>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="d-flex align-items-center gap-md-0  flex-wrap justify-content-md-around gap-1">
                    <a href="{{ url(route('blog')) }}"
                        class="blog_filter_btn @if(request()->routeIs('blog') ) active @endif">
                        Blog
                    </a>
                    <a href="{{ url(route('news')) }}"
                        class="blog_filter_btn @if(request()->routeIs('news') ) active @endif">
                        News
                    </a>
                    <a href="{{ url(route('publication')) }}"
                        class="blog_filter_btn @if(request()->routeIs('publication') ) active @endif">
                        Publication
                    </a>
                    <a href="{{ url(route('media-coverage')) }}"
                        class="blog_filter_btn @if(request()->routeIs('media-coverage') ) active @endif">
                        Media Coverage
                    </a>
                    <a href="{{ url(route('deal-update')) }}"
                        class="blog_filter_btn @if(request()->routeIs('deal-update') ) active @endif">
                        Deal Update
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>


<!----================================= category Breadcrumb ==================---------------------->