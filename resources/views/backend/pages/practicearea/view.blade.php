<div id="practicearea-details">

               <div class="card">
					<div class="card-body">
					<div class="row">
					    <div class="col-md-12"><h4 class="header-title"><b>Overview</b></h4><hr></div>
						<div class="col-md-4"><p><strong>Title:</strong> {{ $practicearea->title }}</p></div>
						<div class="col-md-4"><p><strong>Short Description:</strong> {{ $practicearea->short_description }}</p></div>
						<div class="col-md-4"><p><strong>Slug:</strong> <a target="_blank" href="{{url(route('practicearea-detail', $practicearea->slug))}}">{{ $practicearea->slug }}</a></p></div>
						<hr>
						<div class="col-md-12"><p><strong>Content:</strong> @php echo html_entity_decode($practicearea->content) @endphp</p></div>
						<div class="col-md-12"> <p><strong>FAQs:</strong> 
							@php $i = 1; $faqs = json_decode($practicearea->faq, true) @endphp
							@foreach($faqs as $faq)
								@foreach($faq as $question => $answer)
									<p class="mb-0"><strong>{{ $i++ . ' ' . $question }}</strong></p>
									<p class="mb-0">@php echo html_entity_decode($answer) @endphp</p>
									<br>
								@endforeach
							@endforeach
						   </p>
						</div>
						<div class="col-md-12"><p><strong>Why Choose Us:</strong> @php echo html_entity_decode($practicearea->why_choose_us) @endphp</p></div>
						
				    </div>
				    </div>
				</div>
				
				<div class="card">
					<div class="card-body">
						<div class="row">
						<div class="col-md-12"><h4 class="header-title"><b>IMAGE</b></h4><hr></div>
						<div class="col-md-12"><p><strong>Thumnail Icon:</strong></p> @if($practicearea->thumnail_image) <img src="{{ asset('storage/' . $practicearea->thumnail_image) }}" class="img-thumbnail"> @endif</div>
						<div class="col-md-12"><p><strong>Section Image:</strong></p> @if($practicearea->section_image) <img src="{{ asset('storage/' . $practicearea->section_image) }}" class="img-thumbnail"> @endif</div>
						<div class="col-md-12"><p><strong>Breadcrumb Image:</strong></p> @if($practicearea->breadcrumb_image) <img src="{{ asset('storage/' . $practicearea->breadcrumb_image) }}" class="img-thumbnail"> @endif</div>
						</div>
					</div>
				</div>
				
				<div class="card">
					<div class="card-body">
						<div class="row">
						<div class="col-md-12"><h4 class="header-title"><b>SEO</b></h4><hr></div>
						<div class="col-md-12"><p><strong>Breadcrumb Title:</strong> {{ $practicearea->breadcrumb_title }}</p></div>
						<div class="col-md-12"><p><strong>Breadcrumb Subtitle:</strong> {{ $practicearea->breadcrumb_subtitle }}</p></div>
						</div>
					</div>
				</div>
</div>