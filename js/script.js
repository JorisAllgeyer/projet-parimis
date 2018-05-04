//SUB NAV DROPDOWN

$(document).ready(function(){
  //MOBILE HAMBURGER

  $('#button-menu').click(function(){
    $('.nav-list').slideToggle(300);
  });

  $('.nav-item').hover(function(){
    $(this).find('.sub-nav').stop(true).slideToggle(300);
  });

  // REMPLACER PAR FADE TOOGLE EN LAPTOP

  $('.header-booking span').click(function(){
    $('.booking-form-container').fadeToggle(300);
  });
  $('.header-search span').click(function(){
    $('.search-form-container').fadeToggle(300);
  });

});
