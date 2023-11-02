<form id="edit_blogcategory_form" action="{{url(route('blogcategory.update'))}}" method="post" enctype="multipart/form-data">
    @csrf
    <div class="row">
    <div class="col-sm-12">
        <input type="hidden" name="id" value="{{ $blogcategory->id }}">
            <div class="form-group mb-3">
                <label>Name <span class="red">*</span></label>
                <input type="text" class="form-control" name="name" value="{{ $blogcategory->name }}" required>
            </div>
        </div>        
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Slug <span class="red">*</span></label>
                <input type="text" class="form-control" name="slug" value="{{ $blogcategory->slug }}" @if(in_array($blogcategory->slug, ['blog', 'news', 'deal-update'])) readonly @endif required>
            </div>
        </div>
        <input type="hidden" name="parent_id" value="{{ $blogcategory->parent_id }}"> 
        <div class="col-sm-12">
            <div class="form-group mb-3 text-end">
                <button type="submit" class="btn btn-block btn-primary">Update</button>
            </div>
        </div>
    </div>
</form>

<script>
$(document).ready(function() {
    initValidate('#edit_blogcategory_form');
});

$("#edit_blogcategory_form").submit(function(e) {
    var form = $(this);
    ajaxSubmit(e, form, responseHandler);
});

var responseHandler = function(response) {
    location.reload();
}
</script>