<form id="edit_author1_form" action="{{url(route('user.reset'))}}" method="post" enctype="multipart/form-data">
    @csrf
    <div class="row">
    <div class="col-sm-12">
        <input type="hidden" name="id" value="{{ $author->id }}">
            <div class="form-group mb-3">
                <label>Password <span class="red">*</span></label>
                <input type="password" class="form-control" name="password" value="" required>
            </div>
        </div>        
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Conform Password <span class="red">*</span></label>
                <input type="password" class="form-control" name="password_confirmation" value="" required>
            </div>
        </div> 
        <div class="col-sm-12">
            <div class="form-group mb-3 text-end">
                <button type="submit" class="btn btn-block btn-primary">Update</button>
            </div>
        </div>
    </div>
</form>

<script>
$(document).ready(function() {
    initValidate('#edit_author1_form');
});

$("#edit_author1_form").submit(function(e) {
    var form = $(this);
    ajaxSubmit(e, form, responseHandler);
});

var responseHandler = function(response) {
    location.reload();
}
</script>