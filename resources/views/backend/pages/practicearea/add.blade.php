<section>
    <form id="add_practicearea_form" action="{{url(route('practicearea.create'))}}" method="post" enctype="multipart/form-data">
        @csrf
        <div class="row">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-12">
                                <h4 class="header-title"><b>Overview</b></h4>
                                <hr>
                            </div>                        
                            <div class="col-sm-6">
                                <div class="form-group mb-3">
                                    <label>Title <span class="red">*</span></label>
                                    <input type="text" class="form-control" name="title" value="" required>
                                </div>
                            </div> 
                            <div class="col-sm-6">
                                <div class="form-group mb-3">
                                    <label>Short Description <span class="red">*</span></label>
                                    <input type="text" class="form-control" name="short_description" value="" required>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group mb-3">
                                    <label>Slug <span class="red">*</span></label>
                                    <input type="text" class="form-control" name="slug" value="" required>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group mb-3">
                                    <label>Main Practice Area</label>
                                    <select class="form-select select2" name="parent_id">
                                        <option value="1">--Select--</option>
                                        @foreach($practicearea as $row)
                                            <option value="{{ $row->id }}">{{ $row->title }}</option>
                                        @endforeach
                                    </select> 
                                </div>
                            </div>                         
                            <div class="col-sm-12">
                                <div class="form-group mb-3">
                                    <label>Content <span class="red">*</span></label>
                                    <textarea class="form-control trumbowyg" name="content" rows="2" required></textarea>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="form-group mb-3">
                                    <label>Focus Area</label>
                                    <select class="select2 form-select" name="focus_area[]" multiple>
                                        <option value="" disabled>Select Focus Area</option>
                                        @foreach($practicearea as $row)
                                            <option value="{{ $row->id }}">{{ $row->title }}</option>
                                        @endforeach
                                    </select> 
                                </div>
                            </div> 
                            <div class="col-sm-12">
                                <div class="form-group mb-3">
                                    <label>Why Choose Us</label>
                                    <textarea class="form-control trumbowyg" name="why_choose_us" rows="2"></textarea>
                                </div>
                            </div> 
                            <div class="col-sm-12">
                                <div class="form-group mb-3">
                                    <label>FAQs</label>
                                    <div id="faq_add_more" style="margin: 10px;">
                                        <div class="form-group">
                                            <div class="row">
                                            <div class="col-md-11">
                                                <div class="row">
                                                    <input type="text" style="margin-bottom: 5px;" class="form-control" name="faq[]" placeholder="Enter Question here...">
                                                    <span class="glyphicon form-control-feedback"></span>
                                                    <textarea id="trumbowyg_0" class="form-control" name="faq_description[]" rows="2" placeholder="Enter Answer here..."></textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-1"><i style="font-size: 25px; color: #0b0; cursor: pointer; margin-left: 10px;" class="ri-add-circle-fill" id="add_faq"></i></div>
                                            </div>
                                            </br>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            <div class="col-sm-6">
                                <div class="form-group mb-3">
                                    <label>Breadcrumb Title <span class="red">*</span></label>
                                    <input type="text" class="form-control" name="breadcrumb_title" value="" required>
                                </div>
                            </div>        
                            <div class="col-sm-6">
                                <div class="form-group mb-3">
                                    <label>Breadcrumb Subtitle <span class="red">*</span></label>
                                    <input type="text" class="form-control" name="breadcrumb_subtitle" value="" required>
                                </div>
                            </div>                                                                                                                                                                   
                        </div>                                      
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <div class="col-md-12">
                            <h4 class="header-title">SEO</h4>
                            <hr>
                        </div> 
                        <div class="col-sm-12">
                            <div class="form-group mb-3">
                                <label>Meta Title <span class="red">*</span></label>
                                <input type="text" class="form-control" name="meta_title" value="" required>
                            </div>
                        </div> 
                        <div class="col-sm-12">
                            <div class="form-group mb-3">
                                <label>Meta Description <span class="red">*</span></label>
                                <textarea class="form-control" name="meta_description" rows="3" required></textarea>
                            </div>
                        </div>                    
                    </div>
                </div>                
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <div class="col-md-12">
                            <h4 class="header-title"><b>Image</b></h4>
                            <hr>
                        </div> 
                        <div class="col-sm-12">
                            <div class="form-group mb-3">
                                <label>Breadcrumb Image <span class="red">*</span> <span class="font-size11">(Max file size 80kb - 1125*196)</span></label>
                                <input class="form-control" type="file" id="breadcrumb_image" name="breadcrumb_image" required>
                            </div>
                        </div>                    
                        <div class="col-sm-12">
                            <div class="form-group mb-3">
                                <label>Thumnail Icon <span class="font-size11">(Max file size 5kb - 70*70)</span></label></label>
                                <input class="form-control" type="file" id="image" name="image">
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div class="form-group mb-3">
                                <label>Alt Thumnail Image</label>
                                <input type="text" class="form-control" name="alt_thumnail_image" value="" >
                            </div>
                        </div> 
                        <div class="col-sm-12">
                            <div class="form-group mb-3">
                                <label>Section Image <span class="font-size11">(Max file size 80kb - 1125*460)</span></label>
                                <input class="form-control" type="file" id="section_image" name="section_image">
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div class="form-group mb-3">
                                <label>Alt Section Image</label>
                                <input type="text" class="form-control" name="alt_section_image" value="">
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
                                <button type="submit" class="btn btn-block btn-primary">Create</button>
                            </div>
                        </div>                    
                    </div>
                </div>                
            </div>               
        </div>
    </form>
</section>


<script>
$(document).ready(function() {
    initValidate('#add_practicearea_form');
    initSelect2('.select2');
    initTrumbowyg('.trumbowyg');
    initTrumbowyg('#trumbowyg_0');
});

$("#add_practicearea_form").submit(function(e) {
    var form = $(this);
    ajaxSubmit(e, form, responseHandler);
});

var responseHandler = function(response) {
    location.reload();
}

function remove_faq(_this) {
    _this.closest(".faq").remove();
}



var textareaIdCounter = 0;

$("#add_faq").on("click", function() {
    textareaIdCounter++;

    var newFaq = `
        <div class="faq form-group">
            <div class="row" data-id="${textareaIdCounter}">
                <div class="col-md-11">
                    <div class="row">
                        <input type="text" style="margin-bottom: 3px;" class="form-control" name="faq[]" placeholder="Enter Question here...">
                        <span class="glyphicon form-control-feedback"></span>
                        <textarea id="trumbowyg_${textareaIdCounter}" class="trumbowyg form-control" name="faq_description[]" rows="2" placeholder="Enter Answer here..."></textarea>
                    </div>
                </div>
                <div class="col-md-1"><i style="font-size: 25px; color: red; cursor: pointer; margin-left: 10px;" class="ri-delete-bin-2-fill" onclick="remove_faq($(this));"></i></div>
            </div>
            </br>
        </div>
    `;

    $("#faq_add_more").append(newFaq);
    initTrumbowyg(`#trumbowyg_${textareaIdCounter}`);
});


</script>