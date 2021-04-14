(function($) {
    "use strict";
    $(document).ready(function() {

        // ================magnific-popup================
        $('.popup-youtube').magnificPopup({
            type: 'iframe',
            removalDelay: 160,
            preloader: true,
            iframe: {
                patterns: {
                    youtube: {
                        src: 'www.youtube.com/embed/6R9KdzYgHoE?autoplay=1' 
                    }
                },
                srcAction: 'popup-youtube',
            },
            fixedContentPos: false
        });






    });
    $(window).on('load', function() {

    });
})(jQuery)