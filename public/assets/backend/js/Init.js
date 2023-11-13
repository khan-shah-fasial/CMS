toastr.options = {
    showHideTransition: "plain",
    closeButton: true,
    newestOnTop: false,
    progressBar: true,
    positionClass: "toast-top-right",
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "500",
    timeOut: "7000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
};

//bootstarp modals
function largeModal(url, header) {
    $("#largeModal .modal-body").html("Loading...");
    $("#largeModal .modal-title").html("Loading...");

    $("#largeModal").modal("show");
    $.ajax({
        url: url,
        success: function (response) {
            $("#largeModal .modal-body").html(response);
            $("#largeModal .modal-title").html(header);
        },
    });
}

function smallModal(url, header) {
    $("#smallModal .modal-body").html("Loading...");
    $("#smallModal .modal-title").html("Loading...");

    $("#smallModal").modal("show");
    $.ajax({
        url: url,
        success: function (response) {
            $("#smallModal .modal-body").html(response);
            $("#smallModal .modal-title").html(header);
        },
    });
}

function confirmModal(delete_url, param) {
    $("#confirmModal").modal("show");
    callBackFunction = param;
    document.getElementById("delete_form").setAttribute("action", delete_url);
}

$(".ajaxDeleteForm").submit(function (e) {
    var form = $(this);
    ajaxSubmit(e, form, callBackFunction);
});

function closeModel() {
    //$('.modal .modal-body').html('');
    //$('.modal .modal-title').html('');
}

function closeConfirmModel() {
    $("#confirmModal").modal("hide");
}

//jquery validator
function initValidate(selector) {
    $(selector).validate({
        errorElement: "div",
        errorPlacement: function (error, element) {
            error.addClass("invalid-feedback");
            element.closest(".form-group").append(error);
        },
        highlight: function (element, errorClass, validClass) {
            $(element).addClass("is-invalid");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).removeClass("is-invalid");
        },
    });
}

//select2
function initSelect2(selector) {
    $(selector).select2();
}

//Form Submition
function ajaxSubmit(e, form, callBackFunction) {
    if (form.valid()) {
        e.preventDefault();

        var btn = $(form).find('button[type="submit"]');
        var btn_text = $(btn).html();
        $(btn).html('<i class="ri-refresh-line"></i>');
        $(btn).css("opacity", "0.7");
        $(btn).css("pointer-events", "none");

        var action = form.attr("action");
        var form = e.target;
        var data = new FormData(form);
        $.ajax({
            type: "POST",
            url: action,
            processData: false,
            contentType: false,
            dataType: "json",
            data: data,
            success: function (response) {
                $(btn).html(btn_text);
                $(btn).css("opacity", "1");
                $(btn).css("pointer-events", "inherit");

                if (response.status) {
                    Command: toastr["success"](
                        response.notification,
                        "Success"
                    );
                    callBackFunction(response);
                } else {
                    if (typeof response.notification === "object") {
                        var errors = "";
                        $.each(response.notification, function (key, msg) {
                            errors +=
                                "<div>" + (key + 1) + ". " + msg + "</div>";
                        });
                        Command: toastr["error"](errors, "Alert");
                    } else {
                        Command: toastr["error"](
                            response.notification,
                            "Alert"
                        );
                    }
                }
            },
        });
    } else {
        toastr.error("Please make sure to fill all the necessary fields");
    }
}

//trumbowyg Editor
function initTrumbowyg(target) {
    $(target).trumbowyg({
        btnsDef: {
            // Create a new dropdown
            image: {
                dropdown: ["insertImage", "upload"],
                ico: "insertImage",
            },
            // Define the heading button with different levels
            heading: {
                dropdown: ["h1", "h2", "h3", "h4", "h5", "h6"],
                ico: "pencil", // You can use an appropriate icon
            },
        },
        // Redefine the button pane
        btns: [
            ["viewHTML"],
            ["formatting"],
            ["strong", "em", "del"],
            ["superscript", "subscript"],
            ["link"],
            ["image"], // Our fresh created dropdown
            ["table"],
            ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"],
            ["unorderedList", "orderedList"],
            ["horizontalRule"],
            ["removeformat"],
            ["fullscreen"],
        ],
        plugins: {
            // Add imagur parameters to upload plugin for demo purposes
            upload: {
                serverPath:
                    $("#baseUrl").attr("href") + "/backend/trumbowyg/upload",
                fileFieldName: "image",
                headers: {},
                urlPropertyName: "file",
            },
            resizimg: true,
        },
    });
    // $(target).css("height", 200);
    // $(".trumbowyg-editor").css("min-height", 200);
}
function destroyTrumbowyg(target) {
    $(target).trumbowyg("destroy");
}
