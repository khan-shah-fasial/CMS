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
                    <div class="col-md-8">

                        <div class="row">
                            <div class="col-md-12">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="col-md-12">
                                            <h4 class="header-title">Home Page Banner</h4>
                                            <hr>
                                        </div>
                                        
                                        <div class="col-sm-12">
                                            <div class="form-group mb-3">
                                                <label>Banner <span class="red">*</span> <span class="font-size11">(Max file size 80kb - 1125*196)</span></label> 
                                                <div id="Content_list_add_more" style="margin: 10px;"> @php $i = 1; $Content_list = json_decode(get_settings('Banner_1')); 
                                                if(!empty($Content_list)) { foreach ($Content_list as $row){  @endphp
                                                    <div class="Content_list">
                                                        <div class="form-group">
                                                            <div class="row">
                                                                <div class="col-md-11">
                                                                    <div class="row">
                                                                        <div class="col-sm-9">

                                                                            <input type="file" id="image" style="margin-bottom: 3px;" class="form-control" name="Banner_1[]">

                                                                            <input type="hidden" class="form-control" name="Banner_2[]" value="{{ $row }}">

                                                                        </div>

                                                                        <div class="col-sm-3">
                                                                            @if(get_settings('Banner_4')) 
                                                                                <img src="{{ asset('storage/' . $row )}}" class="img-thumbnail"> 
                                                                            @endif
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <div class="col-md-1"> @if($i == 1) <i style="font-size: 25px; color: #0b0; cursor: pointer; margin-left: 10px;" class="ri-add-circle-fill" id="add_Content_list"></i> @else <i style="font-size: 25px; color: red; cursor: pointer; margin-left: 10px;" class="ri-delete-bin-2-fill" onclick="remove_Content_list($(this));"></i> @endif </div>
                                                            </div>
                                                        </div>
                                                        </br>
                                                    </div> @php $i++; } @endphp  @php } else { @endphp
                                                        <div class="form-group">
                                                            <div class="row">
                                                        <div class="col-md-11">
                                                            <div class="row">
                                                                <div class="col-sm-6">

                                                                    <input type="file" id="image" style="margin-bottom: 3px;" class="form-control" name="Banner_1[]">

                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="col-md-1"><i style="font-size: 25px; color: #0b0; cursor: pointer; margin-left: 10px;" class="ri-add-circle-fill" id="add_Content_list"></i></div>
                                                        </div>
                                                        </br>
                                                    </div> @php } @endphp </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
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

                            </div>               
                        </div>
                    </div>
                    <div class="col-md-4">

                        <div class="card">
                            <div class="card-body">
                                <div class="col-md-12">
                                    <h4 class="header-title"><b>Page Counter Content</b></h4>
                                    <hr>
                                </div>                    
                                <div class="col-sm-12">
                                    <div class="form-group mb-3">
                                        <input type="text" class="form-control mb-1" name="c_exp_title" value="{{ get_settings('c_exp_title') }}" >
                                        <input type="text" class="form-control" name="c_exp" value="{{ get_settings('c_exp') }}" >
                                    </div>
                                    <div class="form-group mb-3">
                                        <input type="text" class="form-control mb-1" name="c_client_title" value="{{ get_settings('c_client_title') }}" >
                                        <input type="text" class="form-control" name="c_client" value="{{ get_settings('c_client') }}" >
                                    </div>
                                    <div class="form-group mb-3">
                                        <input type="text" class="form-control mb-1" name="c_lic_title" value="{{ get_settings('c_lic_title') }}" >
                                        <input type="text" class="form-control" name="c_lic" value="{{ get_settings('c_lic') }}" >
                                    </div>
                                    <div class="form-group mb-3">
                                        <input type="text" class="form-control mb-1" name="c_team_title" value="{{ get_settings('c_team_title') }}" >
                                        <input type="text" class="form-control" name="c_team" value="{{ get_settings('c_team') }}" >
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



                    </div> 

            </form>
    </section>
    
   </div>
   <!-- end card-body-->
</div>
@endsection

@section("page.scripts")
<script>

    function remove_Content_list(_this) {
        _this.closest(".Content_list").remove();
    }

    $(document).ready(function() {
        initTrumbowyg('.trumbowyg');
    });

    $("#add_Content_list").on("click", function() {

    var new_Content_list = `
        <div class="Content_list form-group">
            <div class="row">
                <div class="col-md-11">
                    <div class="row">
                        <div class="col-sm-6">
                            <input type="file" id="image" style="margin-bottom: 3px;" class="form-control" name="Banner_1[]">
                        </div>
                    </div>
                </div>
                <div class="col-md-1"><i style="font-size: 25px; color: red; cursor: pointer; margin-left: 10px;" class="ri-delete-bin-2-fill" onclick="remove_Content_list($(this));"></i></div>
            </div>
            </br>
        </div>
    `;

    $("#Content_list_add_more").append(new_Content_list);
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