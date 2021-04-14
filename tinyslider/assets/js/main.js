;(function($) {
    "use strict";
    $(document).ready(function() {
       var slider = tns({
    container: '#my-slider',
    // mode: 'gallery',
    // axis: "vertical",
    // autoHeight: true,
    // autoWidth: true,
    controlsText: ["previous", "next"],
    // prevButton:true,
    // arrowKeys:true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 1000,
    autoplayText: ["▶", "❚❚"],
    mouseDrag: true,
    items: 1,
    responsive: {
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 2
      },
      700: {
        gutter: 30
      },
      900: {
        items: 3
      }
    }
  });
  var slider = tns({
  container: "#customize",
  items: 3,
  controlsContainer: "#customize-controls",
  navContainer: "#customize-thumbnails",
  navAsThumbnails: true,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayButton: "#customize-toggle",
  swipeAngle: false,
  speed: 400,
 });

    });

    $(window).on('load', function() {

    });
})(jQuery)