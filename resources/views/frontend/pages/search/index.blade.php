@extends('frontend.layouts.app')

@section('page.content')
<section>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                @if ($blogs->isEmpty() && $practiceAreas->isEmpty())
                    <h3>No data found</h3>
                @else
                @foreach($blogs as $blog)
                    <div>
                        <h3>{{ $blog->title }}</h3>
                        <p>{{ $blog->short_description }}</p>
                        @php
                            $category = DB::table('blog_categories')
                                ->where('id', json_decode($blog->blog_category_ids)[0])
                                ->first();
                        @endphp
                        <a href="{{ route('blog.detail', ['category' => $category->slug, 'slug' => $blog->slug]) }}">Read More</a>
                    </div>
                @endforeach

                @foreach($practiceAreas as $practiceArea)
                    <div>
                        <h3>{{ $practiceArea->title }}</h3>
                        <p>{{ $practiceArea->short_description }}</p>
                        <a href="{{ route('practicearea-detail', $practiceArea->slug) }}">Read More</a>
                    </div>
                @endforeach
                @endif
            </div>
        </div>
    </div>
</section>
@endsection