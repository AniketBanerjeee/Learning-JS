const user = {
    name: "Aniket",
    price: 999,

    welcomeMessage: function(){
        // When we want to reffer current context or scope we use this keyword.
        console.log(`${this.name}, Welcome to our website`);
        // it will print the current context
        console.log(this);
    }
}

// user.welcomeMessage()
// user.name = "Soda"
// user.welcomeMessage()


// bcz we are in a node inviorment in this case it will an empty object {} bcz there is no global object.
// but in web it will be windows. cz windows is the global object in web.
// console.log(this);

// "this" in fuction 
// function chai(){
//     let username = "Aniket"
//     // we can see that in the function we can print the value of this. and there is many values.
//     // console.log(this);

//     // but we can see that we can't use this.username in function
//     console.log(this.username);
// }
// chai()

// if we create function this way also it will give the same result
// const chai = function(){
//     let username = "Aniket";
//     console.log(this.username);
// }

// chai()

// this will became arrow function.
const chai = () => {
    let username = "Aniket";
    // it will give the same result as other undefined
    // console.log(this.username);
    // for this case it will give {} result
    console.log(this);
}

// chai()


// Arrow function
// normal
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// arrow function implicite return
// const addTwo = (num1, num2) => num1 + num2

// another is we can add perinthisis on right side also
// const addTwo = (num1, num2) => (num1 + num2)

// if we add {} then we have to write "return" for () we dont have to write that
// console.log(addTwo(3, 7));

// if we want to return an object we just cant write 
// const checkingObject = (num1, num2) => {username: "aniket"}
// we have to wrap it on () then will it work
const checkingObject = () => ({username: "aniket"})
console.log(checkingObject());



