$(window).scroll(function() {
  if ($(document).scrollTop() > 570) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});