//bootstarp modals
function largeModal(url, header) {  
    $('#largeModal .modal-body').html('Loading...');
    $('#largeModal .modal-title').html('Loading...');  

    $('#largeModal').modal('show');
    $.ajax({
        url: url,
        success: function(response)
        {
            $('#largeModal .modal-body').html(response);
            $('#largeModal .modal-title').html(header);
        }
    });
}   

function smallModal(url, header) {   
  
    $('#smallModal .modal-body').html('Loading...');
    $('#smallModal .modal-title').html('Loading...');  

    $('#smallModal').modal('show');
    $.ajax({
        url: url,
        success: function(response)
        {
            $('#smallModal .modal-body').html(response);
            $('#smallModal .modal-title').html(header);
        }
    });
}  

function confirmModal(delete_url, param)
{
  $('#confirmModal').modal('show');
  callBackFunction = param;
  document.getElementById('delete_form').setAttribute('action' , delete_url);
} 

$(".ajaxDeleteForm").submit(function(e) {
  var form = $(this);
  ajaxSubmit(e, form, callBackFunction);
});    

function closeModel() {
  //$('.modal .modal-body').html('');
  //$('.modal .modal-title').html('');      
}

function closeConfirmModel() {
  $('#confirmModal').modal('hide');    
}

//jquery validator
function initValidate(selector)
{
    $(selector).validate({
        errorElement: 'div',
        errorPlacement: function (error, element) {
        error.addClass('invalid-feedback');
        element.closest('.form-group').append(error);
        },            
        highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid');
        },
        unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
        }        
    });
}

//select2
function initSelect2(selector)
{
    $(selector).select2();
}