@extends('frontend.layouts.app')

@section('page.content')
<section>
    <div class="container">
        <div class="row">
                @if ($blogs->isEmpty() && $practiceAreas->isEmpty())
                    <h3>No data found</h3>
                @else
                @foreach($blogs as $blog)
                    <div class="col-md-6">
					<div class="searc_boxex">
                        <h3>{{ $blog->title }}</h3>
                        <p>{{ $blog->short_description }}</p>
                        @php
                            $category = DB::table('blog_categories')
                                ->where('id', json_decode($blog->blog_category_ids)[0])
                                ->first();
                        @endphp
                        <a href="{{ route('blog.detail', ['category' => $category->slug, 'slug' => $blog->slug]) }}">Read More</a>
                    </div>
					</div>
                @endforeach

                @foreach($practiceAreas as $practiceArea)
				<div class="col-md-6">
                    <div class="searc_boxex">
                        <h3>{{ $practiceArea->title }}</h3>
                        <p>{{ $practiceArea->short_description }}</p>
                        <a href="{{ route('practicearea-detail', $practiceArea->slug) }}">Read More</a>
                    </div>
                    </div>
                @endforeach
                @endif
        </div>
    </div>
</section>
@endsection