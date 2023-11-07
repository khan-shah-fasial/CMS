<!----============ Form start =================-------------------->
<form id="add_contact_us_form" action="{{url(route('contact.create'))}}" method="post" enctype="multipart/form-data">
    @csrf
    <div class="mb-3">

        <input type="hidden" name="section" value="Contact us Form" data-aos-once="true" data-aos="fade-up" />
    </div>
    <div class="mb-3">

        <input type="hidden" name="url" value="{{ url()->current() }}" data-aos-once="true" data-aos="fade-up" />
    </div>
    <div class="mb-3">

        <input type="text" placeholder="Name" name="name" data-aos-once="true" data-aos="fade-up" required />
    </div>
    <div class="mb-3">

        <input type="email" placeholder="Email" name="email" data-aos-once="true" data-aos="fade-up" required />
    </div>
    <div class="mb-3">

        <input type="number" placeholder="Phone" name="phone" data-aos-once="true" data-aos="fade-up" required />
    </div>
    <div class="mb-3">

        <input type="text" placeholder="Other" name="other_info" data-aos-once="true" data-aos="fade-up" />
    </div>
    <div class="mb-3">

        <textarea placeholder="Brief Description of your legal issue" rows="3" name="description" data-aos-once="true"
            data-aos="fade-up"></textarea>
    </div>
	
	<div class="mb-3">
     <div class="g-recaptcha" data-sitekey="{{env('GOOGLE_CAPTCHA_SITEKEY')}}"></div>
    </div>
	
    <div class="">
        <button type="submit" data-aos-once="true" data-aos="fade-up">
            SUBMIT
        </button>
    </div>
</form>

<!----============ Form End =================-------------------->
@section('component.scripts')
<script>
$(document).ready(function() {
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