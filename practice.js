function fiboDharea(u){
    if(u==0){
        return [0]
    }
    else if(u==1){
        return [0, 1 ]
    }
    else{
        var dhara = fiboDharea(u-1);
        var newDhara = dhara[u-1] + dhara[u - 2];
        dhara.push(newDhara);
        return dhara;
    }
}

var nnn = fiboDharea(20);
console.log(nnn);

function fiboD(i){
    if(i==0){
        return[0];
    }
    else if( i==1){
        return [0, 1]
    }
    else{
        var nothing = fiboD(i -1);
        var total = nothing(i-1) + nothing(i -2);
        nothing.push(total);
        return nothing;
    }
}

var dhara22 = fiboD(5);
console.log(dhara22);

