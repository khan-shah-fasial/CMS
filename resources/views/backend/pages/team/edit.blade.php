<form id="edit_team_form" action="{{url(route('team.update'))}}" method="post" enctype="multipart/form-data">
    @csrf
    <input type="hidden" name="id" value="{{$team->id}}">
    <div class="row">
	   
        <div class="col-sm-3">
            <div class="form-group mb-3">
                <label for="name">Name <span class="red">*</span></label>
                <input maxlength="70" type="text" class="form-control" name="name" id="name" value="{{$team->name}}" required>
            </div>
        </div>        
        <div class="col-sm-3">
            <div class="form-group mb-3">
                <label for="image">Profile Image <span class="red">*</span> <span class="font-size11">(Max file size 50kb - 250*360)</span></label>
                <input accept="image/*" type="file" class="form-control" name="image" id="image">
            </div>
        </div>
        <div class="col-sm-3">
            <div class="form-group mb-3">
                <label for="phone">Phone</label>
                <input maxlength="70" type="text" class="form-control" name="phone" id="phone" value="{{$team->phone}}">
            </div>
        </div>
        <div class="col-sm-3">
            <div class="form-group mb-3">
                <label for="email">Email</label>
                <input maxlength="70" type="email" class="form-control" name="email" id="email" value="{{$team->email}}">
            </div>
        </div>    
        <div class="col-sm-4">
            <div class="form-group mb-3">
                <label for="designation">Designation <span class="red">*</span></label>
                <input maxlength="70" type="text" class="form-control" name="designation" id="designation" value="{{$team->designation}}" required>
            </div>
        </div>        
        <div class="col-sm-4">
            <div class="form-group mb-3">
                <label for="linkedin_link">LinkedIn Link</label>
                <input maxlength="191" type="url" class="form-control" name="linkedin_link" id="linkedin_link" value="{{$team->linkedin_link}}">
            </div>
        </div> 

         <div class="col-sm-4">
            <div class="form-group mb-3">
                <label for="series">Order</label>
                <input max="10000" type="text" class="form-control" name="series" id="series" value="{{$team->series}}">
            </div>
        </div> 		
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label for="about">About <span class="red">*</span></label>
                <textarea class="form-control trumbowyg" name="about" id="about" rows="5" required>{{$team->about}}</textarea>
            </div>
        </div>
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label for="description">Practice Area <span class="red">*</span></label>
                <textarea class="form-control trumbowyg" name="description" id="description" rows="5" required>{{$team->description}}</textarea>
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
    initValidate('#edit_team_form');
    initTrumbowyg('.trumbowyg');
});

$("#edit_team_form").submit(function(e) {
    var form = $(this);
    ajaxSubmit(e, form, responseHandler);
});

var responseHandler = function(response) {
    location.reload();
}
</script>