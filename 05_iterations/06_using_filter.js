const coding = ["js", "ruby", "java", "cpp", "python"]

// for each loop does not return anything so we can't use that when we want to return some perticular things
// const values = coding.forEach(items => {
//     console.log(items)
//     return items
// });
// console.log(values)



// using filter
// filter return the values 

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// here we are also using arrow function
// const values = nums.filter( (items) => items > 5)
// console.log(values) // output -> [ 6, 7, 8, 9 ]


// here the output is [] bcz if we use {} then we have to write "return" keyword then it will work.
// const values = nums.filter( (items) => {
//     items > 5
// } )
// console.log(values); // output-> []


// const values = nums.filter( (items) => {
//     return items > 5
// } )
// console.log(values); // output-> [6, 7, 8, 9 ]


// tring to achieve same output with for each loop

// const newArr = []
// nums.forEach( (nums) => {
//     if(nums > 5){
//         newArr.push(nums)
//     }
// } )
// console.log(newArr);



// ********************* Exercise on filter ***************************

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


let userBooks = books.filter( (bk) => bk.genre === "History")
// it it providing output in array and object inside that array
// console.log(userBooks)
// output
/* 
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]
*/
// if we just want the title of the books then we have to run the loop and get the value
// for (const bk of userBooks ) {
//     console.log(bk.title)
// }
// output 
/* Book Three
   Book Seven
*/

// we can use the filter with any other cases
userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre == "History"
})

console.log(userBooks)




