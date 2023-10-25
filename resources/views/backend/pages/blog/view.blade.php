<div id="blog-details">
    <p><strong>Blog Title:</strong> {{$blog->title}}</p>
    <p><strong>Short Description:</strong> {{$blog->short_description}}</p>
    <p><strong>Slug:</strong> {{$blog->slug}}</p>
    <p><strong>Image:</strong></p> <img src="{{ asset('storage/' . $blog->main_image) }}" class="img-thumbnail">
    <p><strong>Content:</strong> {{$blog->content}}</p>
</div>