// cookies can be set in js by document.cookie

// cookie helper function
function Cookie(name, value, days){ //cookie name, value and how long it will last in days
	d = new Date();
	if (days < 0){ // Deleting the cookie
		d.setTime(0);
	} else{ // Set expiring time
		d.setTime(d.getTime() + days * 24*60*60*1000) //time is set in milliseconds
	}
	return name + "=\"" + value +  "\"; Expires = \"" + d.toUTCString() + "\""; 
}

function go(){
	//add cookie
	c = Cookie("Skill", "basic", 2) + "; Domain = hw.ac.uk; Path = /";
	document.cookie = c;
	document.getElementById("ck").innerHTML  = "Cookie set: " + c;
}

function go2(){
	//delete cookie by giving it date in past
	c = Cookie("Skill", "anything", -1) + "; Domain = hw.ac.uk; Path = /";
	document.cookie = c;
	document.writeln("Cookie set: " + c);
}

//smtg wrong with document.cookie as it is empty from bfr but whatever this should work
function getCookie(){
	let name = document.getElementById('ckk').value + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let cArray = decodedCookie.split(";");
	
	for (let i = 0; i < cArray.length; i++){
		let cooki = cArray[i];
		// removing the space
		while (cooki.charAt(0) == ' ') {
			cooki = cooki.substring(1);
		}
		// loop and find cookie, if found return cookie
		if (cooki.indexOf(name) == 0) {
			alert(cooki.substring(name.length, cooki.length));
		}
	}
	alert("idk");
}