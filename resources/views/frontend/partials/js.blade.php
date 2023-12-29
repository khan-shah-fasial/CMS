
<script src="/assets/frontend/js/combine.js"></script>


<!--
    <script src="/assets/frontend/js/jquery.min.js"></script>
<script src="/assets/frontend/js/bootstrap.bundle.min.js"></script>
-->


<!--aos js
<script src="/assets/frontend/js/aos.js"></script>-->

<!-- Animation Typing--------- -->
<!-- <script src="/assets/frontend/js/core.js"></script> -->


<!-- International Phone Number
<script src="/assets/frontend/js/intlTelInput.js"></script>--------- -->

<!--owl carousel js
<script  src="/assets/frontend/js/owl.carousel.js"></script>-->

<!--google translate js
<script defer src="/assets/frontend/js/google_translate.js"></script>-->

<!--moment js
<script src="/assets/frontend/js/moment.min.js"></script>-->

<!--jQuery Validate
<script defer src="/assets/frontend/js/jquery.validate.min.js"></script>-->

<!--Toast Js
<script defer src="/assets/frontend/js/toastr.min.js"></script>-->

<!--select2-->
<!-- <script src="/assets/frontend/js/select2.full.min.js"></script> -->

<!--select2
<script defer src="/assets/frontend/js/select2.min.js"></script>-->

<!--whatsapp js
<script defer src="/assets/frontend/js/whatsapp-chat-support.js"></script>-->

<!--Google capcha js-->
<!-- <script src="https://www.google.com/recaptcha/api.js" async defer></script> -->

<!--<script src="/assets/frontend/js/api.js"></script>-->

<!--Custom Js
<script src="/assets/frontend/js/Init.js"></script>-->


<script src="/assets/frontend/js/script.js"></script>

<!--<script src="/assets/frontend/js/jquery.marquee.min.js"></script>-->

<script>
    $(document).ready(function() {
        var scrollCount = 100;

        $(".marquee").marquee({
            duration: 18000,
            gap: 0,
            delayBeforeStart: 0,
            direction: "up",
            duplicated: true,
            pauseOnHover: true,
            startVisible: true,
            // Add a callback for each iteration
            onBefore: function() {
                console.log("Scroll Count:", ++scrollCount);
            }
        });
    });
</script>

