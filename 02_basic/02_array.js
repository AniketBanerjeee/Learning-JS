const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["batman", "flash", "superman"]

// in this case dc heros will add as an array in marvel heros
// marvel_heros.push(dc_heros)
// o/p- [ 'thor', 'ironman', 'spiderman', [ 'batman', 'flash', 'superman' ] ]

// const all_heros = marvel_heros.concat(dc_heros)
//[ 'thor', 'ironman', 'spiderman', 'batman', 'flash', 'superman' ]
// console.log(all_heros)


// easyway to do this is as a spread operator.
// it takes values from the arrays and spread all in a single array
// const all_real_heros = [...marvel_heros, ...dc_heros, ...marvel_heros]
// console.log(all_real_heros);


// const bad_array = [1, 2, 3, [4, 5], 6, [7, [8 , 9]]]
// const bad_to_good_array = bad_array.flat(Infinity)
// console.log(bad_to_good_array);

// check and return in boolean
console.log(Array.isArray("Aniket"))

//make the thing array
console.log(Array.from("Aniket"))
//o/p- [ 'A', 'n', 'i', 'k', 'e', 't' ]

let score1 = 100
let score2 = 200
let score3 = 300
let name = "Ani"
let isGood = true

// make an array from the variable
console.log(Array.of(score1, score2, score3, name, isGood));
// o/p- [ 100, 200, 300, 'Ani', true ]






