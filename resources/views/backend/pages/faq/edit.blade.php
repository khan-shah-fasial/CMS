<form id="edit_faq_form" action="{{url(route('backend.update'))}}" method="post" enctype="multipart/form-data">
    @csrf
    <div class="row">
    <div class="col-sm-12">
        <input type="hidden" name="id" value="{{ $faq->id }}">
            <div class="form-group mb-3">
                <label>Question</label>
                <input type="text" class="form-control" name="question" value="{{ $faq->question }}" required>
            </div>
        </div>        
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Answer</label>
                <textarea class="form-control" name="answer" rows="5" required>{{ $faq->answer }}</textarea>
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
    initValidate('#edit_faq_form');
});

$("#edit_faq_form").submit(function(e) {
    var form = $(this);
    ajaxSubmit(e, form, responseHandler);
});

var responseHandler = function(response) {
    location.reload();
}
</script>