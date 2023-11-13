<form id="edit_blog_form" action="{{url(route('blogs.update'))}}" method="post" enctype="multipart/form-data">
    @csrf
    <div class="row">
	
	<div class="col-md-6">
		<div class="row">
		   <input type="hidden" name="id" value="{{ $blog->id }}">
			<div class="col-sm-6">
				<div class="form-group mb-3">
					<label>Blog Title <span class="red">*</span></label>
					<input maxlength="191" type="text" class="form-control" name="title" value="{{ $blog->title }}" required>
				</div>
			</div>
			 <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Image</label>
                <input accept="image/*" class="form-control" type="file" id="image" name="image">
            </div>
        </div>
			 
		
		<div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Slug <span class="red">*</span></label>
                <input maxlength="191" type="text" class="form-control" name="slug" value="{{ $blog->slug }}" required>
            </div>
        </div>
       
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Short Description <span class="red">*</span></label>
                <input type="text" class="form-control" name="short_description" value="{{ $blog->short_description }}" required>
            </div>
        </div>
<div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Category <span class="red">*</span></label>
                <select class="form-select select2" name="blog_category_ids[]" multiple required>
                    <option value="" disabled>Select blog Category</option>
                    @foreach($blogcategory as $row)
                        <option value="{{ $row->id }}" @if(in_array($row->id, json_decode($blog->blog_category_ids, true))) selected @endif>
                            {{ $row->name }}
                        </option>
                    @endforeach
                </select> 
            </div>
        </div>
<div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Meta Title <span class="red">*</span></label>
                <input type="text" class="form-control" name="meta_title" value="{{ $blog->meta_title }}" required>
            </div>
        </div> 
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Meta Description <span class="red">*</span></label>
                <textarea class="form-control" name="meta_description" rows="3" required>{{ $blog->meta_description }}</textarea>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Author</label>
                <select class="select2 form-select" name="user_id" required>
                    <option value="" disabled>Select Author</option>
                    @foreach($users as $row)
                        <option value="{{ $row->id }}" @if($blog->user_id == $row->id) selected @endif>{{ $row->name }}</option>
                    @endforeach
                </select> 
            </div>
        </div>         
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Updated Date <span class="red">*</span></label>
                <input type="datetime-local" class="form-control" name="updated_at" value="{{ date('Y-m-d H:i:s', strtotime($blog->updated_at)) }}" required>
            </div>
        </div>  		
		
		
	</div>
	</div>
	<div class="col-md-6">
            <div class="form-group mb-3">
                <label>Alt Image</label>
                <input type="text" class="form-control" name="alt_main_image" value="{{ $blog->alt_main_image }}">
            </div>
	        <div class="form-group mb-3">
                <label>Content <span class="red">*</span></label>
                <textarea class="form-control trumbowyg" name="content" rows="5" required>{{ $blog->content }}</textarea>
            </div>
			<div class="form-group mb-3 text-end">
                <button type="submit" class="btn btn-block btn-primary">Update</button>
            </div>
	</div>
	
    </div>
</form>

<script>
$(document).ready(function() {
    initValidate('#edit_blog_form');
    initTrumbowyg('.trumbowyg');
    initSelect2('.select2');
});

$("#edit_blog_form").submit(function(e) {
    var form = $(this);
    ajaxSubmit(e, form, responseHandler);
});

var responseHandler = function(response) {
    location.reload();
}
</script>