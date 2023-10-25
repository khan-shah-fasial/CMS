<form id="add_blogs_form" action="{{url(route('blogs.create'))}}" method="post" enctype="multipart/form-data">
    @csrf
    <div class="row">
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Blog Title</label>
                <input type="text" class="form-control" name="title" value="" required>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Category</label>
                <select class="form-select" name="blog_category_ids[]" required>
                    <option value="">Select blog Category</option>
                    @foreach($blogcategory as $row)
                        <option value="{{ $row->id }}">{{ $row->name }}</option>
                    @endforeach
                </select> 
            </div>
        </div>
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Slug</label>
                <input type="text" class="form-control" name="slug" value="" required>
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
                <input type="text" class="form-control" name="short_description" value="" required>
            </div>
        </div> 
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Content</label>
                <textarea class="form-control" name="content" rows="4" required></textarea>
            </div>
        </div>
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Meta Title</label>
                <input type="text" class="form-control" name="meta_title" value="" required>
            </div>
        </div> 
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Meta Description</label>
                <textarea class="form-control" name="meta_description" rows="3" required></textarea>
            </div>
        </div>
        <input type="hidden" class="form-control" name="user_id" value="{{ auth()->user()->id }}" required>
        <div class="col-sm-12">
            <div class="form-group mb-3 text-end">
                <button type="submit" class="btn btn-block btn-primary">Create</button>
            </div>
        </div>
    </div>
</form>

<script>
$(document).ready(function() {
    initValidate('#add_blogs_form');
    initSelect2('.select2');
});

$("#add_blogs_form").submit(function(e) {
    var form = $(this);
    ajaxSubmit(e, form, responseHandler);
});

var responseHandler = function(response) {
    location.reload();
}
</script>