let name = "Aniket"
let number = 1234323

// console.log("My name is " + name + ". My number is " + number);
// This is the old way of concating or writing any string we should use back tick `` this

// console.log(`My name is ${name}. My number is ${number}`);

// this is the easy way and modern way of writing string.

// console.log(name.length);
// console.log(name[2]);




//This is another way of defining string using objects
const gameName = new String("Aniketfc")

// By using object we can use many method of string which is the most powerful part of string
// console.log(gameName[0]);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf("f"));
// console.log(gameName)

/* There Is many method some are here and many more we have to explore */


const newString = gameName.substring(0, 4)
// console.log(newString);
// Output: Anik- 4 is not included till 4th index it will print. we can't use negetive in this also


// const anotherString = gameName.slice(0,4) // output- Anik
// we can use slice as substring also with start and end value.

// const anotherString = gameName.slice(-5, -2)// Output - ket
// we can also use slice with negetive numbers. where -1 is the last letter.


const anotherString = gameName.slice(-2)
const oneanotherString = gameName.slice(3)
// console.log(anotherString);
// console.log(oneanotherString);

// if we use only one parameter it will print rest from there.

const newStringOne = "   Aniket"
console.log(newStringOne);
console.log(newStringOne.trim());
// It trims the white spaces

const url = "www.google.com google"
console.log(url.includes("google"));
console.log(url.includes("facebook"));
// inclues return true and false


console.log(url.replace(".", "-"))
//The replace() method replaces only the first match

console.log(url.replace(/GOOgle/i , "facebook"))
// if you use /string/i it will check case insensitively and replace
// this is /i flag

console.log(url.replace(/google/g , "facebook"))
// if you use /string/g it will check replace all the strings
// this is /g flag

console.log(url.split("."))
// it will split the variable in a array form.




