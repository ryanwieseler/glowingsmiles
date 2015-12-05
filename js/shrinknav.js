//thanks to LearnWebCode https://www.youtube.com/watch?v=utonytGKodc for the scripts

var navOffset = $('nav').offset().top;

$('nav').wrap('<div class="nav-placeholder"></div>');
$('.nav-placeholder').height($('nav').outerHeight());

$(window).scroll(function() {
	var scrollPos = $(window).scrollTop();
	
	if(scrollPos >= navOffset) {
		$('nav').removeClass('navbar-static-top');
		$('nav').addClass('navbar-fixed-top');
	} else {
		$('nav').removeClass('navbar-fixed-top');
		$('nav').addClass('navbar-static-top');				
	}
	
});