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
<!--------=============== Popup Form start ==============------------------>
<form class="contact_form" id="add_popup_form" action="{{url(route('contact.create'))}}" method="post"
    enctype="multipart/form-data">
    @csrf
    <input type="hidden" name="section" value="Contact Us Now Form"  />
    <input type="hidden" name="url" value="{{ url()->current() }}"  />




    <h3 >Want to know more</h3>


    <div class="row">
        <div class="col-md-6 mb-3">
            <input type="text" class="form-control" placeholder="Write Your Name..." name="name" data-aos-once="true"
                data-aos="fade-up" required />
        </div>
        <div class="col-md-6 mb-3">
        <input type="email" class="form-control" placeholder="Write Your Email..." name="email" data-aos-once="true"
                data-aos="fade-up" required />
        </div>
        <div class="col-md-6 mb-3">
        <input id="mobile-number1" type="tel" class="form-control" placeholder="Write Your Phone No" name="phone"
                 required />
        </div>
        <div class="col-md-6 mb-3">
        <select class="form-control select2" id="popup_select" data-aos-once="true" name="services" data-aos="fade-up" required>
                <option value="">Select the Service</option>
                @foreach ($practice_Area as $row)
                <option value="{{ $row->title }}">{{ $row->title }}</option>
                @endforeach
            </select>
        </div>
    </div>




    <!-- <div class="d-flex align-items-center flex-md-row flex-column gap-3 mb-3">
        <div class="w-100">
            
        </div>
        <div class="w-100">
            
        </div>
    </div> -->
    <!-- <div class="d-flex align-items-center flex-md-row flex-column gap-3 mb-3">
        <div class="w-100">
           
        </div>
        <div class="w-100">
           
        </div>
    </div> -->
    <textarea class="form-select" name="description" placeholder="Brief description of your legal issue"
         rows="3" required></textarea>
    <input type="hidden" name="ip" value="{{ $session_data['ip'] }}"  />
    <input type="hidden" name="ref_url" value="{{ url()->previous() }}"  />
    <div class="w-100 mt-3">
        <div class="g-recaptcha" data-sitekey="{{env('GOOGLE_CAPTCHA_SITEKEY')}}"></div>
    </div>
    <div class="text-center mt-4">
        <button type="submit" class="contact_form_button" >SEND</button>
    </div>
</form>
<!--------=============== Popup Form start ==============------------------>
