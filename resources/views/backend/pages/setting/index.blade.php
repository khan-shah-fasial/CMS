@extends('backend.layouts.app')

@section('page.name', 'Setting')

@section('page.content')
<div class="card">
   <div class="card-body">
    {{--
      <div class="row mb-2">
         <div class="col-sm-5">
            <h3>Setting</h3>
         </div>
      </div> ---}}

      <section>
            <form id="add_setting_form" action="{{url(route('setting.update'))}}" method="post" enctype="multipart/form-data">
                @csrf
                <div class="row">
                    <div class="col-md-8">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h4 class="header-title"><b>General</b></h4>
                                        <hr>
                                    </div>                         
                                    <div class="col-sm-6">
                                        <div class="form-group mb-3">
                                            <label>Email</label>
                                            <input type="text" class="form-control" name="email" value="{{ get_settings('email') }}">
                                        </div>
                                    </div>        
                                    <div class="col-sm-6">
                                        <div class="form-group mb-3">
                                            <label>Phone No</label>
                                            <input type="text" class="form-control" name="mobile" value="{{ get_settings('mobile') }}" >
                                        </div>
                                    </div>                                                                                                                                                                   
                                </div>                                      
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="col-md-12">
                                    <h4 class="header-title">Address</h4>
                                    <hr>
                                </div> 
                                <div class="col-sm-12">
                                    <div class="form-group mb-3">
                                        <label>Delhi (Head Office)</label>
                                        <textarea class="form-control" name="delhi_address" rows="3">{{ get_settings('delhi_address') }}</textarea>
                                    </div>
                                </div> 
                                <div class="col-sm-12">
                                    <div class="form-group mb-3">
                                        <label>Mumbai</label>
                                        <textarea class="form-control" name="mumbai_address" rows="3">{{ get_settings('mumbai_address') }}</textarea>
                                    </div>
                                </div> 
                                <div class="col-sm-12">
                                    <div class="form-group mb-3">
                                        <label>Chandigarh</label>
                                        <textarea class="form-control" name="chandigarh_address" rows="3">{{ get_settings('mumbai_address') }}</textarea>
                                    </div>
                                </div>                    
                            </div>
                        </div>                
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="col-md-12">
                                    <h4 class="header-title"><b>Social Media</b></h4>
                                    <hr>
                                </div>                    
                                <div class="col-sm-12">
                                    <div class="form-group mb-3">
                                        <label>Whatapp</label>
                                        <input type="text" class="form-control" name="whatsapp" value="{{ get_settings('whatsapp') }}" >
                                    </div>
                                    <div class="form-group mb-3">
                                        <label>Instagram</label>
                                        <input type="text" class="form-control" name="instagram" value="{{ get_settings('instagram') }}" >
                                    </div>
                                    <div class="form-group mb-3">
                                        <label>Facebook</label>
                                        <input type="text" class="form-control" name="facebook" value="{{ get_settings('facebook') }}" >
                                    </div>
                                    <div class="form-group mb-3">
                                        <label>Linkedin</label>
                                        <input type="text" class="form-control" name="linkedin" value="{{ get_settings('linkedin') }}" >
                                    </div>
                                    <div class="form-group mb-3">
                                        <label>Twitter \ X</label>
                                        <input type="text" class="form-control" name="twitter" value="{{ get_settings('twitter') }}" >
                                    </div>
                                </div>                                        
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <!--<div class="col-md-12">
                                    <h4 class="header-title">Submission</h4>
                                    <hr>
                                </div>--> 
                                <div class="col-sm-12">
                                    <div class="form-group d-grid mb-3 text-end">
                                        <button type="submit" class="btn btn-block btn-primary">Update</button>
                                    </div>
                                </div>                    
                            </div>
                        </div>                
                    </div>               
                </div>
            </form>
    </section>
    
   </div>
   <!-- end card-body-->
</div>
@endsection

@section("page.scripts")
<script>
    $(document).ready(function() {
        initValidate('#add_setting_form');
    });
    
    $("#add_setting_form").submit(function(e) {
        var form = $(this);
        ajaxSubmit(e, form, responseHandler);
    });
    
    var responseHandler = function(response) {
        location.reload();
    }
</script>
@endsection