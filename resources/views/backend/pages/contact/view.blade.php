<div id="contact-details">
    @if($contact->name)
    <p><strong>Name:</strong> {{$contact->name}}</p>
    @endif   
    @if($contact->email)
    <p><strong>Email:</strong> {{$contact->email}}</p>
    @endif
    @if($contact->phone)
    <p><strong>Phone:</strong> {{$contact->phone}}</p>
    @endif
    @if($contact->services)
    <p><strong>Services:</strong> {{$contact->services}}</p>
    @endif
    @if($contact->description)
    <p><strong>Description:</strong> {{$contact->description}}</p>
    @endif
    @if($contact->other_info)
    <p><strong>Other Info:</strong> {{$contact->other_info}}</p>
    @endif
    @if($contact->cv)
    <p><strong>CV:</strong> <a target="_blank" href="{{ asset('storage/' . $contact->cv) }}">View</a></p>
    @endif
    @if($contact->qualification)
    <p><strong>Qualification:</strong> {{$contact->qualification}}</p>
    @endif    
    @if($contact->url)
    <p><strong>Page:</strong> <a target="_blank" href="{{$contact->url}}">{{$contact->url}}</a></p>
    @endif
    @if($contact->section)
    <p><strong>Section:</strong> {{$contact->section}}</p>
    @endif
</div>