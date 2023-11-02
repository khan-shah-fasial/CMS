@php
$practice_Area = DB::table('practice_areas')->where('parent_id', null)->orderBy('series', 'asc')->get();
@endphp
<!--------=============== Popup Form start ==============------------------>
<form class="contact_form" id="add_contact_form" action="{{url(route('contact.create'))}}" method="post"
    enctype="multipart/form-data">
    @csrf
    <input type="hidden" name="section" value="Contact Us Now Form" data-aos-once="true" data-aos="fade-up" />
    <input type="hidden" name="url" value="{{ url()->current() }}" data-aos-once="true" data-aos="fade-up" />
    <h3 data-aos-once="true" data-aos="fade-up">Want to know more</h3>
    <div class="d-flex align-items-center gap-3 mb-3">
        <input type="text" class="form-control" placeholder="Write Your Name..." name="name" data-aos-once="true"
            data-aos="fade-up" />
        <input type="email" class="form-control" placeholder="Write Your Email..." name="email" data-aos-once="true"
            data-aos="fade-up" />
    </div>
    <div class="d-flex align-items-center gap-3 mb-3">
        <input type="number" class="form-control" placeholder="Write Your Phone No" name="phone" data-aos-once="true"
            data-aos="fade-up" />
        <select class="form-select" data-aos-once="true" name="services" data-aos="fade-up">
            <option value="">Select the Service</option>

            @foreach ($practice_Area as $row)
            <option value="{{ $row->title }}">{{ $row->title }}</option>
            @endforeach

        </select>
    </div>
    <input type="text" class="form-select" name="description" placeholder="Brief description of your legal issue"
        data-aos-once="true" data-aos="fade-up" />
    <div class="text-center mt-4">
        <button type="submit" class="contact_form_button" data-aos-once="true" data-aos="fade-up">SEND</button>
    </div>
</form>
<!--------=============== Popup Form start ==============------------------>

@section('component.scripts')
<script>
$(document).ready(function() {
    initValidate('#add_contact_form');
    $("#add_contact_form").submit(function(e) {
        var form = $(this);
        ajaxSubmit(e, form, responseHandler);
    });

    var responseHandler = function(response) {
        $('input, textarea').val('');
        $("select option:first").prop('selected', true);
        setTimeout(function() {
            location.reload();
        }, 2000);
    }
});
</script>
@endsection