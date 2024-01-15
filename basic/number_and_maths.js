const score = 400

// console.log(score);

// same as string we can define number also this way
const balance = new Number(30.1000);
// console.log(balance)

// console.log(balance.toString().length); // It is converting the number into string.
// console.log(balance.toFixed(2)); //it will take 2 points after decimal


const hundred = 10000000
// console.log(hundred.toLocaleString('en-In'));
// it give comma in the middle so we can read it easyly. en-In is for indian standards



// ****************** MATHS ******************************

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.abs(-3));
// console.log(Math.max(7 , 3, 8, 10));
// console.log(Math.min(7 , 3, 8, 10));
// console.log(Math.pow(25, 4));

// return a number between 0 - 1
// console.log(Math.random());

// return a number between 0-9 in decimal 
// console.log(Math.random() * 10);

// return a number between 0-10
// console.log(Math.floor(Math.random() * 11));

// Returns a random integer from 1 to 10:
// Math.floor(Math.random() * 10) + 1;


// when you need value in certain range

const min = 10;
const max = 20;

result = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(result)






