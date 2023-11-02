
<!---------================ career Form start =========---------------->
<form class="contact_form" id="add_career_form" action="{{url(route('contact.create'))}}" method="post" enctype="multipart/form-data">
    @csrf
    <h3 class="mb-4" data-aos-once="true" data-aos="fade-up">Want to know more</h3>
    <input type="hidden" name="section" value="Career Form" data-aos-once="true" data-aos="fade-up"/>
    <input type="hidden" name="url" value="{{ url()->current() }}" data-aos-once="true" data-aos="fade-up"/>
    <div class="d-flex align-items-center gap-4">
        <input type="text" class="form-control mb-3" name="name" placeholder="Enter Your Name"
            data-aos-once="true" data-aos="fade-up" required/>
        <input type="email" class="form-control mb-3" name="email" placeholder="Enter Your Email"
            data-aos-once="true" data-aos="fade-up" required/>
    </div>
    <div class="d-flex align-items-center gap-4">
        <input type="number" class="form-control mb-3" name="phone" placeholder=" Your Phone No"
            data-aos-once="true" data-aos="fade-up" required/>
        <input type="text" class="form-control mb-3" name="qualification" placeholder="Qualification"
            data-aos-once="true" data-aos="fade-up" required/>
    </div>

    <div class="d-flex align-items-center gap-2">

        <div class="w-100 mb-3">
            <label for="formFile" class="form-label">Upload Your CV</label>
            <input class="form-control" type="file" name="cv" id="formFile" required accept=".pdf,.docx">
        </div>
    </div>


    <div class="text-center">
        <button class="contact_form_button" data-aos-once="true" data-aos="fade-up">SUBMIT</button>
    </div>

</form>
<!---------================ career Form end =========----------------> 

@section('component.scripts')
<script>
    $(document).ready(function() {
        initValidate('#add_career_form');
        $("#add_career_form").submit(function(e) {
            var form = $(this);
            ajaxSubmit(e, form, responseHandler);
        });
        
        var responseHandler = function(response) {
            $('input, textarea').val('');
            $("select option:first").prop('selected', true);
            setTimeout(function(){
                location.reload();
            }, 2000);    
        }                 
    });
    

</script>
@endsection