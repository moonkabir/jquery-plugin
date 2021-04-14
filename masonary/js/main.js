;(function($) {
    "use strict";
    $(document).ready(function() {
       $('.grid').packery({
  		// options
		itemSelector: '.grid-item',
		percentPosition: true,
  	gutter: 10,
		});
    });



    $('.image-link').magnificPopup({type:'image'});
    $('.mp').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image'
  // other options



});
    $(window).on('load', function() {

    });

})(jQuery)