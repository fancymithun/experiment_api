// function a(){
//     console.log("a called")
// }

// a()

/* 
Web APIs will be available in browser having any js engine (v8)
--------
setTimeout()
DOM APIs
fetch()
localStorage
console
location
*/

//All above mentioned are not a part of javascript

//window is global object for browser

console.log("start") // calls web API called console

setTimeout(function cb() {
    console.log("Timer");
},4000) // calls web API called setTimeout will be executed after 4 seconds and this is async

console.log("end") // call stack work is to quickly execute whatever comes in its way but here timer has callback of 4 seconds comes later and once comes inside stack quickly gets executed
// after 4000ms is completed cb function will be pushed to callback queue and event loop will be checking whether call stack is empty if call stack is empty
// then event loop quickly takes first callback fucntion from callback queue and puts in call stack and will be executed quickly

console.log("start") // this is from console Web API

document.getElementById("clickme").addEventListener("click",function cb(){
    console.log("callback");  // DOM API from web API
}) // but this will be waiting in web api enviorment all the time someone clicks

console.log("End"); 

//Before coming to callback queue every callback will be in web API's callback environment later(registering callback) pushed to callback queue
//Here super hero is event loop its only work is to monitor between call stack and callback queue

//why we need callback queue suppose consider user clicks button 10 times continuously then we need to store all these in callback queue once and can execute one by one

// But fetch() web API works differently than other web API's because this used microtask queue and is more prioratized than callback queue

// fetch() has more priority than callback functions

console.log("start")

setTimeout(() => {
    console.log("CB timeout");
},5000)

fetch("https://api.netflix.com").then(function cbF(){
    console.log("CB Netflix");
}) // network calls done from WEB API

console.log("End");

// even if code has millions of lined running in main thread it should be completed first and even fetch api should wait for whatever it takes to clear main thread later only fetch and timer API given time to excute this we can call as starvation

// there is something called mutation observer which will be checking any manipulation happened in DOM tree

// so all promises and mutation observers like dom mutation not manipulation like onclick comes under mico task queue

// and setTimeout callback and normal event listerners comes under callback queue

//once all tasks from microtask queue executed after that only task/callback queue will be exeuted

//sometimes callback queue don't get a chance to execute which can lead to starvation