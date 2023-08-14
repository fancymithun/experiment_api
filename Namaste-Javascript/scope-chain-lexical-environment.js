// var x = 20
// a()

// function a(){
//     b()
//     function b(){
//         c()
//         function c(){
//             console.log(x)
//         }
//     }
// }
//local memory + lexical environment of parent is called scope 
// chain of this is scope chain

function a(){
    
    c()
    function c(){
        var b=10
        function d(){
            console.log(b)
        }
        d()
    }
}

a()