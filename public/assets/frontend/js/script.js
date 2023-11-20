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
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>',
        ],
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
const cookiesBox = document.querySelector(".cookies_section"),
    buttons = document.querySelectorAll(".cookies_button");

// ---- ---- Show ---- ---- //
const executeCodes = () => {
    if (document.cookie.includes("Ahlawat")) return;
    cookiesBox.classList.add("show");

    // ---- ---- Button ---- ---- //
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            cookiesBox.classList.remove("show");

            // ---- ---- Time ---- ---- //
            if (button.id == "cookieAccept") {
                document.cookie =
                    "cookieBy= Ahlawat; max-age=" + 60 * 60 * 24 * 30;
            }
        });
    });
};

window.addEventListener("load", executeCodes);

/*-- cookies code close--*/

// --------------- animation type ---------------

// class TypeWriter {
//     constructor(txtElement, words, wait = 4000) {
//         this.txtElement = txtElement;
//         this.words = words;
//         this.txt = "";
//         this.wordIndex = 0;
//         this.wait = parseInt(wait, 10);
//         this.type();
//         this.isDeleting = false;
//     }

//     type() {
//         // Current index of word
//         const current = this.wordIndex % this.words.length;
//         // Get full text of current word
//         const fullTxt = this.words[current];

//         // Check if deleting
//         if (this.isDeleting) {
//             // Remove char
//             this.txt = fullTxt.substring(0, this.txt.length - 1);
//         } else {
//             // Add char
//             this.txt = fullTxt.substring(0, this.txt.length + 1);
//         }

//         // Insert txt into element
//         this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//         // change color for data-text
//         this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//         // Initial Type Speed
//         let typeSpeed = 100;

//         if (this.isDeleting) {
//             typeSpeed /= 2;
//         }

//         // If word is complete
//         if (!this.isDeleting && this.txt === fullTxt) {
//             // Make pause at end
//             typeSpeed = this.wait;
//             // Set delete to true
//             this.isDeleting = true;
//         } else if (this.isDeleting && this.txt === "") {
//             this.isDeleting = false;
//             // Move to next word
//             this.wordIndex++;
//             // Pause before start typing
//             typeSpeed = 300;
//         }

//         setTimeout(() => this.type(), typeSpeed);
//     }
// }

// // Init On DOM Load
// document.addEventListener("DOMContentLoaded", init);

// // Init App
// function init() {
//     const txtElement = document.querySelector(".txt-type");
//     const words = JSON.parse(txtElement.getAttribute("data-words"));
//     const wait = txtElement.getAttribute("data-wait");
//     // Init TypeWriter
//     new TypeWriter(txtElement, words, wait);
// }

$(document).ready(function () {
    //jquery for toggle sub menus
    $(".sub-btn").click(function () {
        $(this).next(".sub-menu").slideToggle();
        $(this).find(".dropdown").toggleClass("rotate");
    });
});

var app = document.getElementById("ani_text");
var text2 = document.getElementById("ani_2");
var text3 = document.getElementById("ani_3");

var typewriter = new Typewriter(app, {
    loop: true,
});

typewriter
    .typeString(
        "Welcome to Ahlawat & Associates a full-service Indian law firm"
    )
    .pauseFor(2500)
    .deleteAll()
    .typeString("catering to international & domestic clients since 1978")
    .pauseFor(2500)
    .deleteAll()
    .start();
var typewriter = new Typewriter(text3, {
    loop: true,
});

typewriter
    .typeString(
        "Welcome to Ahlawat & Associates a full-service Indian law firm"
    )
    .pauseFor(2500)
    .deleteAll()
    .typeString("catering to international & domestic clients since 1978")
    .pauseFor(2500)
    .deleteAll()
    .start();
var typewriter = new Typewriter(text2, {
    loop: true,
});

typewriter
    .typeString(
        "Welcome to Ahlawat & Associates a full-service Indian law firm"
    )
    .pauseFor(2500)
    .deleteAll()
    .typeString("catering to international & domestic clients since 1978")
    .pauseFor(2500)
    .deleteAll()
    .start();

// How to build international phone number input in HTML and JavaScript
const phoneInputField = document.querySelector("#phone");
const footerInputField = document.querySelector("#footer");
const careerInputField = document.querySelector("#career");

const phoneInput = window.intlTelInput(phoneInputField, {
    preferredCountries: ["in", "us", "de"],
    utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

const footerInput = window.intlTelInput(footerInputField, {
    preferredCountries: ["in", "us", "de"],
    utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
const careerInput = window.intlTelInput(careerInputField, {
    preferredCountries: ["in", "us", "de"],
    utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
