<form id="edit_newscategory_form" action="{{url(route('newscategory.update'))}}" method="post" enctype="multipart/form-data">
    @csrf
    <div class="row">
    <div class="col-sm-12">
        <input type="hidden" name="id" value="{{ $newscategory->id }}">
            <div class="form-group mb-3">
                <label>Name</label>
                <input type="text" class="form-control" name="name" value="{{ $newscategory->name }}" required>
            </div>
        </div>
        <input type="hidden" name="parent_id" value="{{ $newscategory->parent_id }}"> 
        <div class="col-sm-12">
            <div class="form-group mb-3 text-end">
                <button type="submit" class="btn btn-block btn-primary">Update</button>
            </div>
        </div>
    </div>
</form>

<script>
$(document).ready(function() {
    initValidate('#edit_newscategory_form');
});

$("#edit_newscategory_form").submit(function(e) {
    var form = $(this);
    ajaxSubmit(e, form, responseHandler);
});

var responseHandler = function(response) {
    location.reload();
}
</script>