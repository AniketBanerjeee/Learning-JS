// reduce
/*
In reduce it talk call back function here we have to put mainly 3 values 
accumulator, current value, initial value.
in funtion parameter we provide accumulator and current value
for the 1st time accumulator will be initial value(which we have to provide).
current value will be what it is iretating through
in function body we can write logic and and return what we wanted to return
in these case we are adding the array value so we add current value and accumulator
in first iteration accumulator is initial value
from the second iteration accumulator became what the function is returing.
so this is how reduce work.
*/

// const arr = [1, 2, 3]

// const sumWithInitial = arr.reduce( function (acc, crrVal) {
//     console.log(`acc is ${acc}, curr value is ${crrVal}`)
//     return crrVal + acc
// }, 0)
// // 0 => is initial value here.
// console.log(sumWithInitial)


// with arrow function
// const sum = arr.reduce( (acc, crr) => acc + crr, 0)

// console.log(sum);

//////////////////////////////////////////////

const course = [
    {
        courseName : "JavaScript",
        price: 999
    },
    {
        courseName : "DataScience",
        price: 3999
    },
    {
        courseName : "AI",
        price: 5999
    }
]

// const courseValue = course.reduce( function (acc, course) {
//     return course.price + acc
// }, 0 )
// console.log(courseValue);


const totalValue = course.reduce( (acc, crs) => acc + crs.price, 0)

console.log(totalValue);


