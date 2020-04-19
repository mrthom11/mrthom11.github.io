const buttonf=document.getElementById("btn1");
const buttong=document.getElementById("btn2");

function filosofici(){ 
	var y = document.getElementById("filosofici");
	if (y.style.display==="none"){
		y.style.display ="block";
		window.scrollTo(0,document.body.scrollHeight);
	}
	buttonf.disabled=true;
	buttong.disabled=true;
}
function giuridici() {
	var x = document.getElementById("giuridici");
	if (x.style.display === "none") {
	  x.style.display = "block";
	  window.scrollTo(0,document.body.scrollHeight);
	}
	buttong.disabled=true;
	buttonf.disabled=true;
  }
	  

function avvocato(){
	var z = document.getElementById("avvocato");
	if (z.style.display==="none"){
    z.style.display ="block";
    window.scrollTo(0,document.body.scrollHeight);
	}

}
function politica(){
	var a = document.getElementById("politica");
	if (a.style.display==="none"){
    a.style.display ="block";
    window.scrollTo(0,document.body.scrollHeight);
	}
}
