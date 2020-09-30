let score=12;
//const myName='myName from script.js';
//myName='jskjdkjsdk';
score++;
let isAble=true;

let myObj = {
    myName: 'Balaji'
}

myObj.myName='balaji-2';
//confirm(myName);
//Single line comment
/*
multi line comment 1
multi line comment 2
*/
/*
let longWord='Supercalifragilisticexpialidocious';
console.log('Length of '+longWord)
console.log (longWord.length);

var car;
console.log(typeof(car));
car='name here';
console.log(typeof(car));
console.log(20%3);
var x ;
x=9;
console.log(typeof(x));//number
x="volvo";
console.log(typeof(x));//string
x=undefined;
console.log(typeof(x));//string

function toCelsius(f){
    return (5/9) * (f-32);
}

console.log(toCelsius);
console.log(toCelsius(100));
console.log(typeof(5));
*/

//Create object example
var user = {
    fname:'Balaji', 
    lName:'Vadlamudi', 
    City:'Clovis'};
//refer to object using Template Literals    
console.log(`User details ${user.lName}`);

//escape using backticks
var greeting = `\`Yo\` World!`;
console.log(greeting);
//symbol
var sym1=Symbol('sym');
console.log(sym1)
console.log(sym1.toString());
//hoisting with var
x1=5;
console.log(x1);
var x1=5;
//hoisting with let
carName="Volvo";
console.log(carName);
let carName;


