function ensure(value) {
	// Your code goes here
	if (arguments.length <= 0) { throw ('no args'); }
	if (typeof arguments[0] == "undefined") { throw ('undef arg') }
  
	return arguments[0];
  }
  
  var x;
  
  try {
	console.log(ensure(x));
  } catch (e) {
	console.error(e);
  }