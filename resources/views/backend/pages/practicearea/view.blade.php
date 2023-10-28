<div id="practicearea-details">
    <p><strong>Service Title:</strong> {{ $practicearea->title }}</p>
    <p><strong>Short Description:</strong> {{ $practicearea->short_description }}</p>
    <p><strong>Slug:</strong> {{ $practicearea->slug }}</p>
    <p><strong>Thumnail Image:</strong></p> <img src="{{ asset('storage/' . $practicearea->thumnail_image) }}" class="img-thumbnail">
    <p><strong>Content:</strong> {{ strip_tags($practicearea->content) }}</p>
    <p><strong>Why Choose Us:</strong> {{ strip_tags($practicearea->why_choose_us) }}</p>
    <p><strong>Breadcrumb Title:</strong> {{ $practicearea->breadcrumb_title }}</p>
    <p><strong>Breadcrumb Subtitle:</strong> {{ $practicearea->breadcrumb_subtitle }}</p>
    <p><strong>Breadcrumb Image:</strong></p> <img src="{{ asset('storage/' . $practicearea->breadcrumb_image) }}" class="img-thumbnail">
    <p><strong>Section Image:</strong></p> <img src="{{ asset('storage/' . $practicearea->section_image) }}" class="img-thumbnail">
</div>