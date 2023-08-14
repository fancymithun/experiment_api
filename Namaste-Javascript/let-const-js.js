//let and const are hoisted

// when let or const are hoisted and initialized inbetween state is called temporal dead zone and you are thrown with reference error

console.log(a)
var a = 19
console.log(b) // hoisted
// in between state is called temporal dead zone and it will be in script scope
let b = 10 // initialized

console.log(z)// here we get error of z is not defined and is reference error but not throw not initialized error
// this is not defined error

//so for let const values won't be present in global/window object
// window.b is undefined
// window.a is 19 because available for var not for let and const