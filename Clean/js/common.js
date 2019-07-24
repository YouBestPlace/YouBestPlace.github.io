$(".item").magnificPopup({
	type : 'image',
	gallery : {
		enabled : true
	},
	removaDelay: 300,
	mainClass: 'mfp-fade'
});

$(document).ready(function(){
	$('.a2').click(function(){
		var scroll_el = $(this).attr('href'); 
			if ($(scroll_el).length != 0) {
			$('html, body').animate({scrollTop: $(scroll_el).offset().top}, 800);
			}
		 	return false;
	});
});

var a1 = document.getElementById('a1');
var nav_drop = document.getElementById('nav_drop');
var nav_drop_2 = document.getElementById('nav_drop_2');

	function showMenu() {
		if (nav_drop.style.display == 'block') {
			nav_drop.style.display = 'none';
		} else {
			nav_drop.style.display = 'block';
		}
	}

	function showMenu_2() {
		if (nav_drop_2.style.display == 'block') {
			nav_drop_2.style.display = 'none';
		} else {
			nav_drop_2.style.display = 'block';
		}
	}
	
document.getElementById('slider_left').onclick = sliderLeft;
document.getElementById('slider_right').onclick = sliderRight;
//autoSlider();
var left = -2304;
var timer;

/*function autoSlider(){
	timer = setTimeout(sliderLeft, 3000);
}*/

function sliderLeft(){
	var polosa = document.getElementById('polosa');
	left = left+1152;
	if (left > 0){
		left = -2304;
		//clearTimeout(timer);
	}
	polosa.style.left = left +'px';
	//autoSlider();
}

function sliderRight(){
	var polosa = document.getElementById('polosa');
	left = left-1152;
	if (left < -4608){
		left = -2304;
		//clearTimeout(timer);
	}
	polosa.style.left = left +'px';
	//autoSlider();
}