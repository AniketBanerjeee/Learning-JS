// array


// array can be made up by number, string, boolean another array object etc or all together also.
const myArr = [1, 2, 3, 4, 5]

// print the array
// console.log(myArr);
// printing perticular value of the index
// console.log(myArr[2]);


//another way of defining array
// const myArr2 = new Array(0, 1, 2, 3, 4)


// Array method

//enter an element in the end
// myArr.push(10)
//enter element in the 1st index 
// myArr.unshift(20)
//delete the last elemet
// myArr.pop()
//delete the first element of the array
// myArr.shift()


// console.log(myArr.includes(2));
// console.log(myArr.indexOf(2));


// convert the array into string.
const myna = myArr.join()


// console.log(myArr);
// console.log(myna);



// slice and splice

console.log("og array ", myArr);

// it will slice from index 1 - 2, 3 is excluded
// const myn1 = myArr.slice(1 , 3)
// console.log("slice array ", myn1);
// console.log("real array after performing slice ", myArr);



// in splice it change the real array. 
// const myn2 = myArr.splice(1 , 3)

//syntax [splice(start, deleteCount, item1, item2, /* …, */ itemN)]
const myn2 = myArr.splice(5 , 0, 6)
// console.log("splice array ", myn2);
// console.log("real array after performing splice ", myArr);







