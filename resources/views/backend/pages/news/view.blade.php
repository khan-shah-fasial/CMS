<div id="news-details">
    <p><strong>news Title:</strong> {{$news->title}}</p>
    <p><strong>Short Description:</strong> {{$news->short_description}}</p>
    <p><strong>Slug:</strong> {{$news->slug}}</p>
    <p><strong>Image:</strong></p> <img src="{{ asset('storage/' . $news->main_image) }}" class="img-thumbnail">
    <p><strong>Content:</strong> @php echo html_entity_decode($news->content) @endphp</p>
</div>