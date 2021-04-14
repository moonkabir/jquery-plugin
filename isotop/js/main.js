 $(document).ready(function(){
   $grid.isotope({ filter: '*' })
$grid.isotope({ filter: '.metal' })
$grid.isotope({ filter: '.transition' })
$grid.isotope({ filter: function() {
  var name = $(this).find('.name').text();
  return name.match( /ium$/ );
} })
  $grid.isotope({ sortBy: 'name' })
   
 });