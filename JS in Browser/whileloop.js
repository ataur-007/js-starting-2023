
// 5! = 1*2*3*4*5

// var i = 1;
// var fact = 1;
// while( i <= 10){
//     fact = fact * i;
//     console.log( i, fact);
//     i++
// }


function factLogic (n){
    var i = 1;
    var factLogic = 1;
    while( i <= n){
        factLogic = factLogic * i;
        i++
    }
        return factLogic;
}

var number11 = factLogic(7);
console.log(number11);

const new22 = factLogic(7);
console.log(new22);




//this is factorial while loop


function factWhile (w){
    var i = 1;
    var factWhile = 1;
    while(i <= w){
        factWhile = factWhile * i;
        i++
    }
    return factWhile;
}

var facttest = factWhile(9);
console.log(facttest);


//this is for [for loop] factorial


function factForLoop(f){
    var factForLoop = 1;
    for(var i = 1; i <= f; i++){
        factForLoop = factForLoop * i;  
    }
    return factForLoop;
}
var ForLoopTest = factForLoop(45);
console.log(ForLoopTest);
