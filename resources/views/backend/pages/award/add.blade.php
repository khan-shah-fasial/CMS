<form id="add_award_form" action="{{url(route('award.create'))}}" method="post" enctype="multipart/form-data">
    @csrf
    <div class="row">
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Title <span class="red">*</span></label>
                <input type="text" class="form-control" name="title" value="" required>
            </div>
        </div>
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Image <span class="red">*</span> <span class="font-size11">(Max file size 10kb - 190*64)</span></label>
                <input class="form-control" type="file" id="image" name="image" required>
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
    initValidate('#add_award_form');
});

$("#add_award_form").submit(function(e) {
    var form = $(this);
    ajaxSubmit(e, form, responseHandler);
});

var responseHandler = function(response) {
    location.reload();
}
</script>