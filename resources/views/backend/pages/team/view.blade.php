<div id="team-details">
    <p><strong>Name:</strong> {{$team->name}}</p>
    <p><strong>Phone:</strong> {{$team->phone}}</p>
    <p><strong>Email:</strong> {{$team->email}}</p>
    <p><strong>Designation:</strong> {{$team->designation}}</p>
    <p><strong>LinkedIn Link:</strong> <a href="{{$team->linkedin_link}}" target="_blank">{{$team->linkedin_link}}</a></p>
    <p><strong>About:</strong> {{ strip_tags($team->about) }}</p>
    <p><strong>Practice Area:</strong> {{ strip_tags($team->description) }}</p>
</div>