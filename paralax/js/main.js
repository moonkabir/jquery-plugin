
$(document).ready(function(){


$('.parallax-window').parallax({
	naturalWidth: 600,
    naturalHeight: 400,
});
$('.parallax-window-1').parallax({
	imageSrc: 'images/0.jpg'
    speed:0.1,
});
$('.parallax-window-2').parallax({
	imageSrc: 'images/1.jpg'
    speed:0.9,
});
$('.parallax-window-3').parallax({
	imageSrc: 'images/2.jpg'
    speed:0.4,
});
$('.parallax-window-4').parallax({
	imageSrc: 'images/3.jpg'
    speed:0.8,
});


})

























// (function ($) {
//  "use strict";
// /*----------------------------
//  wow js active
//  ------------------------------ */
// //  new WOW().init(); 
// //   /*---------------------
// //      TOP Menu Stick
// //      --------------------- */
// //      var s = $("#site-navigation");
// //      var pos = s.position();
// //      $(window).scroll(function () {
// //       var windowpos = $(window).scrollTop();
// //       if (windowpos > pos.top) {
// //         s.addClass("stick");
// //       } else {
// //         s.removeClass("stick");
// //       }
// //     });
// //  // one page nav
// //  $('.nav').onePageNav({
// //   currentClass: 'current',
// //   changeHash: true,
// //   scrollSpeed: 1500,
// //   scrollThreshold: 0.5,
// //   filter: ':not(.external)',
// //   easing: 'swing',
// //   begin: function () {
// //             //I get fired when the animation is starting
// //           },
// //           end: function () {
// //             //I get fired when the animation is ending
// //           },
// //           scrollChange: function (jQuerycurrentListItem) {
// //             //I get fired when you enter a section and I pass the list item of the section
// //           }
// //         });
// // /*---------------------
// //     prettyPhoto active
// //     --------------------- */
// //     $("a[rel^='prettyPhoto']").prettyPhoto();
// // /*--------------------------
// //  scrollUp
// //  ---------------------------- */	
// //  $.scrollUp({
// //   scrollText: '<i class="fa fa-angle-up"></i>',
// //   easingType: 'linear',
// //   scrollSpeed: 900,
// //   animation: 'fade'
// // }); 	   
// // })(jQuery); 

