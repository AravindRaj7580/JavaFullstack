// add two numbers

function addTwoNumbers(a, b){
     let sum = a+b
     console.log(sum)
}

//how to call or invoke a function

addTwoNumbers(1,2)

//funstion with string

addTwoNumbers('Aravind', 'Raj')

function printName(name){
    console.log(name)
}

printName('Kirube')

//functions as first class citizens

//traditional function

function sayHi()
{
    console.log('hi')
}

sayHi()

//example for function as first class citizen

let sayHiFC = function() {
    console.log('hi')
}

console.log(sayHiFC)

sayHiFC()

//create a multiply function which will multiply two given numbers using function as first class citizen concept

let multiply2 = function(a, b){
    console.log(a*b)
}

multiply2(2,3)

//Arrow functions

let subtract = (a,b)=> {
    console.log(a-b)
}

subtract(4,2)
