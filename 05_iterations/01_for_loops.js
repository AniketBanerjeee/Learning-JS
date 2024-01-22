// for loop
// 1st part is initialising, 2nd part is condition, 
// if condition is true then it will execute the beneath code
// execute third part increasing or decresing the value.

// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     console.log(element);
    
// }


// we can also add conditional statement in the loop
// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     if (element == 5){
//         console.log("5 is the best number");
//     }
//     console.log(element);
    
// }



// nested loop

// for every i iteration j will iterate 10 times(1-10 as per condition)
// for (let i = 1; i <= 10 ; i++) {
//     console.log(`Outerloop the value of i ${i}`);
//     for (let j = 1; j <= 10; j++){
//         console.log(`Innerloop the value of i ${i} and j ${j} `);
//     }
    
// }
// few line output 
/*
Outerloop the value of i 0
Innerloop the value of i 0 and j 0 
Innerloop the value of i 0 and j 1 
Innerloop the value of i 0 and j 2 
Innerloop the value of i 0 and j 3 
Innerloop the value of i 0 and j 4 
Innerloop the value of i 0 and j 5 
Innerloop the value of i 0 and j 6 
Innerloop the value of i 0 and j 7 
Innerloop the value of i 0 and j 8 
Innerloop the value of i 0 and j 9 
Innerloop the value of i 0 and j 10 
*/


// printing table from 1-10 by nested loops.
// for (let i = 1; i <= 10 ; i++) {
//     console.log(`Table of ${i}`);
//     for (let j = 1; j <= 10; j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     } 
// }




// printing array through loop
// we are taking < myArr.lenght as condition bcz array index starts with 0
// let myArr = ["superman", "batman", "Spiderman"]
// console.log(myArr.length);
// for(i = 0; i < myArr.length; i++){
//     console.log(myArr[i]);
// }






//------ Break and continue --------------------
// If we use break it break the loop and came out of the loop.

// for (let i = 1; i <= 10; i++) {
//         const element = i;
//         if (element == 5){
//             console.log("5 detected");
//             break
//         }
//         console.log(element);
//     }

/* when it trigger break it came out from the loop
 o/p -
1
2
3
4
5 detected
*/

// in the case of continue its only skip the part of the loop and go the step 3 increasing or decresing step

for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 5){
        continue
    }
    // console.log(element);
}

/*
It skip the part(5 in this case) and go to the next step
1
2
3
4
6
7
8
9
10
*/

