//AOS.init();

AOS.init({
    duration: 1200,
});

$(document).ready(function () {
    var owl = $("#banner_slider_carousel");
    owl.owlCarousel({
        margin: 12,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2.2,
            },
            1000: {
                items: 3.5,
            },
        },
    });
});
$(document).ready(function () {
    var owl = $("#media_slider_carousel");
    owl.owlCarousel({
        margin: 20,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1.2,
            },
            600: {
                items: 3.5,
            },
            1100: {
                items: 4.5,
            },
        },
    });
});

// Slider | Testimonial
$(document).ready(function () {
    var owl = $("#awards_slider");
    owl.owlCarousel({
        margin: 15,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1.2,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
            },
        },
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>',
        ], // Add this line
    });
});

// Counter | About
var a = 0;
$(window).scroll(function () {
    if ($("#counter").length) {
        var oTop = $("#counter").offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $(".counter-value").each(function () {
                var $this = $(this),
                    countTo = $this.attr("data-count");
                $({
                    countNum: $this.text(),
                }).animate(
                    {
                        countNum: countTo,
                    },

                    {
                        duration: 2000,
                        easing: "swing",
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                        },
                    }
                );
            });
            a = 1;
        }
    }
});

// popup

function toggle() {
    var blur = document.getElementById("blur");
    blur.classList.toggle("active");
    var popup = document.getElementById("popup");
    popup.classList.toggle("active");
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
    );

    var $googleDiv = $("#google_translate_element .skiptranslate");
    var $googleDivChild = $("#google_translate_element .skiptranslate div");
    $googleDivChild.next().remove();

    $googleDiv
        .contents()
        .filter(function () {
            return this.nodeType === 3 && $.trim(this.nodeValue) !== "";
        })
        .remove();
}

jQuery(document).ready(function ($) {
    $("#example_1").whatsappChatSupport();
});

$(document).ready(function () {
    $(".search_icon").click(function () {
        $(".search-box").toggle();
        $(".search_bar_field input[type='text']").focus();
    });
});



/*-- cookies code open--*/

// ---- ---- Const ---- ---- //
const cookiesBox = document.querySelector('.cookies_section'),
  buttons = document.querySelectorAll('.cookies_button');

// ---- ---- Show ---- ---- //
const executeCodes = () => {
  if (document.cookie.includes('Ahlawat')) return;
  cookiesBox.classList.add('show');

  // ---- ---- Button ---- ---- //
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      cookiesBox.classList.remove('show');

      // ---- ---- Time ---- ---- //
      if (button.id == 'cookieAccept') {
        document.cookie =
          'cookieBy= Ahlawat; max-age=' + 60 * 60 * 24 * 30;
      }
    });
  });
};

window.addEventListener('load', executeCodes);

/*-- cookies code close--*/