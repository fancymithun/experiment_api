// what is callback functions in javascript?
setTimeout(() => console.log("timer"),5000)

function x(y){
    console.log("x log")
    y()
}  // callback functions useful making code asynchronous

x(function y(){
    console.log("log y")
})

// javascript is synchronous single threaded language

// Blocking the main thread  // main thread is nothing but call stack which will be blocked if function have high computation of 20 to 30 seconds may block other callbacks so we need to make functions async so we can avoid blocking main thread

// power of callbacks
 
// deep about event listerners
function addEventListeners(){
    let count = 0
    document.getElementById("clickme").addEventListener("click",function xyz(){
        console.log("click me",++count)
    })
}

addEventListeners()

// closures demo with event listeners

// scope demo with event listeners

// garbage collection and removeeventListeners
