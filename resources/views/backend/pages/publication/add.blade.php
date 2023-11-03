<form id="add_publication_form" action="{{url(route('publication.create'))}}" method="post" enctype="multipart/form-data">
    @csrf
    <div class="row">
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Title <span class="red">*</span></label>
                <input maxlength="255" type="text" class="form-control" name="title" value="" required>
            </div>
        </div> 
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Link <span class="red">*</span></label>
                <input type="url" class="form-control" name="url" id="linkedin_link" required>
            </div>
        </div>
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Image <span class="red">*</span> <span class="font-size11">(Max file size 80kb - 1125*460)</span></label>
                <input class="form-control" type="file" id="image" name="image" accept="image/*" required>
            </div>
        </div> 
        <div class="col-sm-12">
            <div class="form-group mb-3 text-end">
                <button type="submit" class="btn btn-block btn-primary">Create</button>
            </div>
        </div>
    </div>
</form>

<script>
$(document).ready(function() {
    initValidate('#add_publication_form');
});

$("#add_publication_form").submit(function(e) {
    var form = $(this);
    ajaxSubmit(e, form, responseHandler);
});

var responseHandler = function(response) {
    location.reload();
}
</script>