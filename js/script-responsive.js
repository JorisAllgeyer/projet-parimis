function myFunction(x) {
  $('#button-menu').click(function(){
    $('.nav-list').slideToggle(300);

    $('.booking-form-container, .search-form-container').hide();// cache les formulaires booking et search si ouvert
  });
  $('.nav-item').hover(function(){
    $(this).find('.sub-nav').stop(true).slideToggle(300);
  });
  
  if (x.matches) {
    $('.header-search span').click(function(){
      $('.search-form-container').fadeToggle(300);
      $('.booking-form-container').hide();
      $('.nav-list').slideUp(300);
    });
    $('.header-booking span').click(function(){
      $('.booking-form-container').fadeToggle(300);
      $('.search-form-container').hide();
      $('.nav-list').slideUp(300);
    });
  }
  else {
    $('.header-search span').click(function(){
      $('.search-form-container').fadeToggle(300);
      $('.booking-form-container').hide();
    });
    $('.header-booking span').click(function(){
      $('.booking-form-container').fadeToggle(300);
      $('.search-form-container').hide();
    });
  }
}

var x = window.matchMedia("(max-width: 992px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
