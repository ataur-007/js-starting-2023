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


for ( let i = 0; i <= 5; i++){
    if( i % 2 == 0){
       console.log(i + 'even number')
    }
    else
    console.log( i + ' odd number') 
 }