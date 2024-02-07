// for in loops

// in object
const myObject = {
    py: "python",
    js: "javascript",
    cpp: "C++",
    java: "java"
}

for (const key in myObject) {
    // console.log(`key is ${key}, value is ${myObject[key]}`)
}

// in array

// if we only print key then it will return the index values of that. bcz thats the key and fon in loop return that
const programming = ["java", "py", "js", "cpp"]
for (const key in programming) {
    // console.log(key) // output -> 0 1 2 3
    console.log(programming[key])
}

// map will not work with for in loops

