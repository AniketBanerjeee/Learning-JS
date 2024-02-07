// for of loop

// ["", "", ""]
// [{}, {}, {}]

// for off loop - easy way to print array and strings also
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}
// for string
const greeting = "Hello there!"
for (const greet of greeting) {
    // console.log(greet)
}


// Maps

const map = new Map()
map.set("IN", "India")
map.set("FN", "France")
map.set("SP", "Spain")
map.set("IN", "India")

// console.log(map)
// output -> Map(3) { 'IN' => 'India', 'FN' => 'France', 'SP' => 'Spain' }


for (const key of map) {
    console.log(key)
}
// output -> [ 'IN', 'India' ]
//           [ 'FN', 'France' ]
//           [ 'SP', 'Spain' ]


// here we are using array destructuring]
for (const [key, value] of map) {
    console.log(`${key} :- ${value}`)
}

// we can loop maps through for of loop.


// we cannot loop through objects with for of loop




