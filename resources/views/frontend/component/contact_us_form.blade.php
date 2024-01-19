@php
$session_data = json_decode(session('user_ip'), true);
/*
if (!isset($session_data['country'])) {
    $session_data['country'] = 'IN';
}*/
@endphp
@php
$practice_Area = DB::table('practice_areas')->get();
@endphp
<!----============ Form start =================-------------------->
<form id="add_contact_us_form" action="{{url(route('contact.create'))}}" method="post" enctype="multipart/form-data">
    @csrf
    <div class="mb-3">

        <input type="hidden" name="section" value="Contact us Form"  />
    </div>
    <div class="mb-3">

        <input type="hidden" name="url" value="{{ url()->current() }}"  />
    </div>
    <div class="mb-3">

        <input type="hidden" name="ip" value="{{ $session_data['ip'] }}"  />
    </div>
    <div class="mb-3">

        <input type="text" placeholder="Name" name="name"  required />
    </div>
    <div class="mb-3">

        <input type="email" placeholder="Email" name="email"  required />
    </div>
    <div class="mb-3">

        <input type="tel" id="mobile-number2" placeholder="Phone" name="phone" data-aos-once="true" class="phone" data-aos="fade-up"
            required />
    </div>
    <div class="mb-3">
        <select class="form-select select2" data-aos-once="true" name="services" data-aos="fade-up" required>
            <option value="">Select the Service</option>

            @foreach ($practice_Area as $row)
            <option value="{{ $row->title }}">{{ $row->title }}</option>
            @endforeach

        </select>
    </div>
    <div class="mb-3">

        <textarea placeholder="Brief Description of your legal issue" rows="3" name="description" data-aos-once="true"
            data-aos="fade-up"></textarea>
    </div>

    <div class="mb-3">
        <div class="g-recaptcha" data-sitekey="{{env('GOOGLE_CAPTCHA_SITEKEY')}}"></div>
    </div>

    <div class="">
        <button type="submit" >
            SUBMIT
        </button>
    </div>
</form>

<!----============ Form End =================-------------------->
@section('component.scripts')
<script>
$(document).ready(function() {
    initSelect2('.select2');
    initValidate('#add_contact_us_form');
    $("#add_contact_us_form").submit(function(e) {
        var form = $(this);
        ajaxSubmit(e, form, responseHandler);
    });

    var responseHandler = function(response) {
        $('input, textarea').val('');
        $("select option:first").prop('selected', true);
        setTimeout(function() {
            window.location.href = $('#baseUrl').attr('href') + '/thank-you';
        }, 2000);
    }
});
</script>
@endsection