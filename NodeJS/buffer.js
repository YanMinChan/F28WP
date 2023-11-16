// Buffer is a built in class for Node JS
// it is more like specifying the memory to allocate for a var

var buf = new Buffer.alloc(10);
var len = buf.write("Simply Easy Learning");

console.log("Octets written : "+  len);
console.log(buf.toString('utf8', buf)); //should only output 10 characters