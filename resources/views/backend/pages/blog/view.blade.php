<div id="blog-details">
    <p><strong>Blog Title:</strong> {{$blog->title}}</p>
    <p><strong>Short Description:</strong> {{$blog->short_description}}</p>
    <p><strong>Slug:</strong> {{$blog->slug}}</p>
    <p><strong>Image:</strong></p> <img src="{{ asset('storage/' . $blog->main_image) }}" class="img-thumbnail">
    <p><strong>Content:</strong>@php echo html_entity_decode(html_entity_decode($blog->content)) @endphp</p>
</div>