
//iterativer way
var fibonacci = [0, 1];
for(var i = 2; i <= 20; i++){
    fibonacci[i]= fibonacci[i - 1] + fibonacci [i - 2];
}
console.log(fibonacci); 

//fibonacci
function fibonacci1(n){
    var fibo = [0, 1]
    for(var i = 2; i<=n; i++){
        fibo[i]=fibo [ i-1] + fibo[i-2];
    }
    return fibo;
}
var fibo123 = fibonacci1(30);
console.log(fibo123);


//this is for factorial 

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