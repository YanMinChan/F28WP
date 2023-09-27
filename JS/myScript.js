/* External script cannot contain script tags */

/* innerHTML write into a HTML element*/
function myFunction(){
	document.getElementById("beautiful").innerHTML = "You're beautiful!";
}

/* document.write write on the HTML output, but it deletes all existing HTML*/
function docWrite(){
	document.write("Error");
}

/* window.alert display an alert box */
//window.alert("Hello");


/* window.print display a print option */
function getPrint(){
	window.print();
}

/* console.log write into browser console */
/* console can be found be pressing F12 */
function getConsole(){
	document.getElementById("beautiful").innerHTML = "Press F12 to open console.";
	console.log("This is the console log.");
}


{
	var a = "Hi hi";
}

alert(a);