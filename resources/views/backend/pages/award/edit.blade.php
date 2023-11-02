<form id="edit_award_form" action="{{url(route('award.update'))}}" method="post" enctype="multipart/form-data">
    @csrf

    <div class="row">
        <input type="hidden" name="id" value="{{ $award->id }}">
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Title</label>
                <input type="text" class="form-control" name="title" value="{{ $award->title }}" required>
            </div>
        </div>
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Image <span class="red">*</span> <span class="font-size11">(Max file size 10kb - 190*64)</span></label>
                <input class="form-control" type="file" id="image" name="image">
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
    initValidate('#edit_award_form');
});

$("#edit_award_form").submit(function(e) {
    var form = $(this);
    ajaxSubmit(e, form, responseHandler);
});

var responseHandler = function(response) {
    location.reload();
}
</script>