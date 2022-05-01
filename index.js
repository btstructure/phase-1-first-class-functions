// function receivesAFunction(greeting){
//     return greeting('hello'),
//     function returnsANamedFunction(){
//             return returnsANamedFunction(receivesAFunction),
//             function returnsAnAnonymousFunction(){
//                 return returnsAnAnonymousFunction(returnsANamedFunction)
//             }
//         }

//     }


function receivesAFunction(greeting){
    return greeting('hello')
}

function returnsANamedFunction(){
    return receivesAFunction
}

function returnsAnAnonymousFunction() {
    return () => console.log("poop");
  }