console.log("start");

setTimeout(() => {
    console.log("timer callback ends");
},3000)

setTimeout(() => {
    console.log("timer of 0 second executes before timer of 3 seconds but it will be blocked by main thread and waits for 10 seconds");
},0)

let currentTime = new Date().getTime()
endTime = currentTime
while(endTime < currentTime + 10000){
    endTime = new Date().getTime() // this is blocking main thread for 10 seconds and causing starvation for other callbacks waiting in callback queue
}

console.log("After 10 seconds main thread is empty now timer callback is executed")