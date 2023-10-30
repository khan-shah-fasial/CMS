
<script src="/assets/frontend/js/bootstrap.bundle.min.js"></script>
<script src="/assets/frontend/js/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
<script>
AOS.init();
</script>
<script src="/assets/frontend/js/owl.carousel.js"></script>
<script src="/assets/frontend/js/script.js"></script>
<script src="/assets/frontend/js/google_translate.js"></script>
<script type="text/javascript">
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');

  var $googleDiv = $("#google_translate_element .skiptranslate");
  var $googleDivChild = $("#google_translate_element .skiptranslate div");
  $googleDivChild.next().remove();

  $googleDiv.contents().filter(function(){
  	return this.nodeType === 3 && $.trim(this.nodeValue) !== '';
  }).remove();

}
</script>
<script src="/assets/frontend/js/whatsapp-chat-support.js"></script>
<script>
jQuery(document).ready(function($){
		$('#example_1').whatsappChatSupport();
});
	</script>