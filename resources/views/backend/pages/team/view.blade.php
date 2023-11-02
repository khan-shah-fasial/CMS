<div id="team-details">
<div class="row">
 <div class="col-md-3">
 <p><strong>Name:</strong> {{$team->name}}</p>
 </div>
 
  <div class="col-md-3">
 <p><strong>Phone:</strong> {{$team->phone}}</p>
 </div>
 
  <div class="col-md-3">
  <p><strong>Email:</strong> {{$team->email}}</p>
 </div>
 
  <div class="col-md-3">
 <p><strong>Designation:</strong> {{$team->designation}}</p>
 </div>
 
  <div class="col-md-3">
    <p><strong>LinkedIn Link:</strong> <a href="{{$team->linkedin_link}}" target="_blank">{{$team->linkedin_link}}</a></p>
 </div>
 
  <div class="col-md-3">
 <p><strong>Series:</strong> {{$team->series}}</p>
 </div>
 
 <div class="col-md-3">
 <p><strong>Created At:</strong> {{datetimeFormatter($team->created_at)}}</p>
 </div>
 
 <div class="col-md-3">
 <p><strong>Updated At:</strong> {{datetimeFormatter($team->updated_at)}}</p>
 </div>
 
</div>
    
    <p><strong>Profile Image:</strong> <img src="{{url('storage/'.$team->image)}}"></p>
    
   
    
    
    <p><strong>About:</strong> @php echo html_entity_decode($team->about) @endphp</p>
    <p><strong>Practice Area:</strong> @php echo html_entity_decode($team->description) @endphp</p>
    
    
    
</div>