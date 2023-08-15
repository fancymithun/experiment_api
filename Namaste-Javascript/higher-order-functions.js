let radius = [2,3,4,5]

const calculateArea = (radius) => {
    let output = []
    for(let i=0; i < radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i])
    }
    console.log(output);
}

const calculateCircumference = (radius) => {
    let output = []
    for(let i=0; i < radius.length; i++){
        output.push(2 * Math.PI * radius[i])
    }
    console.log(output);
}

const calculateDiameter = (radius) => {
    let output = []
    for(let i=0; i < radius.length; i++){
        output.push(2 * radius[i])
    }
    console.log(output);
}


calculateArea(radius)
calculateCircumference(radius)
calculateDiameter(radius) 
// what we wrote now is not optimized and not clean so we repeating code multiple times which very bad
// that is DRY principle we need to follow don;t repeat yourself .. how to make code more cleaner will do that next.

function area(radius){
    return Math.PI * radius * radius
}

function circumference(radius){
    return 2 * Math.PI * radius
}

function diameter(radius){
    return 2 * radius
}

const genericFunction = (radius,area) => {
    let output = []
    for(let i=0; i < radius.length; i++){
        output.push(area(radius[i]))
    }
    console.log(output);
} // this generic function what we wrote looks like map and we can tell this can be polyfill for map(our implementation of map)

genericFunction(radius,area)
genericFunction(radius,circumference)
genericFunction(radius,diameter) // this one is cool we are not repeating code refactoring is done!!!


//Polyfill for map function in javascript

Array.prototype.genericFunction = function (radius,area){
    let output = []
    for(let i=0; i < radius.length; i++){
        output.push(area(radius[i]))
    }
    console.log(output);
} // now this is perfect polyfill for map and now if you use anywhere array you will get one more method called genericFunction
// and this is beauty of javascript and this is beauty of functional programming

// Higher order function is function which can take function as argument and can return function as result