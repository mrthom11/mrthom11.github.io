function intermezzo(){
	var intermezzo = document.getElementById("intermezzo");
	if (intermezzo.style.display == "none") {
		intermezzo.style.display = "block";
	}
}

function godown(){
  window.scrollTo(0,document.body.scrollHeight);
}
function giuridici() {
  var x = document.getElementById("giuridici");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
}
function filosofici(){
	var y = document.getElementById("filosofici");
	if (y.style.display == "none"){
		y.style.display = "block";
		intermezzo();
	}

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

