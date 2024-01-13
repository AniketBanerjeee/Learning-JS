// Stack and Heap
// Primitive datatype use Stack
// Non Primitive datatypes use Heap.

// Now when we use stack memory method is give us a copy of the value. 
// In heap it give us the reffence of original value.
// so in stack if we change anything older value will be remain same with respective variable
// but in heap if we change anything older value will also change bcz it reffered the og value





// let one = "hello"

// let two = one;
// two = "Aniket"

// console.log(one); // o/p- hello
// console.log(two); // o/p- Aniket

// Here one value is there and two get a copy of value one and change is so both values are there.


let oneUser = {
    name : "Aniket",
    address: "Memari"
}

console.log(oneUser.address)
// The output is Memari

let twoUser = oneUser

twoUser.address = "Kolkata"

console.log(oneUser.address)
console.log(twoUser.address)
// In this case we change the value of address with diffent user still it change in the 1st user

// This is the difference between using stack memory and heap memory