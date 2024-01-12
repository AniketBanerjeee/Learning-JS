let score = true

//console.log(typeof (score))

let valueInNumber = Number(score)

//console.log(typeof valueInNumber);
//console.log(valueInNumber);



// "33" >= 33 for number it is easily convertable
// "33abc" >= NaN - not an number
// true >= 1 / false >= 0
// null >= 0
// undefined >= NaN

let isGood = "a"

let changeToBoolean = Boolean(isGood)
//console.log(changeToBoolean);

// 1 or any number positive or negetive > true ; 0 > false
// "" = false empty string is false otherwise true


let num = 77
// console.log(typeof num);
// console.log(num)


let changeToString = String(num)
// console.log(typeof changeToString);
// console.log(changeToString);

// We can also change number to string it look same but the type will change to different.



/****************************Operations*********************************/

let str1 = "Hello"
let str2 = " Aniket"

let str3 = str1 + str2

// console.log(str3);


// console.log(1 + "3");
// console.log(1 + 1 + "3");

/* if you adding number with string it will behave like string and be written side by side like 1st one o/p 13
now js is make operation left to right so for the 2nd one it will do 1st 1+1 = 2 then
this will became the numvber with the string so it will be written side by side. */

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

// x++ the increment operator increments and returns the value before incrementing.
// ++x the increment operator increments and returns the value after incrementing.
