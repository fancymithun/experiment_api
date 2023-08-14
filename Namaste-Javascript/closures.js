function a(){
    let a = 10
    return function b(){
        console.log("b is calling",a)
    }
}

let result = a()
result()
//function along with lexical scope bundled together forms a closure

/* Uses of closures
    Module design pattern
    currying
    functions like once
    memoiz
    maintaing state in async world
    setTimeouts
    Iterators
    and many more
*/