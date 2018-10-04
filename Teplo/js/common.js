$(".item").magnificPopup({
	type : 'image',
	gallery : {
		enabled : true
	},
	removaDelay: 300,
	mainClass: 'mfp-fade'
});


var nav = document.getElementById('nav');
var submenu = document.getElementById('submenu');

	function showSubMenu() {
		if (submenu.style.display == 'block') {
			submenu.style.display = 'none';
		} else {
			submenu.style.display = 'block';
		}
	}
	function showMenu() {
		if (nav.style.display == 'block') {
			nav.style.display = 'none';
		} else {
			nav.style.display = 'block';
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
