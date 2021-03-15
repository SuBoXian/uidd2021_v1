var vw = document.documentElement.clientWidth * 0.01;
var state = 0;
function scroll_to_home(){
	/*window.scrollTo({top:0*vw, behavior:'smooth'});*/
	document.getElementById("p1").scrollIntoView({block:'start', behavior:'smooth'});
	state = 0;
}
function scroll_to_about_me(){
	document.getElementById("p2").scrollIntoView({block:'start', behavior:'smooth'});
	state = 0;
}
function scroll_to_skill(){
	document.getElementById("p3").scrollIntoView({block:'center', behavior:'smooth'});
	state = 0;
}
function scroll_to_portfolio(){
	document.getElementById("p4").scrollIntoView({block:'start', behavior:'smooth'});
	state = 0;
}
function scroll_contact_me(){
	document.getElementById("p5").scrollIntoView({block:'start', behavior:'smooth'});
	state = 0;
}
function click_more(){
	state = (state==3)? 0 : state + 1;
	if(state==0){
		//document.getElementById("p1_photo").style.backgroundImage = "url('./Home/IMG01.jpg')";
		document.getElementById("p1_photo1").style.zIndex = "3";
		document.getElementById("p1_photo2").style.zIndex = "2";
		document.getElementById("p1_photo3").style.zIndex = "1";
		document.getElementById("p11").style.backgroundColor = "#4d4f52";
		document.getElementById("p12").style.backgroundColor = "#e7ddde";
		document.getElementById("p13").style.backgroundColor = "#e7ddde";
	}
	else if(state==1){
		//document.getElementById("p1_photo").style.backgroundImage = "url('./Home/IMG02.jpg')";
		document.getElementById("p1_photo1").style.zIndex = "1";
		document.getElementById("p1_photo2").style.zIndex = "3";
		document.getElementById("p1_photo3").style.zIndex = "2";
		document.getElementById("p12").style.backgroundColor = "#4d4f52";
		document.getElementById("p11").style.backgroundColor = "#e7ddde";
		document.getElementById("p13").style.backgroundColor = "#e7ddde";
	}
	else if(state==2){
		//document.getElementById("p1_photo").style.backgroundImage = "url('./Home/IMG03.jpg')";
		document.getElementById("p1_photo1").style.zIndex = "2";
		document.getElementById("p1_photo2").style.zIndex = "1";
		document.getElementById("p1_photo3").style.zIndex = "3";
		document.getElementById("p13").style.backgroundColor = "#4d4f52";
		document.getElementById("p12").style.backgroundColor = "#e7ddde";
		document.getElementById("p11").style.backgroundColor = "#e7ddde";
	}
	else{
		//document.getElementById("p1_photo").style.backgroundImage = "url('./Home/IMG01.jpg')";
		document.getElementById("p1_photo1").style.zIndex = "3";
		document.getElementById("p1_photo2").style.zIndex = "2";
		document.getElementById("p1_photo3").style.zIndex = "1";
		document.getElementById("p11").style.backgroundColor = "#4d4f52";
		document.getElementById("p12").style.backgroundColor = "#e7ddde";
		document.getElementById("p13").style.backgroundColor = "#e7ddde";
		scroll_to_about_me();
	}
}
/*function scroll_page(){
	document.querySelectorAll(".nb")[0].style.color="green";
}*/


