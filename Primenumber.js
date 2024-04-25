var n = 6;
for( var i = 2; i < n; i++){
    console.log(i, n %i)
    if(n%i == 0){
        console.log('ok now')
        break;
    }
}
// console.log('it is a prime number')