<form id="add_newscategory_form" action="{{url(route('newscategory.create'))}}" method="post" enctype="multipart/form-data">
    @csrf
    <div class="row">
    <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Name</label>
                <input type="text" class="form-control" name="name" value="" required>
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
    initValidate('#add_newscategory_form');
});

$("#add_newscategory_form").submit(function(e) {
    var form = $(this);
    ajaxSubmit(e, form, responseHandler);
});

var responseHandler = function(response) {
    location.reload();
}
</script>