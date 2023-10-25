<form id="add_team_form" action="{{ route('team.create') }}" method="post" enctype="multipart/form-data">
    @csrf
    <div class="row">
        <div class="col-sm-4">
            <div class="form-group mb-3">
                <label for="name">Name</label>
                <input type="text" class="form-control" name="name" id="name" required>
            </div>
        </div>        
        <div class="col-sm-4">
            <div class="form-group mb-3">
                <label for="image">Image</label>
                <input type="file" class="form-control" name="image" id="image" required>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="form-group mb-3">
                <label for="phone">Phone</label>
                <input type="text" class="form-control" name="phone" id="phone" required>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="form-group mb-3">
                <label for="email">Email</label>
                <input type="email" class="form-control" name="email" id="email" required>
            </div>
        </div>    
        <div class="col-sm-4">
            <div class="form-group mb-3">
                <label for="designation">Designation</label>
                <input type="text" class="form-control" name="designation" id="designation" required>
            </div>
        </div>        
        <div class="col-sm-4">
            <div class="form-group mb-3">
                <label for="linkedin_link">LinkedIn Link</label>
                <input type="url" class="form-control" name="linkedin_link" id="linkedin_link" required>
            </div>
        </div>            
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label for="about">About</label>
                <textarea class="form-control" name="about" id="about" rows="5" required></textarea>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label for="description">Description</label>
                <textarea class="form-control" name="description" id="description" rows="5" required></textarea>
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
    initValidate('#add_team_form');
});

$("#add_team_form").submit(function(e) {
    var form = $(this);
    ajaxSubmit(e, form, responseHandler);
});

var responseHandler = function(response) {
    location.reload();
}
</script>