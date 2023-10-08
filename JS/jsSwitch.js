//Examples of Switch statements
let x = '0';
switch(x){
	case 0:
		text = "Zero";
		break;
	case 1:
		text = "One";
		break;
	default:
		text = "Not zero or one";
}

//not zero or one will be returned since switch use strict comparisons (===)
alert(text);