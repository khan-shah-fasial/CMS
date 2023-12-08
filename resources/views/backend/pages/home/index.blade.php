@extends('backend.layouts.app')

@section('page.name', 'Home Page Content Setting')

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
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h4 class="header-title"><b>Our Journey</b></h4>
                                        <hr>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group mb-3">
                                            <label>Title</label>
                                            <input type="text" class="form-control" name="oj_home" value="{{ get_settings('oj_home') }}" >
                                        </div>
                                    </div>                          
                                    <div class="col-sm-12">
                                        <div class="form-group mb-3">
                                            <label>Contain</label>
                                            <textarea class="form-control trumbowyg" name="oj_content" rows="5">{{ get_settings('oj_content') }}</textarea>
                                        </div>
                                    </div>        
                                </div>

                                

                            </div>
                        </div>

                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h4 class="header-title"><b>A&A Section</b></h4>
                                        <hr>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group mb-3">
                                            <label>Title</label>
                                            <input type="text" class="form-control" name="ana_home" value="{{ get_settings('ana_home') }}" >
                                        </div>
                                    </div>                          
                                    <div class="col-sm-12">
                                        <div class="form-group mb-3">
                                            <label>Contain</label>
                                            <textarea class="form-control trumbowyg" name="ana_content" rows="5">{{ get_settings('ana_content') }}</textarea>
                                        </div>
                                    </div>        
                                </div>

                            </div>
                        </div>


                        <div class="col-sm-12">
                            <div class="d-flex justify-content-end " >
                                <div class="form-group d-grid mb-3 w-25 text-end">
                                    <button type="submit" class="btn btn-block btn-primary">Update</button>
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
        initTrumbowyg('.trumbowyg');
    });
</script>

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