<div id="team-details">
    <p><strong>Name:</strong> {{$team->name}}</p>
    <p><strong>Profile Image:</strong> <img src="{{url('storage/'.$team->image)}}"></p>
    <p><strong>Phone:</strong> {{$team->phone}}</p>
    <p><strong>Email:</strong> {{$team->email}}</p>
    <p><strong>Designation:</strong> {{$team->designation}}</p>
    <p><strong>LinkedIn Link:</strong> <a href="{{$team->linkedin_link}}" target="_blank">{{$team->linkedin_link}}</a></p>
    <p><strong>About:</strong> @php echo html_entity_decode($team->about) @endphp</p>
    <p><strong>Practice Area:</strong> @php echo html_entity_decode($team->description) @endphp</p>
    <p><strong>Series:</strong> {{$team->series}}</p>
    <p><strong>Created At:</strong> {{datetimeFormatter($team->created_at)}}</p>
    <p><strong>Updated At:</strong> {{datetimeFormatter($team->updated_at)}}</p>
</div>