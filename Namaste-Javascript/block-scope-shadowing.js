var a = 20
let g = 100
{
    var z = 80
    const b = 30
    let c = 90
    var a = 30 // shadowing
    let g = 300
}

function aFunction(){
    var j = 20
    let k = 30
    const l = 40
    console.log("a is called")
}
aFunction()
console.log(a)
console.log(g);
console.log(z)
console.log(b)
console.log(c)

// In browser remember 4 scope (1) global (2) script (3) block (4) local

// global for var variables
// script for let and const variables in global execution context
// block for let and const variables in block but var in block considered in global
// local for var,let,const and this is for functions outside functions it is not accessible