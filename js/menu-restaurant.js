$(document).ready(function(){
  $('.menu-brasserie-title p').click(function(){
    $('#degustation').hide();
    $('#brasserie').show();
  });

  $('.menu-degustation-title p').click(function(){
    $('#brasserie').hide();
    $('#degustation').show();
  });
});
