function function11(h){
    if (h == 0){
        return 1;
    }
    else{
        return h * function11(h -1)
    }
}

var facttest = function11(9);
console.log(facttest);

//9! = (9-1)!*9
//n! = (n-1)!*n
function ShopingCart (k){
    if( k == 0){
        return 1;
    }
    else{
        return k * ShopingCart(k-1)
    }
}

var shop = ShopingCart(23);
console.log(shop);