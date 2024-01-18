// block scope, global scope

// In this example you can see that value of C which is var that can be acessable from outside also so it avoing the scope
// In the case of let and const it cannot be accessable from out side of the scope {}
// this is global scope
let d = 50
if (true){
    let a = 20;
    const b = 30;
    // var c = 40;
    // bcz d is global variable it can be acessable by scope
    // console.log(d);
}

// console.log(a);
// console.log(b);
// console.log(c);
// bcz d is global value and in global scope it can be acessable by anywhere.
// console.log(d);



//// nested function and scope. (closure in javascritp for detail knowledge hitesh eng channel)

function one(){
    const name = "Aniket"

    function two(){
        const website = "youtube"
        // it can acess parent function value
        console.log(name);
    }
    // It will get in the error bcz website is out of scope one() it cannot acess child value
    // console.log(website);

    two()

}
// one()


// ***************** Two ways of declair function ******************
// one way
// In this case if you call the function before lines it will not give errors.
// console.log(addOne(3)) // like this

function addOne(number){
    return number + 1
}

console.log(addOne(3))

// another way 
// But in this case it will give error for the same situation
// console.log(addTwo(7))
const addTwo = function(number){
    return number + 2
}

console.log(addTwo(7))











