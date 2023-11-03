<div id="blog-details">
<div class="row">
   <div class="col-md-6">
       <p><strong>Blog Title:</strong> {{$blog->title}}</p>
   </div>
   
   <div class="col-md-6">
       <p><strong>Slug:</strong> 
       <a target="_blank" href="{{ url(route('blog.detail', ['category' => DB::table('blog_categories')->where('id', json_decode($blog->blog_category_ids)[0])->first()->slug, 'slug' => $blog->slug] )) }}">
   {{$blog->slug}}
</a> 
     </p>
   </div>
   
   <div class="col-md-12">
        <p><strong>Short Description:</strong> {{$blog->short_description}}</p>
   </div>

   <div class="col-md-12">
    <p><strong>Categories:</strong>
     @foreach(json_decode($blog->blog_category_ids) as $key => $categoryId)
        <?php $category = DB::table('blog_categories')->where('id', $categoryId)->first(); ?>
        {{ $category->name }}
        @if ($key < count(json_decode($blog->blog_category_ids)) - 1)
            ,
        @endif
     @endforeach
    </p>
</div>  
   
   <div class="col-md-12">
        <p><strong>Image:</strong></p> <img src="{{ asset('storage/' . $blog->main_image) }}" class="img-thumbnail">
   </div>
   
   <div class="col-md-12">
        <p><strong>Content:</strong>@php echo html_entity_decode(html_entity_decode($blog->content)) @endphp</p>
   </div>
</div>
</div>