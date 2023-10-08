var foo; //foo is undefined here

foo = function foo() {
  alert(foo == foo);
  alert(typeof(foo));
};

//foo() will call the function where foo==foo is true and foo is a function type
foo();