$(document).ready(function(){
  var width = $(window).width();
  if( width > 630) {
    $(window).fadeThis({
      reverse: false,
      offset: -130,
      distance: 50,
      speed: 300
    });
  }
});
