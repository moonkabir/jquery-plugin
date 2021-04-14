(function($) {
    "use strict";
    $(document).ready(function() {



        
        // ==============sticky-menu==============  
        $("header").sticky({
            zIndex: 9999999
        });
        // ==========off canvas-meanu===========


        var $main_nav = $('#main-nav');
        var $toggle = $('.toggle');

        var defaultData = {
            maxWidth: 980,
            customToggle: $toggle,
            navTitle: 'All Categories',
            levelTitles: true,
            pushContent: '#container',
            insertClose: 2,
            closeLevels: false,
            position: 'right'
        };
        // call our plugin
        var Nav = $main_nav.hcOffcanvasNav(defaultData);






    });
    $(window).on('load', function() {

    });
})(jQuery)