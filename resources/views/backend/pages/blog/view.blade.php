<div id="blog-details">
<div class="row">
   <div class="col-md-6">
       <p><strong>Blog Title:</strong> {{$blog->title}}</p>
   </div>
   
   <div class="col-md-6">
       <p><strong>Slug:</strong> {{$blog->slug}}</p>
   </div>
   
   <div class="col-md-12">
        <p><strong>Short Description:</strong> {{$blog->short_description}}</p>
   </div>
   
   <div class="col-md-12">
        <p><strong>Image:</strong></p> <img src="{{ asset('storage/' . $blog->main_image) }}" class="img-thumbnail">
   </div>
   
   <div class="col-md-12">
        <p><strong>Content:</strong>@php echo html_entity_decode(html_entity_decode($blog->content)) @endphp</p>
   </div>
</div>
</div>