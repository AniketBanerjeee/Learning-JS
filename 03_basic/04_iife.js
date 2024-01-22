// Immidiately invoked function expression

// we use iife bcz we not only want to execute the function immedeately
// but also we don't want pollution from global variable.
(function chai(){
    // named iife. name is chai
    console.log("DB Connected");
})();

//()()
// in 1st perenthesis we wrap the function 2nd is for execution

// iife with arrow function no name iife
(() => {
    console.log("DB Connected two");
})();

// passing parameter in iife
((name) => {
    console.log(`DB Connected two ${name}`);
})("MySQL");







