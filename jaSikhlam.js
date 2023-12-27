
// module 12


var number1 =30;
console.log(number1)

var number1 ='Ataur rahman'
console.log(typeof number1)

var number2 ='345435';
console.log(number1);

var number2 = 23435345;
console.log(typeof number1)

var text = " Organize your shop by categories, subcategories, and relevant filters. Use clear and concise language for product descriptions and CTAs"
console.log(text.indexOf('relevant'))

var text = " Organize your shop by categories, subcategories, and relevant filters. Use clear and concise language for product descriptions and CTAs"
console.log(text.toLowerCase ())

var text = " Organize your shop by categories, subcategories, and relevant filters. Use clear and concise language for product descriptions and CTAs"
console.log(text.toUpperCase ())

var text = 'Organize your shop by categories, subcategories, and relevant filters. Use clear and concise language for product descriptions and CTAs'
console.log(text.indexOf('concise'))

var text = " Organize r your shop by categories, r subcategories, and relevant filters. Use clear and concise r language for product descriptions and CTAs"
console.log(text.split ('r'))

var hot = true;
var cold = false;
console.log(typeof cold)

var nm = 10;
var nm1 = '15.5'
nm1 = +nm1;
console.log(nm + nm1)

var nm = 10;
var nm1 = '15.5'
nm1 = parseFloat(nm1);
console.log(nm + nm1)

var nm = 10;
var nm1 = '15.5'
nm1 = parseInt(nm1);
console.log(nm + nm1)

var num = 10;
var num1 =15.7;
num1 = ''+num1;
console.log(num + num1)

var n = .1;
var n1 = .2;
var n2 = n / n1;
var total = n + n1;
total = total.toFixed(4);
console.log(total);

var n = .1;
var n1 = .2;
var n2 = n / n1;
var total = n + n1;
total = total.toFixed(4);
console.log(total);

var num = 3;
var num3 = 4;
var total = num + num3;
console.log(total);

var intu = 4;
var  intu2 = 5;
var total = intu % intu2;
console.log(total)

var price = 4;
var price2 = 6;
// var price3 = price2 +1;
price2 = price2 + 1;
console.log(price2)

var n= 4;
var n1= 5;
var n3 =6;
n3++;
n--;
var total= n3 + n;
console.log(total)


var name1 = ' justin';
var name = 'Biber';
var total = name1 + ' ' + name;// this gap for space
console.log(total)


// absulate variable tag
var number1 = -5.7;
var absulate = Math.abs(number1);
console.log(absulate);

var number2 = 5.4;
var absulate = Math.round(number2);
console.log(absulate);


var number3 = 5.00001;
var absulate = Math.ceil(number3);
console.log(absulate);


var number4 = 5.00001;
var absulate = Math.floor(number4);
console.log(absulate);

var num = 5.323;
var abs = Math.random();
console.log(abs);

var num = Math.random() * 10;
var abs = Math.round(num);
console.log(abs);

//array function 

let color = ['red', 'green', 'blue']
let lenght = color[color.length - 1];
console.log(lenght)


let color = ['red', 'green', 'blue', 'perpel'];
color.pop();
console.log(color)

let color = ['red', 'green', 'blue', 'perpel'];
color.push('noob');
console.log(color)

let color = [ 'red', 'green', 'blue', 'black']
delete color[0]
console.log(color)

let color1 = [ 'red']
let color2 = [ 'black']
let newcolor = color1.concat(color2)
console.log(newcolor)

let color = ['red', 'green', 'bluc']
let slice = color.slice(1)
console.log(slice) 

let color =[ 'red', 'green', 'blue','red', 'green', 'blue']
color.reverse()
console.log(color)

//this is for switch variable//
let number = 2;
switch(number) {
   case 1:
   number ='ok 1';
   break;
   case 2:
   number ='ok 2';
   break;
   case 3:
   number ='ok 3';
   break;
   case 4:
   number ='ok 4';
   break;
   case 5:
      number = ' ok 5'
      break;
      default:
         number = 'nothing'
}
console.log(number);
// this is for work switch case
const color = 10;
switch(color){
    case 100 && 80:
        console.log('A+');
        break;
        case 79 && 70:
            console.log('A');
            break;
        case 69 && 60:
            console.log('A-');
            break;
        case 59 && 50:
            console.log('B');
            break;
        case 49 && 40:
            console.log('D');
            break;
            default:
                console.log('Fail')

}


//let variable//
let mark = 50;

if (mark <=89 && mark >= 80){
    console.log('A+')
}
else if (mark <=79 && mark >= 70){
    console.log('A')
}
else if (mark <=69 && mark >= 60){
    console.log('A-')
}
else if (mark <=59 && mark >= 50){
    console.log('B')
}
else if (mark <=49 && mark >= 40){
    console.log('B+')
}
else if (mark <=39 && mark >= 33){
    console.log('C')
}
else(
    console.log('f')
)

