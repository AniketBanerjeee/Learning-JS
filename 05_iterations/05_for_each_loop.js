//for each loop.

// it is intigrated with array. and when we want to use that we have to give an call back function.

const arr = ["js", "py", "java", "cpp", "ruby"]
// in callback function doesnot have any names 
// arr.forEach( function (item) {
//     console.log(item)
// } )


// with arrow function
// arr.forEach( (items) => {
//     console.log(items)
// } )


// we can also write a function before and give the refference while giving callback function

// function printMe(item){
//     console.log(item)
// }
// arr.forEach(printMe)


// for each not only take value of items it will also retrieve value of index and whole array

// arr.forEach( (item, index, arr) => {
//     console.log(item, index, arr)
// } )



/////////////////////////////////////////

const my_coding = [
    {
        language : "javascript",
        extention: "js"
    },
    {
        language : "java",
        extention: "java"
    },
    {
        language : "python",
        extention: "py"
    }
    
]

my_coding.forEach( (items) => {
    console.log(items.language);
})


