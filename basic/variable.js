const accountId = 12345;
let accountEmail = "abc@gmail.com";
var accountPassword = "232623";
accountCity = "Kolkata";

let accountspouse; // if we not assign to anything it will show undefined.

/*
Const is not changable
let is normal which we can change
var is like let but it has some problem to deal with scope so use let instead of var
It is possible to declare variable without let and var but its not recommended.
*/


accountEmail = "mno@gmail.com";
accountPassword = "0000000";
accountCity = "Memari";

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountspouse]);

// if we use console.table([]) then it show us the value in tabular format all in one.
