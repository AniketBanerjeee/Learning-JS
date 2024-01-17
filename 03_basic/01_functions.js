// define function

function sayMyName(){
    console.log("A");
    console.log("I");
    console.log("N");
    console.log("E");
    console.log("K");
    console.log("T");
}
//calling the function
// sayMyName()

// other examples



// adding 2 number

// function addingTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }
// // it will print NaN bcz we have not provide any value
// // addingTwoNumber()
// addingTwoNumber(2, 4)
// // but if we want to store the value in a variable and print

// const answer = addingTwoNumber(2, 4)
// console.log(answer);
// // it will print undefined bcz that function is not returing anything to store. just printing.


// to tackle the last problem we use return keyword
//one way
// function addingTwoNumber(number1, number2){
//     const answer = number1 + number2;
//     return answer
// }

// another way is
function addingTwoNumber(number1, number2){
    return number1 + number2;
    console.log("It will not print bcz it is after return statement");
}

//if we just run this we can see nothing is printed bcz we are not printing anything.
// addingTwoNumber(1, 4)
// for that we have to print like this
// console.log(addingTwoNumber(4, 19))


// another example
// function loginUserMessage(userName){
//     return (`Hello ${userName}`);
// }

// console.log(loginUserMessage("Aniket"))
// here it will print Hello undefined bcz there is no default value.
// console.log(loginUserMessage());


// here we put the default value orry. thats why if we don't give any argument then also it will print with default value
function loginUserMessage(userName = "Orry"){
    return (`Hello ${userName}`);
}
// console.log(loginUserMessage());



///////////////////////////////////////////////////////

// here is easy bcz we are passng one argumnet and returing one but if there is more that one argumnet
// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(10))

// for that we use rest operator "..." it bundle the argument in an array and give as a return
function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(10, 20, 40, 30))

//another tricky example
function calculateCartPrice(val1, val2, ...num2){
    return num2
}
// console.log(calculateCartPrice(10, 20, 40, 30))
// o/p- [ 40, 30 ] bcz val1= 10, val2= 20, and we are only returning ...num2 which is rest of that



// handling object in function
const user = {
    name: "Aniket",
    work: "Engineer"
}

// function name is handleUser and the parameter is anyUser. bcz we will pass an object though tha we access the object value by dot notation
function handleObject(anyUser){
    console.log(`Hi you are ${anyUser.name} and you are ${anyUser.work}`);
}
// here we giving the argument user object which we have define before.
// handleObject(user)

// we can also directly define the object and pass as argument like this
// handleObject({
//     name: "Soda",
//     work: "Artist"
// })


// handling arrays in function same as object
const myArr = [10, 20, 30, 40]

function secondValueOfArr(anyArr){
    console.log(anyArr[1]);
}
// secondValueOfArr(myArr)
// we can also give value directly
// secondValueOfArr([100,200,400,700])


