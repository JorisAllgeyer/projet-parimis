$(document).ready(function(){
  var windowWidth= $(window).width();

//TOGGLE MENU MOBILE
  $('#button-menu').click(function(){
    $('.nav-list').slideToggle(300);

    $('.booking-form-container, .search-form-container').hide();// cache les formulaires booking et search si ouvert
  });
  $('.nav-item').hover(function(){
    $(this).find('.sub-nav').stop(true).slideToggle(300);
    
  });

// TOGGLE BOOKING FORM
  $('.header-booking span').click(function(){
    $('.booking-form-container').fadeToggle(300);
    $('.search-form-container').hide();

	  if(windowWidth < 992){
      $('.nav-list').slideUp(300);// cache le menu si ouvert et fenêtre < 992px
	  }
  });
//TOGGLE SEARCH FORM
  $('.header-search span').click(function(){
    $('.search-form-container').fadeToggle(300);
    $('.booking-form-container').hide();

	  if(windowWidth < 992){
      $('.nav-list').slideUp(300);// cache le menu si ouvert  et fenêtre < 992px
	  }
  });
});
