// review

// single line comment

/*
	multiple line comment
*/

// the console.log method in JS returns/logs a message in the console
console.log("good morning!");
console.log("using javascript!");
console.log(5);
console.log('javascript\'s string data type'); //escape key

// the let keyword enables us to declare variables that lets us reassign its value
let age;
let name = "arwynedeguzman";
console.log(age); //undefined data type
// we can assign a new value using the assignment operator equal(=) sign
age = 18;
console.log(age);

// let age = 20;
// console.log(age);
// uncaught syntax error: identifier age has already been declared
// age = age + 5
age += 5;
console.log(age); //23

// for strings, the plus sign lets us concatenate string
console.log("this is my name " + name + ". My age is: " + age);

// the length property returns the number of elements
console.log(name.length); //14

// the ++ symbol lets us increment/add 1 to the current value
console.log(age);
age++;
console.log("this is the icremented value of age: " + age);

// the -- lets us decrement/subtract 1 to the current value
age--;
console.log("this is the decremented value of age: " + age);

console.log(++age); //increments before outputting the value of age
console.log(age++);
console.log(age);

console.log(--age); //decrements before outputting the value of age

let nil = 0
nil--
console.log(nil) //-1

// NaN or not a number
console.log(name/age);

// comparison operators
// greater than, less than, greater than or equal to, less than or equal to
let firstNum = 10;
let secondNum = 20;

// comparison operators will return either a true or false statement
// this returned a boolean data type which is either true or false
console.log(firstNum > secondNum);

// a boolean data type is either true or false
console.log(true);
console.log(false);
console.log(typeof true);
console.log(typeof false);
//console.log(maybe); //maybe is not a boolean

console.log(firstNum < secondNum); //returns true since 10 is less than 20
console.log(firstNum <= secondNum); //returns true since 10 is less than or equal to 20
console.log(firstNum >= secondNum); //returns false since 10 is not greater than or equal to 20

let thirdNum = 5;
let fourthNum = "5";
let fifth = "hello";
console.log(typeof thirdNum);
console.log(typeof fourthNum);

// the single equal sign is used to assign values and not to check the equality of 2 values
// console.log(thirdNum = fourthNum);

// use equal signs(==) to check if values are equal regardless the data type
console.log(thirdNum == fourthNum); // returns true since both values are 5 but have different data types

// use strict equal (===) to check if values are equal and data types are the same
console.log(thirdNum === fourthNum); // returns fales since data type are not the same

thirdNum = fifth;
console.log(thirdNum); //"hello"
// we assigned the value of variable fifth as the new value of thirdNum
// because the = is an assignment operator and not a comparator

let x = 43;
let y = "43";

console.log(x != y);
//returns false because not equal/unequal(!=) checks if the values are not equal regardless the data type

console.log(x !== y);
// returns true because the strict not equal/strict unequal(!==) checks if the values are not equal
// and if the data type are not equal as well



// Logical Operators
 let username = "yuan";
 let password = "password";
 let edad = 23;

// the AND(&&) logical operator checks if all conditions are true
console.log(username == "yuan" && password == 1234);
// returns false since first is condition is true but second condition is false

console.log(username == "yuan" && edad > 19);
// returns true because both conditions are true

console.log(username == "yuan" && password == "password");
// returns true since both conditions are true


// the OR(||) logical operator checks if at least one of the conditions are met
console.log(edad != 20 || password == "helloworld");
// returns true because the first condition is met

console.log(username == "yuan" || password == "password");
// also returns if all conditions are met

// checks if the value of the edad variable is not a number data type
console.log(isNaN(edad));
// false since edad is a number

// ! means not 
console.log(!isNaN(edad));
// true
// checks if the value of edad is not not a number data type



// Control Structures
// we have the capability to control of our program

// conditional statement
// if-else statement:
// basic syntax:
// if(condition to be checked) {
	 // if condition is met/true, run this code block
// } else {
	// if the condition is not met, run this code block
// }

let money = 100;

if(money > 200) {  //does not have output because it did not satisfy the condition
	console.log("i have money"); 
} 

if(money > 50 ) {
	console.log("meron akong pera");
}

if(money > 50) {
	console.log("meron akong pera");
	//alert("I HAVE MONEY!!!");
}

if(money > 150) {
	console.log('lunch is on me');
} else {
	console.log('hingi kang baon kay mommy');
}


if(money > 250) {
	console.log('yayamanin');
} else if(money >= 100) {
	console.log("uhmmm... kkb?");
	//if(money == 100) {
		//console.log('may 100 ka!');
	//}
} else {
	console.log('hingi ulit baon kay mommy');
}


// 6 DATA TYPES

// number
// includes all possible numerical values including the special NaN
// positive infinity and negative infinity
// numbers are not enclosed in single or double quotes
// NaN is generated when a math operation fails

let price = 123.4;
console.log(price);

// string
// includes all aphanumeric characters and special characters
// has to be enclosed in single or double quotes
// use backslash(\) to escape a character

let batch= "batch 56 day class";
console.log(batch);

// boolean
// holds either a true or false value

let tookABath = false;
console.log(tookABath);

// undefined
// represents the state of a variable that has been a declared but
// without an assigned value

let noAssignedValue;
console.log(noAssignedValue);

// null
// used to intentionally express the absence of a value in a
// variable declaration

let nullData = null;
console.log(nullData);

// objects
// a collection of properties and methods
// properties can be any previously mentioned data types as well as other objects
// methods are functions inside an object
// object literals

let person = {
	name: "Arwyne",
	age: 18,
	isEmployed: true
}
console.log(typeof person);
console.log(person);
console.log('Name of the person: ' + person.name);
console.log('Age of the person: ' + person.age);
console.log('is the person employed? ' + person.isEmployed);