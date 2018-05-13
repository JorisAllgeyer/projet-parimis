$(document).ready(function(){
  $('#menu-midi-title p').css('background','transparent');

  $('#menu-midi-title p').click(function(){
    $(this).css('background','transparent');
    $('#menu-soir-title p').css('background','#bc9e48');

    $('#soir').hide();
    $('#midi').show();
  });

  $('#menu-soir-title p').click(function(){
    $(this).css('background','transparent');
    $('#menu-midi-title p').css('background','#bc9e48');

    $('#midi').hide();
    $('#soir').show();
  });
});

// document.ready = function(){
//   var buttonmidi = document.getElementById('menu-midi-title');
//   var buttonsoir = document.getElementById('menu-soir-title');
//   var menumidi = document.getElementById('midi');
//   var menusoir = document.getElementById('soir');
//
//   buttonmidi.onCick() = function(){
//     if (menumidi.style.display === 'none') {
//       menumidi.style.display = 'block';
//     } else {
//       menumidi.style.display = 'none';
//     }
//   };
//   buttonsoir.onCick() = function(){
//     if (menusoir.style.display === 'none') {
//       menusoir.style.display = 'block';
//     } else {
//       menusoir.style.display = 'none';
//     }
//   };
// };
