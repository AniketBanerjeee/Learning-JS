// singleton -- if make from constructor
// Object.create


// object literal


const mySym = Symbol("key1")

const JsUser = {
    name : "Aniket",
    "full name": "Aniket Banerjee",
    // if we write( mySym: "mykey1") it is not right syntax. it will not refer a symbol.
    [mySym]: "mykey1",
    age: 20,
    email: "aniket@google.com",
    lastLogin: ["Monday", "Sunday"]
}


// two way of getting the value
// console.log(JsUser.email);
// it will give error bcz in objects key is also store itself like string so the right way is using ""
// console.log(JsUser[email]);
// the right way
// console.log(JsUser["email"]);

// full name is can't accessed by dot. so we need to know the second way 
// console.log(JsUser["full name"]);

// printing the symbol
// console.log(JsUser[mySym]);


//this is the way you can change a value in object
JsUser.email = "aniket@chatgpt.com"
// this way you can freeze the object noting can be changed after that
// Object.freeze(JsUser)
// JsUser.email = "aniket@microsoft.com"

// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
