<form id="add_faq_form" action="{{url(route('faq.create'))}}" method="post" enctype="multipart/form-data">
    @csrf
    <div class="row">
    <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Question <span class="red">*</span></label>
                <input maxlength="255" type="text" class="form-control" name="question" value="" required>
            </div>
        </div>        
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Answer <span class="red">*</span></label>
                <textarea class="trumbowyg form-control" name="answer" rows="5" required></textarea>
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
    initValidate('#add_faq_form');
    initTrumbowyg('.trumbowyg');
});

$("#add_faq_form").submit(function(e) {
    var form = $(this);
    ajaxSubmit(e, form, responseHandler);
});

var responseHandler = function(response) {
    location.reload();
}
</script>