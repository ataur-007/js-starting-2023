
//iterativer way
var fibonacci = [0, 1];
for(var i = 2; i <= 20; i++){
    fibonacci[i]= fibonacci[i - 1] + fibonacci [i - 2];
}
console.log(fibonacci); 


function fibonacci1(n){
    var fibo = [0, 1]
    for(var i = 2; i<=n; i++){
        fibo[i]=fibo [ i-1] + fibo[i-2];
    }
    return fibo;
}
var fibo123 = fibonacci1(30);
console.log(fibo123);


// recursive way

function fibonacciRecursive(i){
    if( i == 0){
        return 0;
    }
    if( i == 1){
        return 1;
    }
    else{
        return fibonacciRecursive(i-1) + fibonacciRecursive(i-2);
    }
}
var number254 = fibonacciRecursive(11);
console.log(number254);

// fibonacci for a dhara

function fiboDharea(u){
    if(n==0){
        return [0]
    }
    else if(n==1){
        return [0, 1 ]
    }
    else{
        var dhara = fiboDharea(n-1);
        var newDhara = dhara[n-1] + dhara[n - 2]
        dhara.push(newDhara);
        return dhara;
    }
}