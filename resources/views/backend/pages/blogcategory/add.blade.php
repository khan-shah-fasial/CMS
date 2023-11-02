<form id="add_blogcategory_form" action="{{url(route('blogcategory.create'))}}" method="post" enctype="multipart/form-data">
    @csrf
    <div class="row">
    <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Name <span class="red">*</span></label>
                <input type="text" class="form-control" name="name" value="" required>
            </div>
        </div>      
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Slug <span class="red">*</span></label>
                <input type="text" class="form-control" name="slug" value="" required>
            </div>
        </div>
        <input type="hidden" name="parent_id" value="0">
        <div class="col-sm-12">
            <div class="form-group mb-3 text-end">
                <button type="submit" class="btn btn-block btn-primary">Create</button>
            </div>
        </div>
    </div>
</form>

<script>
$(document).ready(function() {
    initValidate('#add_blogcategory_form');
});

$("#add_blogcategory_form").submit(function(e) {
    var form = $(this);
    ajaxSubmit(e, form, responseHandler);
});

var responseHandler = function(response) {
    location.reload();
}
</script>