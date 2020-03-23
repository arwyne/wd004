// alert('this is external');
// with ; or none

// single line comment

/* 
	multiple
	line
	comment
*/

// javascript is on of the mose popular programming languages and serves as a great foundation for developers. for web dev, JS makes web sites/ pages interactive
// JS is our first programming language - this is the first time that we will write something that will tell our page what to do "programatically"

// console.log method tells the machine to print out specified data in the console
console.log('hello from the console')
console.log('hello from the console also');

// js is case sensitive
// console.Log("this should throw an error");

// declaring a variable
// storing of data inside variables
// basic syntax:
// var varName = value to be assigned
// var es1
// let varName = value to be assigned 
// let es6
// variable names should start with lower case characters and capitalized the first letter of the second word onwards.
// camelCase = firstwordSecondwordThirdword
// "" or '' denotes that the value that we want to store in the variable is a string data type

let productName = "soap";
let productID = "s123";

console.log(productName);
console.log(productID);

// the class variable name did not work because the word class is a reserved keyword in javascript and cannot be used as variable name
// let class = "Batch 56";
// console.log(class);

let classA = "Batch 56";
console.log(classA);

// data type
// string and numeric data types
// string data type are a series of aphanumeric characters enclosed in single or double quotes

// numbers/integers that are not enclosed in single/double quotes are considered numeric data types
// let numberVariable = 12

let price = 10;
let quantity = 4;
console.log(price);
console.log(quantity);
console.log("hello world");

console.log(price*quantity); //40
console.log(price+price); //20
console.log(price+quantity) //14

let newPrice = 12; //number
let newPrice2 = "3"; //string

console.log(newPrice);
console.log(newPrice2);
console.log(typeof newPrice); //number
console.log(typeof newPrice2); //string

// when js sees a string in an operation, it converts it to a string
// for strings, the + sign is used to concatenate strings.
// as a rule of thumb, if mathematical operations fail,
// check if the value passed is a string or a number
console.log(newPrice + newPrice2);

// concatenating strings
let fName = "john";
let lName = "wick";

// hi john wick
console.log("hi " + fName + " " + lName);

// simple mathematical operators
   // + for addition
   // - for subtraction
   // * for multiplication
   // / for division
   // % for modulo
   // we follow the PEMDAS rule

   let first = 25;
   let second = 3;
   let sum = first + second;
   let product = first * second;
   let difference = first - second;
   let quotient = first / second;
   let rem = first%second;

   // the sum of the 2 values is: 28
   console.log('the sum of the 2 values is: ' + sum);
   // the product of the 2 values is: 60
   console.log('the product of the 2 values is: ' + product);
   // the difference of the 2 values is: 22
   console.log('the difference of the 2 values is: ' + difference);
   // the quotient of the 2 values is: 8.33
   console.log('the quotient of the 2 values is: ' + quotient);
   // the remainder of the 2 values is: 1
   console.log('the remainder of the 2 values is: ' + rem);

   let otherAnswer = 3 + 4 * 5;
   console.log(otherAnswer); //23

   let newAnswer = (3 + 4) * 5
   console.log(newAnswer); //35

   // x = 5
   // y = 3
   // x = x + y
   // x = 8

   // newAnswer = 35
   // newAnswer = newAnswer + 5
   // newAnswer = newAnswer + 5;
   newAnswer += 5; //shortcut in adding
   console.log(newAnswer); //40

   var varKeyword = 20;
   varKeyword += 5;
   console.log(varKeyword);