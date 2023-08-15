a() // a called
// b() // this throws typeerror: b is not function
// Function statement is also known as function declaration
function a(){
    console.log("a called")
}

// Function expression
var b = function(){
    console.log("b is called")  // difference between function statement and function expression is hoisting
}

// Function declaration
function a(){
    console.log("a called")
}


// Anonymous function
// function (){ //this is anonymous but this turns out to be syntax error
//     console.log("a called")
// }
// so anonymous function is a function which can which don't have name and can be assigned to variable

// Named function expression
var a = function xyz(){
    console.log("Hi named fufnction expresiion")
}

// Difference between Parameters and arguments
// variables passed in local of function or identifier/label are parameters gets these values
// and variables passed we are just passing here not getting but giving

var a = function(a,b){ // a and b are parameters
    console.log("Hi named fufnction expresiion")
}

a(1,2) // this is argument


// First class functions
// ability to call function inside another function as a argument is called first class functions
// functions are first class citizens refereing to first class functions
var a = function (param1){
    console.log(param1)
}

function xyz(){

}

a(xyz)

// Arrow functions
