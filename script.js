let a=0;
let b=0;
let c=0;
let d=0;
let e=0;


function studi(){
	var x=document.getElementById("studi");
	if(x.style.display==="none"){
		x.style.display="block";
		window.scrollTo(0,document.body.scrollHeight);
	}
}
function filosofici(){ 
	var x = document.getElementById("filosofici");
	if (x.style.display==="none" && a!==1){
		x.style.display ="block";
		a+=1
		window.scrollTo(0,document.body.scrollHeight);
	}	
}
function giuridici() {
	var x = document.getElementById("giuridici");
	if (x.style.display === "none"&& a!==1) {
	  x.style.display = "block";
	  a+=1;
	  window.scrollTo(0,document.body.scrollHeight);
	}
}
function napoli(){
	var x = document.getElementById("napoli");
	if (x.style.display==="none" && c!==1){
    x.style.display ="block";
	window.scrollTo(0,document.body.scrollHeight);
	c+=1;
	}	
}
function atene(){
	var x = document.getElementById("atene");
	if (x.style.display==="none" && c!==1){
    x.style.display ="block";
	window.scrollTo(0,document.body.scrollHeight);
	c+=1;
	}	
}
function avvocato(){
	var x = document.getElementById("avvocato");
	if (x.style.display==="none" && b!==1){
    x.style.display ="block";
	window.scrollTo(0,document.body.scrollHeight);
	b+=1;
	}
}
function politica(){
	var x = document.getElementById("politica");
	if (x.style.display==="none"&& b!==1){
    x.style.display ="block";
	window.scrollTo(0,document.body.scrollHeight);
	b+=1;
	}
}
function consolato(){
	var x = document.getElementById("consolato");
	if (x.style.display==="none"&& d!==1){
    x.style.display ="block";
	window.scrollTo(0,document.body.scrollHeight);
	d+=1;
	}
}
function pretura(){
	var x = document.getElementById("pretura");
	if (x.style.display==="none"&& d!==1){
	x.style.display ="block";
	window.scrollTo(0,document.body.scrollHeight);
	d+=1;
	}
}

function tradimento(){
	var x = document.getElementById("tradimento");
	if (x.style.display==="none"&& e!==1){
	x.style.display ="block";
	window.scrollTo(0,document.body.scrollHeight);
	e+=1;
	}
}

function fedeltà(){
	var x = document.getElementById("fedeltà");
	if (x.style.display==="none"&& e!==1){
	x.style.display ="block";
	window.scrollTo(0,document.body.scrollHeight);
	e+=1;
	}
}







































function fine(){
	alert("Mi spiace ma non sarai tu il nuovo imperatore");
	window.location.href="loser.html";
}
function win(){
	alert("complimenti sarai tu il nuovo imperatore");
	window.location.href="winner.html";
}

