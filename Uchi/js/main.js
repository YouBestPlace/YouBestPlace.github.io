var rand_a = document.getElementById('rand_a');
var rand_b = document.getElementById('rand_b');
var rand_ab = document.getElementById('rand_ab');
var btn_out = document.getElementById('btn_out');
var btn = document.getElementById('btn');
var btn_3 = document.getElementById('btn_3');
var finish = document.getElementById('finish');
var rand_ab_invisible = document.getElementById('rand_ab_invisible');
var result_a = rand_a.innerHTML = rand(6, 9);
var result_ab = rand_ab.innerHTML = rand(11, 14);
var result_b = rand_b.innerHTML = result_ab - result_a;
console.log(result_ab);
rand_ab.style.display = 'none';
var step = 39;
var canvas=document.getElementById('cnvs');
var ctx = canvas.getContext('2d');

function arc(n1, n2) {
	var x0 = 50;
	var y0 = 200;
	x1_1 = x0 + n1 * step;
	x2_1 = x0 + n2 * step;
	var h = y0 - ((x2_1 - x1_1)*0.5);
	var px = 0.5 * x1_1 + 0.5 * x2_1;
	var py = 0.5 * y0 + 0.5 * h;
	ctx.beginPath();
	ctx.moveTo(x1_1,y0);
	ctx.quadraticCurveTo(px, h, x2_1, y0);
	ctx.lineTo(x2_1 - 10,y0 - 5);
	ctx.lineTo(x2_1 ,y0 );
	ctx.lineTo(x2_1-4,y0 - 10);
	ctx.lineTo(x2_1, y0);
	ctx.lineWidth = 2;
	ctx.strokeStyle = "##B65D7B"
	ctx.stroke();
}

arc(100,117);
arc(100,117);
console.log(x2_1);
console.log(x1_1);

function arc_2(n1, n2) {
	var x0 = x2_1;
	var y0 = 200;
	x1 = x0 + n1 * step;
	x2 = x0 + n2 * step;
	var h = y0 - ((x2 - x1)*0.5);
	var px = 0.5 * x1 + 0.5 * x2;
	var py = 0.5 * y0 + 0.5 * h;
	ctx.beginPath();
	ctx.moveTo(x1,y0);
	ctx.quadraticCurveTo(px, h, x2, y0);
	ctx.lineWidth = 1;
	ctx.lineTo(x2 - 10,y0 - 5);
	ctx.lineTo(x2 ,y0 );
	ctx.lineTo(x2-4,y0 - 10);
	ctx.lineTo(x2, y0);
	ctx.lineWidth = 2;
	ctx.strokeStyle = "#B65D7B"
	ctx.stroke();
}
arc_2(100,117);

function rand(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function f1() {
	var n = document.getElementById('inp').value;
	var n2 = document.getElementById('inp_2').value;
	var p = document.getElementById('out');
	var p2 = document.getElementById('out_2');
	var math = document.getElementsByClassName("math");
	if(n == result_a){
		inp.style.display = 'none';
		p.innerHTML = result_a;
		rand_a.style.background = '#fff';
		btn.style.display = 'none';
		if (result_b == 2){
			arc_2(0, 2);
			btn_out_2.style.display = 'inline-block'
			btn_out_2.style.left = (((x2 - x1) * 0.5) + x2_1)  + 'px';
			btn_out_2.style.top = '45px';
		} else if (result_b == 3){
			arc_2(0, 3);
			btn_out_2.style.display = 'inline-block'
			btn_out_2.style.left = (((x2 - x1) * 0.5) + x2_1)  + 'px';
			btn_out_2.style.top = '45px';
		} else if (result_b == 4){
			arc_2(0, 4);
			btn_out_2.style.display = 'inline-block'
			btn_out_2.style.left = (((x2 - x1) * 0.5) + x2_1)  + 'px';
			btn_out_2.style.top = '45px';
		} else if (result_b == 5){
			arc_2(0, 5);
			btn_out_2.style.display = 'inline-block'
			btn_out_2.style.left = (((x2 - x1) * 0.5) + x2_1)  + 'px';
			btn_out_2.style.top = '45px';
		} else if (result_b == 6){
			arc_2(0, 6);
			btn_out_2.style.display = 'inline-block'
			btn_out_2.style.left = (((x2 - x1) * 0.5) + x2_1)  + 'px';
			btn_out_2.style.top = '45px';
		} else if (result_b == 7){
			arc_2(0, 7);
			btn_out_2.style.display = 'inline-block'
			btn_out_2.style.left = (((x2 - x1) * 0.5) + x2_1)  + 'px';
			btn_out_2.style.top = '45px';
		}else if (result_b == 8){
			arc_2(0, 8);
			btn_out_2.style.display = 'inline-block';
			btn_out_2.style.left = (((x2 - x1) * 0.5) + x2_1)  + 'px';
			btn_out_2.style.top = '45px';
		}
	}
	else if(n != result_a){
		inp.style.color = 'red';
		rand_a.style.background = '#F7A848';
	}	
}

function f2() {
	var n2 = document.getElementById('inp_2').value;
	var inp = document.getElementById('inp');
	var btn_2 = document.getElementById('btn_2');
	var p2 = document.getElementById('out_2');
		if(n2 == result_b){
			inp_2.style.display = 'none';
			p2.innerHTML = result_b;
			rand_b.style.background = '#fff';
			btn_2.style.display = 'none';
			rand_ab_invisible.style.display = 'none';
			finish.style.display = 'inline-block';
			btn_3.style.display = 'inline-block';
		} else if(n2 != result_b){
		inp_2.style.color = 'red';
		rand_b.style.background = '#F7A848';
		}	
}
function f3() {
		if (finish.value == result_ab) {
			rand_ab_invisible.innerHTML = result_ab;
			rand_ab.style.display = 'inline-block';
			btn_3.style.display = 'none';
			finish.style.display = 'none';
		} else if (finish.value != result_ab) {
			finish.style.color = 'red';
		}
}

	if (result_a == 7) {
		arc(0, 7);
		btn_out.style.left = (((x2_1 - x1_1) * 0.5) + 42)  + 'px';
		btn_out.style.top = '45px';
	} else if (result_a == 6) {
		arc(0, 6);
		btn_out.style.left = (((x2_1 - x1_1) * 0.5) + 42)  + 'px';
		btn_out.style.top = '45px';
	} else if (result_a == 7) {
		arc(0, 7);
		btn_out.style.left = (((x2_1 - x1_1) * 0.5) + 42)  + 'px';
		btn_out.style.top = '45px';
	} else if (result_a == 9) {
		arc(0, 9);
		btn_out.style.left = (((x2_1 - x1_1) * 0.5) + 42)  + 'px';
		btn_out.style.top = '45px';
	} else if (result_a == 6) {
		arc(0, 6);
		btn_out.style.left = (((x2_1 - x1_1) * 0.5) + 42)  + 'px';
		btn_out.style.top = '45px';
	} else if (result_a == 8) {
		arc(0, 8);
		btn_out.style.left = (((x2_1 - x1_1) * 0.5) + 42)  + 'px';
		btn_out.style.top = '45px';
	} else if (result_a == 9) {
		arc(0, 9);
		btn_out.style.left = (((x2_1 - x1_1) * 0.5) + 42)  + 'px';
		btn_out.style.top = '45px';
	}