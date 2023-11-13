@extends('frontend.layouts.app')

@section('page.title', 'Ahlawat Associates: Top Lawyers &amp; Law Firms in Delhi, India')

@section('page.description', 'Ahlawat &amp; Associates is one of the best law firms in Delhi, India. We provide legal assistance for startups, FDI, Property law, IP, and more')

@section('page.type', 'website')

@section('page.schema')
@php 
$count = count($faq);
$i = 1; 
@endphp
<!------------------------ Faq Schema ---------------------------------->

<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      @foreach ($faq as $row)
        {
          "@type": "Question",
          "name": "{{ $row->question }}",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "@php echo str_replace('&nbsp;',' ',htmlspecialchars_decode(strip_tags($row->answer))) @endphp"
          }
        }@if($i < $count),@endif
        @php $i++; @endphp
      @endforeach
    ]
  }
</script>
  

<!------------------------- Faq Schema ------------------------------------->

@endsection

@section('page.content')


    <!-- -------------------- faq banner start ---------------- -->

    <section class="faq_page_banner breadcrumes_padd">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="text-center">
              <h1 class="heading">Faq</h1>
              <nav
                aria-label="breadcrumb"
                class="breadcrumb d-flex justify-content-center mb-0"
              >
                <ol class="breadcrumb mb-0">
                  <li class="breadcrumb-item home">
                    <a href="{{ url(route('index')) }}">Home</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Faq
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- -------------------- faq banner end   ---------------- -->
    <!-- -------------------- faq accordion start ---------------- -->

    <section class="faq_page_accordion">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 padd00mb">
            <div class="accordion" id="accordionExample">
              @php $i = 1; @endphp 
              @foreach ($faq as $row)

                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading{{$i}}">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse{{$i}}"
                      aria-expanded="true"
                      aria-controls="collapse{{$i}}"
                    >
                      <strong>{{ $row->question }}</strong>
                    </button>
                  </h2>
                  <div
                    id="collapse{{$i}}"
                    class="accordion-collapse collapse @if($i == 1) show @endif"
                    aria-labelledby="heading{{$i}}"
                    data-bs-parent="#accordionExample"
                  >
                    <div
                      class="accordion-body"
                    >
                    @php echo html_entity_decode($row->answer) @endphp
                    </div>
                  </div>
                </div>
                @php $i++ @endphp
              @endforeach

            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- -------------------- faq accordion end   ---------------- -->

    <!-- ---------- service get in touch  start ---------------------- -->

    @include('frontend.component.get_in_touch')

    <!-- -------------- service get in touch  end ---------------------- -->

    <!------------------ awards_section Start -------------------------->
    @include('frontend.component.awards')
    <!------------------ awards_section End -------------------------->

@endsection