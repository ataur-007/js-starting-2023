// function myfunction(){
//     document.getElementById("").innerHTML= "Change the pragraph";
// }

// document.getElementById("demo").innerHTML= 5 +7;


// document.write(7 + 9);

// //this is for windows welcome popup 
// // window.alert('THis is a popup');

// //this is for a full page window print
// // onclick.window.print()

var color = ['red', 'green', 'yellow', 'nothing']
var color1 = ['red1', 'green1', 'yellow1', 'nothing1']
var NewColor = color.concat(color1);

document.getElementById("demo2").innerHTML = ""+NewColor.join("--")+"";



// function FeetToInch (inch){
//     var feet = inch / 12;
//     return feet;
// }

// var nothing = FeetToInch(156);
// console.log(nothing);


// function NotToEasy (easy){
//     var hard = easy / 12;
//     return hard;
// }
// var hard1 = NotToEasy(156);
// console.log(hard1)

// var hard2 = NotToEasy(133);
// console.log(hard2);

// var hard3 = NotToEasy(2323);
// console.log(hard3)


var n = 'mokl';

if( n.length > 4){
    n = 'ataur'
}
// if else (n.length < 5){
//     n = 'it is ok now'
// }
console.log(n);

console.log( 2040 % 4);


const year = 23657;
const leapYear = year % 4;
console.log(leapYear);


const year1 = 35434;
let total = year1 % 4;
console.log( total );

function NotYes (not){
    var noting11 = not / 9;
    return noting11;
}
var not324 = NotYes(3454);
console.log(not324);

var not3243 = NotYes(353);
console.log(not3243);

var not32434 = NotYes(34534);
console.log(not32434);