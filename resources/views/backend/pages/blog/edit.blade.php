<form id="edit_blog_form" action="{{url(route('blogs.update'))}}" method="post" enctype="multipart/form-data">
    @csrf
    <div class="row">
        <input type="hidden" name="id" value="{{ $blog->id }}">
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Blog Title</label>
                <input type="text" class="form-control" name="title" value="{{ $blog->title }}" required>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Category</label>
                <select class="form-select" name="blog_category_ids[]" required>
                    <option value="">Select blog Category</option>
                    @foreach($blogcategory as $row)
                        <option value="{{ $row->id }}" @if(in_array($row->id, json_decode($blog->blog_category_ids, true))) selected @endif>
                            {{ $row->name }}
                        </option>
                    @endforeach
                </select> 
            </div>
        </div>
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Slug</label>
                <input type="text" class="form-control" name="slug" value="{{ $blog->slug }}" required>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Image</label>
                <input class="form-control" type="file" id="image" name="image">
            </div>
        </div>
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Short Description</label>
                <input type="text" class="form-control" name="short_description" value="{{ $blog->short_description }}" required>
            </div>
        </div> 
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Content</label>
                <textarea class="form-control" name="content" rows="4" required>{{ $blog->content }}</textarea>
            </div>
        </div>
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Meta Title</label>
                <input type="text" class="form-control" name="meta_title" value="{{ $blog->meta_title }}" required>
            </div>
        </div> 
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Meta Description</label>
                <textarea class="form-control" name="meta_description" rows="3" required>{{ $blog->meta_description }}</textarea>
            </div>
        </div>
        <input type="hidden" class="form-control" name="user_id" value="{{ auth()->user()->id }}" required>
        <div class="col-sm-12">
            <div class="form-group mb-3 text-end">
                <button type="submit" class="btn btn-block btn-primary">Update</button>
            </div>
        </div>
    </div>
</form>

<script>
$(document).ready(function() {
    initValidate('#edit_blog_form');
});

$("#edit_blog_form").submit(function(e) {
    var form = $(this);
    ajaxSubmit(e, form, responseHandler);
});

var responseHandler = function(response) {
    location.reload();
}
</script>