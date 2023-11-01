<div id="practicearea-details">
    <p><strong>Title:</strong> {{ $practicearea->title }}</p>
    <hr>
    <p><strong>Short Description:</strong> {{ $practicearea->short_description }}</p>
    <hr>
    <p><strong>Slug:</strong> <a target="_blank" href="{{url(route('practicearea-detail', $practicearea->slug))}}">{{ $practicearea->slug }}</a></p>
    <hr>
    <p><strong>Thumnail Image:</strong></p> <img src="{{ asset('storage/' . $practicearea->thumnail_image) }}" class="img-thumbnail">
    <hr>
    <p><strong>Content:</strong> @php echo html_entity_decode($practicearea->content) @endphp</p>
    <hr>
    <p><strong>Section Image:</strong></p> <img src="{{ asset('storage/' . $practicearea->section_image) }}" class="img-thumbnail">
    <hr>
    <p><strong>FAQs:</strong> 
        @php $i = 1; $faqs = json_decode($practicearea->faq, true) @endphp
        @foreach($faqs as $faq)
            @foreach($faq as $question => $answer)
                <p class="mb-0"><strong>{{ $i++ . ' ' . $question }}</strong></p>
                <p class="mb-0">@php echo html_entity_decode($answer) @endphp</p>
                <br>
            @endforeach
        @endforeach
    </p>
    <hr>
    <p><strong>Why Choose Us:</strong> @php echo html_entity_decode($practicearea->why_choose_us) @endphp</p> 
    <hr>
    <p><strong>Breadcrumb Title:</strong> {{ $practicearea->breadcrumb_title }}</p>
    <hr>
    <p><strong>Breadcrumb Subtitle:</strong> {{ $practicearea->breadcrumb_subtitle }}</p>
    <hr>
    <p><strong>Breadcrumb Image:</strong></p> <img src="{{ asset('storage/' . $practicearea->breadcrumb_image) }}" class="img-thumbnail"> 
</div>