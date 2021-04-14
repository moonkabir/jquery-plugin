// external js: isotope.pkgd.js

$('.grid').isotope({
  itemSelector: '.grid-item',
  masonry: {
    columnWidth: 0,
  }
});
$(function () {
 
  $("#rateYo").rateYo({
    rating: 3.6
  });
 
});