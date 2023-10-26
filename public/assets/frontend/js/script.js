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
        items: 4,
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
    margin: 12,
    nav: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 2.2,
      },
      600: {
        items: 3.5,
      },
      1000: {
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
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
});

// Counter | About
var a = 0;
$(window).scroll(function () {
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
});

// popup

function toggle() {
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
  var popup = document.getElementById("popup");
  popup.classList.toggle("active");
}
