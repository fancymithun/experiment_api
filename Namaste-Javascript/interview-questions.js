// Closures

// function a(){
//     let a = 20
//     return function b(){
//         console.log(a)
//     }
// }  // Closure is combination of function and lexical environment of its parent bundled together and can remember values of its lexical environment later.

// let result = a()
// result()


// Scope chain and closures
// var c = 25
// function outerMost(){
//     function outer(){
//         function inner(){
//             console.log(a,b,c)
//         }
//         let b = 25
//         return inner
//     }

//     var a = "Hello"
//     return outer
// }

// let inner = outerMost()() // Chain of closures is called scope chain same as defintion of closures with chain need to be added
// inner()


// Conflicting name global variables in JS

// let a = 25
// function outerMost(){
//     function outer(){
//         function inner(){
//             console.log(a)
//         }
//         var a = 25 // even if name same multiple scopes it will take its function and parent lexical environment if not found goes to parent again
//         return inner
//     }

//     var a = "Hello"
//     return outer
// }

// let inner = outerMost()() // Chain of closures is called scope chain same as defintion of closures with chain need to be added
// inner()

// Uses of closures
/* closure used in module pattern
   used in function currying
   Used in higher order functions like memoize once
   Useful in data hiding and encapsulation*/

// Data hiding and encapsulation

// function counter(){
//     let count = 0 // so here data is encapsulated and hided from global context
//     function incrementCounter(){
//         count++
//         console.log(count);
//     }
//     return incrementCounter
// }

// let incrementCounter = counter()
// incrementCounter()
// incrementCounter()

// let newincrement = counter() // altogether new instance is created and count will be incremented
// newincrement()
// newincrement()

// Above code is not scalable and not useful in future how to solve this issue we can solve this by function constructor

// function Counter(){
//     let count = 0
//     this.incrementCounter = function (){
//         count++
//         console.log(count)
//     }

//     this.decrementCounter = function (){
//         count--
//         console.log(count)
//     }
// }

// const counter1 = new Counter()
// counter1.incrementCounter()
// counter1.incrementCounter()
// counter1.decrementCounter()

// disadvantages of closures
/*
Overconsumption of memory in closure can happen
If we not handle properly closure can lead to trouble
This can freeze the browser if not handled properly
 */

// what is garbage collector?

/* In c and c++ we need to take care of garbage collection but in case javaascript js engine will have its garbage collector
and garbage collector collects not used memory and freeze these not utilized memory*/

// Relations between garbage collection, memory leaks  and closures


// function x(){
//     let value = 0
//     return function y(){
//         console.log(value) // here we are using value only when we call y function which may be sometimes not required then we need to garbage collect but modern browser like v8 can handle this for us.
//     }
// }

// let result = x()
// if we don't invoke result function then value variable is waste no use of it anymore so we can garbage collect
// and if we use more and more closures like this there lot of variables will be wasting there without properly utilizing it can lead to memory leaks

//Example of smart garbage collection by v8 JS engine in chrome

function a(){
    var x = 0, z = 10 // see z is declared and initialized but not used anywhere this mean that js engine will garbage collect this z variable and can see in debugger of v8
    return function b(){
        console.log(x)
    }
}

var y = a()
y()

/* 
console.log(x)
VM4034:1 0
undefined
console.log(z)
VM4082:1 Uncaught ReferenceError: z is not defined
    at eval (eval at b (interview-questions.js:1:1), <anonymous>:1:13)
    at b (interview-questions.js:128:9)
    at interview-questions.js:133:1
*/
