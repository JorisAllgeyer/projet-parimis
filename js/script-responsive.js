$('.header-booking a').click(function(){
  $('.booking-form-container').fadeToggle(300);
});

$('.header-search a').click(function(){
  $('.search-form-container').fadeToggle(300);
});


$('#header .nav-item').hover(function(){
  $(this).find('.sub-nav').stop(true).slideToggle(300);
});

$('#button-menu').click(function(){
  $('.nav-list').slideToggle(300);
});

function redimensionnement(){

  if("matchMedia" in window){ // Détection
    if(window.matchMedia("(min-width:992px)").matches){
      // Il y a de la place

    } else {
      // Il y en a moins...
      // $('#header .nav-list').css('display','none');
    }
  }
}
// On lie l'événement resize à la fonction
window.addEventListener('resize', redimensionnement, false);
