<form id="edit_practicearea_form" action="{{url(route('practicearea.update'))}}" method="post" enctype="multipart/form-data">
    @csrf
    <div class="row">
        <input type="hidden" name="id" value="{{ $practicearea->id }}">
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Service Title</label>
                <input type="text" class="form-control" name="title" value="{{ $practicearea->title }}" required>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Short Description</label>
                <input type="text" class="form-control" name="short_description" value="{{ $practicearea->short_description }}" required>
            </div>
        </div> 
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Slug</label>
                <input type="text" class="form-control" name="slug" value="{{ $practicearea->slug }}" required>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Thumnail Image</label>
                <input class="form-control" type="file" id="image" name="image">
            </div>
        </div>
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Content</label>
                <textarea class="form-control trumbowyg" name="content" rows="5" required>{{ $practicearea->content }}</textarea>
            </div>
        </div>
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Why Choose Us</label>
                <textarea class="form-control trumbowyg" name="why_choose_us" rows="5" required>{{ $practicearea->why_choose_us }}</textarea>
            </div>
        </div>
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>FAQs</label>

                <div id="faq_add_more" style="margin: 10px;">
                    @php
                        $i = 1;
                        $faq = json_decode($practicearea->faq);
                        
                        if (!empty($faq)) {
                            foreach ($faq as $fkey => $fvalue) {
                                $farr_value = (array)$fvalue;
                                foreach ($farr_value as $fkey1 => $fvalue1) {
                    @endphp
                            <div class="faq">
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-11">
                                            <div class="row">
                                                <input type="text" style="margin-bottom: 3px;" class="form-control" name="faq[]" placeholder="Enter Question here..." value="{{ $fkey1 }}">
                                                <span class="glyphicon form-control-feedback"></span>
                                                <textarea class="form-control" name="faq_description[]" rows="5" placeholder="Enter Answer here...">{{ $fvalue1 }}</textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-1">
                                            @if($i == 1)
                                                <i style="font-size: 25px; color: #0b0; cursor: pointer; margin-left: 10px;" class="ri-add-circle-fill" id="add_faq"></i>
                                            @else
                                                <i style="font-size: 25px; color: red; cursor: pointer; margin-left: 10px;" class="ri-delete-bin-2-fill" onclick="remove_faq($(this));"></i>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                </br>
                            </div>

                    @php
                                $i++;
                            }
                    @endphp
                    @php
                        }
                    @endphp
                    @php
                    } else {
                    @endphp
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-11">
                                <div class="row">
                                    <input type="text" style="margin-bottom: 3px;" class="form-control" name="faq[]" placeholder="Enter Question here...">
                                    <span class="glyphicon form-control-feedback"></span>
                                    <textarea class="form-control" name="faq_description[]" rows="5" placeholder="Enter Answer here..."></textarea>
                                </div>
                            </div>
                            <div class="col-md-1">
                                <i style="font-size: 25px; color: #0b0; cursor: pointer; margin-left: 10px;" class="ri-add-circle-fill" id="add_faq"></i>
                            </div>
                        </div>
                        </br>
                    </div>
                    @php
                    }
                    @endphp
                </div>

            </div>
        </div>
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Breadcrumb Title</label>
                <input type="text" class="form-control" name="breadcrumb_title" value="{{ $practicearea->breadcrumb_title }}" required>
            </div>
        </div> 
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Breadcrumb Subtitle</label>
                <input type="text" class="form-control" name="breadcrumb_subtitle" value="{{ $practicearea->breadcrumb_subtitle }}" required>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Breadcrumb Image</label>
                <input class="form-control" type="file" id="breadcrumb_image" name="breadcrumb_image">
            </div>
        </div>
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label>Main Service</label>
                <select class="form-select" name="parent_id">
                    <option value="">Select Main Service</option>
                    @foreach($allpracticearea as $row)
                        <option value="{{ $row->id }}" @if( $row->id == $practicearea->parent_id ) selected @endif>{{ $row->title }}</option>
                    @endforeach
                </select> 
            </div>
        </div>
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Meta Title</label>
                <input type="text" class="form-control" name="meta_title" value="{{ $practicearea->meta_title }}" required>
            </div>
        </div> 
        <div class="col-sm-12">
            <div class="form-group mb-3">
                <label>Meta Description</label>
                <textarea class="form-control" name="meta_description" rows="3" required>{{ $practicearea->meta_description }}</textarea>
            </div>
        </div>
        <div class="col-sm-12">
            <div class="form-group mb-3 text-end">
                <button type="submit" class="btn btn-block btn-primary">Update</button>
            </div>
        </div>
    </div>
</form>

<script>
function remove_faq(_this) {
    _this.closest(".faq").remove();
}

$(document).ready(function() {
    initValidate('#edit_practicearea_form');
    initTrumbowyg('.trumbowyg');
});

$("#edit_practicearea_form").submit(function(e) {
    var form = $(this);
    ajaxSubmit(e, form, responseHandler);
});

var responseHandler = function(response) {
    location.reload();
}

$("#add_faq").on("click", function() {
    var newFaq = `
        <div class="faq form-group">
            <div class="row">
                <div class="col-md-11">
                    <div class="row">
                        <input type="text" style="margin-bottom: 3px;" class="form-control" name="faq[]" placeholder="Enter Question here...">
                        <span class="glyphicon form-control-feedback"></span>
                        <textarea class="form-control" name="faq_description[]" rows="5" placeholder="Enter Answer here..."></textarea>
                    </div>
                </div>
                <div class="col-md-1"><i style="font-size: 25px; color: red; cursor: pointer; margin-left: 10px;" class="ri-delete-bin-2-fill" onclick="remove_faq($(this));"></i></div>
            </div>
            </br>
        </div>
    `;
    $("#faq_add_more").append(newFaq);
});

</script>