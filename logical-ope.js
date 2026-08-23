let a = 0;
let b = 5;
let c = (a || b) && (a = 10) || (b = 20);
console.log(c)

/* 
here a = 0 and b = 5
a || b will return 5 because a is falsy and b is truthy
then (a = 10) will be executed and a will be assigned 10
then (b = 20) will not be executed because the previous expression is truthy

so c will be assigned the value of (a = 10) which is 10
*/