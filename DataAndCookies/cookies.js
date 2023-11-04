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
	document.cookie = c
	document.getElementById("ck").innerHTML  = "Cookie set: " + c;
}

function go2(){
	//delete cookie by giving it date in past
	c = Cookie("Skill", "anything", -1) + "; Domain = hw.ac.uk; Path = /";
	document.cookie = c
	document.writeln("Cookie set: " + c);
}