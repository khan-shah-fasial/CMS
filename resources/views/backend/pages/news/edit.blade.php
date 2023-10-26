<form id="edit_news_form" action="{{url(route('news.update'))}}" method="post" enctype="multipart/form-data">
    @csrf
    <div class="row">
        <input type="hidden" name="id" value="{{ $news->id }}">
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>News Title</label>
                <input type="text" class="form-control" name="title" value="{{ $news->title }}" required>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Category</label>
                <select class="form-select select2" name="news_category_ids[]" multiple required>
                    <option value="" disabled>Select News Category</option>
                    @foreach($newscategory as $row)
                        <option value="{{ $row->id }}" @if(in_array($row->id, json_decode($news->news_category_ids, true))) selected @endif>
                            {{ $row->name }}
                        </option>
                    @endforeach
                </select> 
            </div>
        </div>
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Slug</label>
                <input type="text" class="form-control" name="slug" value="{{ $news->slug }}" required>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Image</label>
                <input class="form-control" type="file" id="image" name="image">
            </div>
        </div>
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Short Description</label>
                <input type="text" class="form-control" name="short_description" value="{{ $news->short_description }}" required>
            </div>
        </div> 
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Content</label>
                <textarea class="form-control trumbowyg" name="content" rows="5" required>{{ $news->content }}</textarea>
            </div>
        </div>
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Meta Title</label>
                <input type="text" class="form-control" name="meta_title" value="{{ $news->meta_title }}" required>
            </div>
        </div> 
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Meta Description</label>
                <textarea class="form-control" name="meta_description" rows="3" required>{{ $news->meta_description }}</textarea>
            </div>
        </div>
        <input type="hidden" class="form-control" name="user_id" value="{{ auth()->user()->id }}" required>
        <div class="col-sm-12">
            <div class="form-group mb-3 text-end">
                <button type="submit" class="btn btn-block btn-primary">Update</button>
            </div>
        </div>
    </div>
</form>

<script>
$(document).ready(function() {
    initValidate('#edit_news_form');
    initTrumbowyg('.trumbowyg');
    initSelect2('.select2');
});

$("#edit_news_form").submit(function(e) {
    var form = $(this);
    ajaxSubmit(e, form, responseHandler);
});

var responseHandler = function(response) {
    location.reload();
}
</script>