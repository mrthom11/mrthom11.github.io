const ids=["filosofici", "giuridici", "napoli","atene", 
"Orazio", "morte", "letterato", "litigio",
 "amicizia", "prigione", "politica", "avvocato", 
 "consolato", "pretura","tradimento","fedeltà" ,
"Britannia","Siria","suicidio","arresto",
"mediazione","repressione","uccisione","misericordia",
"marcia","accordo"];
const buttons= document.getElementsByClassName('btn btn-primary btn-block');
const a=ids.length;
console.log(a);
console.log(buttons);

function studi(){
	const x=document.getElementById("studi");
	if(x.style.display==="none"){
		x.style.display="block";
		window.scrollTo(0,document.body.scrollHeight);
	}
}



function disableodd(num){
	buttons[num+1].disabled=true;
	buttons[num+1].style.background='black';
}

function disableeven(num){
	buttons[num-1].disabled=true;
	buttons[num-1].style.background='black';
}

function choice(num){
		const x=document.getElementById(ids[num]);
		if(x.style.display==="none"){
			x.style.display="block";
			window.scrollTo(0,document.body.scrollHeight);
		}
		if (num%2===0){
			disableodd(num);
		}
		else {
			disableeven(num);
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
