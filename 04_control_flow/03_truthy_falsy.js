// truthy means code genarally think it is a true value and flasy means false value
// You can check any value truthy or falsy by changing the value below.
// let value = ""

// if (value){
//     console.log("It's truthy value");
// } else{
//     console.log("It's flasy value");
// }

// Falsy values
// false, 0, -0, BigInt 0n, null, undefined, NaN

// tricky truthy values
// "0", " ", 'false', [], {}, function(){}




//--------------------------------------------------------------------------
// How to check array is empty or not

// let newArr = []

// if (newArr.length === 0) {
//     console.log("Array is empty");
// }




// How to check object is empty or not

let newObj = {}
// we are searching for object key. it return array form so we can use direct .lenght to it and check.
if (Object.keys(newObj).length === 0){
    console.log("Object is empty");
}










