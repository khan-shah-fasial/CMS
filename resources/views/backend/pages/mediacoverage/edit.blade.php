<form id="edit_mediacoverage_form" action="{{url(route('mediacoverage.update'))}}" method="post" enctype="multipart/form-data">
    @csrf
    <div class="row">
        <div class="col-sm-12">
        <input type="hidden" name="id" value="{{ $mediacoverage->id }}">
            <div class="form-group mb-3">
                <label>Title <span class="red">*</span></label>
                <input maxlength="255" type="text" class="form-control" name="title" value="{{ $mediacoverage->title }}" required>
            </div>
        </div>
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Link <span class="red">*</span></label>
                <input type="url" class="form-control" name="url" id="linkedin_link" value="{{ $mediacoverage->url }}" required>
            </div>
        </div>
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Image <span class="font-size11">(Max file size 50kb - 500*500)</span></label>
                <input class="form-control" type="file" id="image" name="image" accept="image/*">
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
    initValidate('#edit_mediacoverage_form');
});

$("#edit_mediacoverage_form").submit(function(e) {
    var form = $(this);
    ajaxSubmit(e, form, responseHandler);
});

var responseHandler = function(response) {
    location.reload();
}
</script>