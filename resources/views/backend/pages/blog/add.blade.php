<style>
 pre{
      background-color: #f4f4f4;
      padding: 10px;
      white-space: pre-wrap;
    }
</style>

<form id="add_blogs_form" action="{{url(route('blogs.create'))}}" method="post" enctype="multipart/form-data">
    @csrf
    <div class="row">
	   <div class="col-md-6">
	     <div class="row">
		     <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Title <span class="red">*</span></label>
                <input maxlength="191" type="text" class="form-control" name="title" value="" required>
            </div>
        </div>
		
		<div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Image <span class="red">*</span> <span class="font-size11">(Max file size 100kb - 1120*630)</span></label>
                <input accept="image/*" class="form-control" type="file" id="image" name="image">
            </div>
        </div>
		
		<div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Slug <span class="red">*</span></label>
                <input maxlength="191" type="text" class="form-control" name="slug" value="" required>
            </div>
        </div>
        
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Short Description <span class="red">*</span></label>
                <input type="text" class="form-control" name="short_description" value="" required>
            </div>
        </div> 
		
		<div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Category <span class="red">*</span></label>
                <select class="select2 form-select" name="blog_category_ids[]" multiple required>
                    <option value="" disabled>Select blog Category</option>
                    @foreach($blogcategory as $row)
                        <option value="{{ $row->id }}">{{ $row->name }}</option>
                    @endforeach
                </select> 
            </div>
        </div>
		
		<div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Meta Title <span class="red">*</span></label>
                <input type="text" class="form-control" name="meta_title" value="" required>
            </div>
        </div> 
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Meta Description <span class="red">*</span></label>
                <textarea class="form-control" name="meta_description" rows="3" required></textarea>
            </div>
        </div>
		
		<div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Author</label>
                <select class="select2 form-select" name="user_id[]" id="mySelect" multiple required>
                    <option value="" disabled>Select Author</option>
                    @foreach($users as $row)
                        <option value="{{ $row->id }}">{{ $row->name }}</option>
                    @endforeach
                </select> 
            </div>
        </div>

        <input type="hidden" name="sortedUserIds" id="sortedUserIds">

        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Updated Date <span class="red">*</span></label>
                <input type="datetime-local" class="form-control" name="updated_at" value="" required>
            </div>
        </div>
		
		 </div>
	   </div>
	
	
        <div class="col-md-6">
            <div class="form-group mb-3">
                <label>Alt Image</label>
                <input type="text" class="form-control" name="alt_main_image" value="">
            </div>
		   <div class="form-group mb-3">
                <label>Content <span class="red">*</span></label>
                <textarea class="form-control trumbowyg" name="content" rows="5" required></textarea>
            </div>
			 <div class="form-group mb-3 text-end">
                <button type="submit" class="btn btn-block btn-primary">Create</button>
            </div>
		</div>
        
        
    </div>
</form>

<pre>
<h4 class="mb-0">Blog Quote Code</h4>
&lt;div class="quote_section"&gt;
  &lt;div class="row"&gt;
    &lt;div class="col-md-1"&gt; 
      &lt;i class="fa fa-quote-left" aria-hidden="true"&gt;&lt;/i&gt;
    &lt;/div&gt;
    &lt;div class="col-md-11"&gt;
      &lt;p &gt;A project office allows a foreign company to have a presence in India for the sole purpose of executing a project in India. Such offices can only undertake or carry on activities that relate to and are incidental to the execution of their project.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>


<script>
$(document).ready(function() {
    initValidate('#add_blogs_form');
    initTrumbowyg('.trumbowyg');
    initSelect2('.select2');
});

$("#add_blogs_form").submit(function(e) {
    var form = $(this);
    ajaxSubmit(e, form, responseHandler);
});

var responseHandler = function(response) {
    location.reload();
}
</script>

<script>
    $(document).ready(function () {
        // Initialize Select2
        $('#mySelect').select2();

        // Store selected values in an array
        var selectedValues = [];

        // Counter for dynamic value
        var dynamicValue = 1;

        // Update the array when a selection is made or removed
        $('#mySelect').on('select2:select select2:unselect', function (e) {
            updateSelectedValues();
        });

        function updateSelectedValues() {
            // Get selected values directly from Select2
            var selectedOptions = $('#mySelect').select2('data');

            // Map the selected values to the desired format with initially assigned order
            selectedValues = selectedOptions.map(function (option) {
                // Check if the order is already assigned for this ID
                var existingItem = selectedValues.find(function (item) {
                    return item.id === option.id;
                });

                // If the order is not assigned, assign it based on the dynamicValue
                var order = existingItem ? existingItem.order : dynamicValue++;

                return {
                    id: option.id,
                    order: order
                };
            });

            // Sort the array based on the order in ascending order
            selectedValues.sort(function (a, b) {
                return a.order - b.order;
            });

            // Log the sorted array (you can remove this line in production)
            //console.log(selectedValues);

            // Extract only the 'id' values and append them to the hidden input field
            var sortedIds = selectedValues.map(item => item.id);
            $('#sortedUserIds').val(JSON.stringify(sortedIds));
        }

        // Submit the form
        $('form').submit(function () {
            // Ensure the hidden input field is updated before submitting
            updateSelectedValues();
        });
    });
</script>