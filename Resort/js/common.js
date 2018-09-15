$(document).ready(function(){
	$('.go_to').click(function(){
		var scroll_el = $(this).attr('href'); 
			if ($(scroll_el).length != 0) {
			$('html, body').animate({scrollTop: $(scroll_el).offset().top}, 800);
			}
		 	return false;
	});
});

$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() !=0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function(){
		$('body,html').animate({scrollTop:0},800);
	});
});

$(function(){
	$('.burger_trigger').click(function(){
		$('.menu').show();
	});
});

$(document).ready(function(){
	$('.icon_menu').click(function(event){
		$('.visible').toggleClass('active');
	});
});