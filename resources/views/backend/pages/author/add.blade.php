<form id="add_author_form" action="{{url(route('author.create'))}}" method="post" enctype="multipart/form-data">
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
                <label>Email <span class="red">*</span></label>
                <input type="email" class="form-control" name="email" value="" required>
            </div>
        </div>
        <input type="hidden" class="form-control" name="role_id" value="0">    
        <div class="col-sm-12">
            <div class="form-group mb-3 text-end">
                <button type="submit" class="btn btn-block btn-primary">Create</button>
            </div>
        </div>
    </div>
</form>

<script>
$(document).ready(function() {
    initValidate('#add_author_form');
});

$("#add_author_form").submit(function(e) {
    var form = $(this);
    ajaxSubmit(e, form, responseHandler);
});

var responseHandler = function(response) {
    location.reload();
}
</script>