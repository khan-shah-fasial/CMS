<form id="add_testimonial_form" action="{{url(route('testimonial.create'))}}" method="post" enctype="multipart/form-data">
    @csrf
    <div class="row">
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Name <span class="red">*</span></label>
                <input type="text" class="form-control" name="name" value="" required>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Designation <span class="red">*</span></label>
                <input type="text" class="form-control" name="designation" value="" required>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Profile Image <span class="red">*</span></label>
                <input class="form-control" type="file" id="image" name="image" required>
            </div>
        </div> 
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Rating <span class="red">*</span></label>
                <select class="form-select" name="rating" required>
                    <option value="">Please Select the Rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
            </div>
        </div> 
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Comment <span class="red">*</span></label>
                <textarea class="form-control" name="comment" rows="3" required></textarea>
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
    initValidate('#add_testimonial_form');
});

$("#add_testimonial_form").submit(function(e) {
    var form = $(this);
    ajaxSubmit(e, form, responseHandler);
});

var responseHandler = function(response) {
    location.reload();
}
</script>