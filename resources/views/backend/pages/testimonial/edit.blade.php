<form id="edit_testimonial_form" action="{{url(route('testimonial.update'))}}" method="post" enctype="multipart/form-data">
    @csrf

    <div class="row">
        <input type="hidden" name="id" value="{{ $testimonial->id }}">
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Name <span class="red">*</span></label>
                <input type="text" class="form-control" name="name" value="{{ $testimonial->name }}" required>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Designation <span class="red">*</span></label>
                <input type="text" class="form-control" name="designation" value="{{ $testimonial->designation }}" required>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Profile Image <span class="red">*</span></label>
                <input class="form-control" type="file" id="image" name="image">
            </div>
        </div>
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Rating <span class="red">*</span></label>
                <select class="form-select" name="rating" required>
                    <option value="1" {{ $testimonial->rating == 1 ? 'selected' : '' }}>1</option>
                    <option value="2" {{ $testimonial->rating == 2 ? 'selected' : '' }}>2</option>
                    <option value="3" {{ $testimonial->rating == 3 ? 'selected' : '' }}>3</option>
                    <option value="4" {{ $testimonial->rating == 4 ? 'selected' : '' }}>4</option>
                    <option value="5" {{ $testimonial->rating == 5 ? 'selected' : '' }}>5</option>
                </select>
            </div>
        </div>
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Comment <span class="red">*</span></label>
                <textarea class="form-control" name="comment" rows="3" required>{{ $testimonial->comment }}</textarea>
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
    initValidate('#edit_testimonial_form');
});

$("#edit_testimonial_form").submit(function(e) {
    var form = $(this);
    ajaxSubmit(e, form, responseHandler);
});

var responseHandler = function(response) {
    location.reload();
}
</script>