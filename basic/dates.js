// dates

let myDate = new Date()

// console.log(myDate);
// console.log(myDate.getDate());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toString());


// creating dates
// let createdDate = new Date(2024, 0, 30, 20, 30)
let createdDate = new Date("2024-02-15") // yyyy/mm/dd
// let createdDate = new Date("12-04-2024") // mm/dd/yyyy

// console.log(createdDate.toDateString());
// console.log(createdDate.toLocaleString());


// timestamp

// it is the milisecond time from January 01, 1970.
let timeStamp = Date.now()
// times in milisecond
// console.log(timeStamp);
// console.log(createdDate.getTime());

// time in second
console.log(Math.floor(Date.now() / 1000));





