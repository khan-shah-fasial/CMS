@php
$practice_Area = DB::table('practice_areas')->get();
@endphp
@php
$session_data = json_decode(session('user_ip'), true);
/*
if (!isset($session_data['country'])) {
    $session_data['country'] = 'IN';
}*/
@endphp

<!-----------================= Footer form start =============--------------->
<form class="contact_form" id="add_footer_form" action="{{url(route('contact.create'))}}" method="post"
    enctype="multipart/form-data">
    @csrf
    <h3 >Any query? Let’s connect</h3>
    <input type="hidden" name="section" value="Footer Form"  />
    <input type="hidden" name="url" value="{{ url()->current() }}"  />
   
    <div class="d-flex align-items-center gap-3 mb-3">
        <div class="w-100">
            <input type="text" class="form-control" placeholder="Write Your Name..." name="name" data-aos-once="true"
                data-aos="fade-up" required />
        </div>

        <div class="w-100">
            <input type="email" class="form-control" placeholder="Write Your Email..." name="email" data-aos-once="true"
                data-aos="fade-up" required />
        </div>
    </div>

    <div class="d-flex align-items-center gap-3 mb-3">

        <div class="w-100">
            <input type="tel" id="mobile-number" class="form-control phone" placeholder="Write Your Phone No" name="phone"
                 required />
        </div>


        <div class="w-100">
            <select class="form-select select2" data-aos-once="true" name="services" data-aos="fade-up" required>
                <option value="">Select the Service</option>

                @foreach ($practice_Area as $row)
                <option value="{{ $row->title }}">{{ $row->title }}</option>
                @endforeach

            </select>
        </div>
    </div>

    <textarea class="form-select footer_textarea" name="description" placeholder="Brief description of your legal issue"
         rows="2"></textarea>
    
    <input type="hidden" name="ip" value="{{ $session_data['ip'] }}"  />
    <input type="hidden" name="ref_url" value="{{ url()->previous() }}"  />

    <div class="mt-3">
        <div class="g-recaptcha" data-sitekey="{{env('GOOGLE_CAPTCHA_SITEKEY')}}"></div>
    </div>

    <div class="text-center mt-4">
        <button type="submit" class="contact_form_button" >SEND</button>
    </div>
</form>

<!-------------------============= Footer Form end ===============-------------->