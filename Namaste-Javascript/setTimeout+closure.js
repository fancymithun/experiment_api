for(var i=1; i <=5; i++){
    setTimeout(() => 
        console.log(i),
    i * 1000)
} // globsl scope var variable

for(let i=1; i <=5; i++){
    setTimeout(() => {
        console.log(i)
    },i * 1000)
} // block scoped let variable

// converting var to proper result using closure

for(var i=1; i<=5; i++){
    function close(x){
        setTimeout(() => {
            console.log(x)
        },i * 1000)
    }
    close(i)
}