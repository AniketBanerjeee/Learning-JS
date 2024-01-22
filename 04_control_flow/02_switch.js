// when we want to check many condition at a same time we use switch statement
// switch syntax

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }



// one example

// let month = "mar";

// switch (month) {
//     case "jan":
//         console.log("Your month number is 1");
//         break;
//     case "feb":
//         console.log("Your month number is 2");
//         break;
//     case "mar":
//         console.log("Your month number is 3");
//         break;
//     case "apr":
//         console.log("Your month number is 4");
//         break;

//     default:
//         console.log("Please enter currect value");
//         break;
// }




// same example differently

let month = 3;

switch (month) {
    case 1:
        console.log("Your month is jan");
        break;
    case 2:
        console.log("Your month is feb");
        break;
    case 3:
        console.log("Your month is mar");
        break;
    case 4:
        console.log("Your month is apr");
        break;

    default:
        console.log("Please enter currect value");
        break;
}

// if nothing is executed default will execute

// if you miss to write break; everything after break will execute till default

