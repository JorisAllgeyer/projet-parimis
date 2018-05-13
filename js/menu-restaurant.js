$(document).ready(function(){

  $('#menu-brasserie-title p').click(function(){
    $(this).css('background','transparent');
    $('#menu-degustation-title p').css('background','#bc9e48');

    $('#degustation').hide();
    $('#brasserie').show();
  });

  $('#menu-degustation-title p').click(function(){
    $(this).css('background','transparent');
    $('#menu-brasserie-title p').css('background','#bc9e48');

    $('#brasserie').hide();
    $('#degustation').show();
  });
});

// document.ready = function(){
//   var buttonBrasserie = document.getElementById('menu-brasserie-title');
//   var buttonDegustation = document.getElementById('menu-degustation-title');
//   var menuBrasserie = document.getElementById('brasserie');
//   var menuDegustation = document.getElementById('degustation');
//
//   buttonBrasserie.onCick() = function(){
//     if (menuBrasserie.style.display === 'none') {
//       menuBrasserie.style.display = 'block';
//     } else {
//       menuBrasserie.style.display = 'none';
//     }
//   };
//   buttonDegustation.onCick() = function(){
//     if (menuDegustation.style.display === 'none') {
//       menuDegustation.style.display = 'block';
//     } else {
//       menuDegustation.style.display = 'none';
//     }
//   };
// };
