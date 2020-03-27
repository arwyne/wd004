// review on variables
// let vs var

// let lets us declare reassignable variables
let newVar = "variable created using let";
console.log(newVar);

// reassignment of newVar
newVar = 55;
console.log(newVar);

// let will not allow us to declare a variable that is already declared
// let newVar = "this should throw an error" //will throw an error

// var keyword will not throw an error for accidental variable redeclaration
var anotherVar = 12;
console.log(anotherVar);
var anotherVar = "hello";
console.log(anotherVar);

// let does not allow us to hoist/call the vall of a variable before it is declared
// hoisting (nauuna yung callback bago ideclare)

// console.log(varHoist);
// let varHoist = "hoist me!"

// var keyword does not protect is from accidental hoisting. it will throw undefined
// but not an error

// console.log(testx)
// var testx = "will be hoisted"


// named functions are written using the keyword function
// followed by a space then the function name that you are going
// to set followed by a ()
// any code block inside {} will only run when we call back the function


function alertExternal() {
	// run this code block if alertExternal is called
	// execute an if-else
	// switch
	console.log("hello from the console");
	alert("hello frm the external js file");
}

// declaring a function alone does not run the function
// we need to call it in order for it to run
// alertExternal()
// alertExternal()
// alertExternal()
// alertExternal()
// alertExternal()

// methods vs functions
// all methods are functions
// but all functions are not methods
// methods are functions INSIDE an object


// variable scoping
// variables can exist in either 1 or 2 scopes in javascripst
	// global scope
		// -variables that are declared outside a function
		// -these variables are accessible anywhere

	// local scope
		// -variables declared within/inside a function
		// -there variables will not accesible 
	
	let x = 10; // example of a global scope variable

	function tryScope() {
		let y = 5; //example of local scope variable
		console.log('this the value of y ' + y) // local variable y is recognized
		console.log('this is the value of x ' + x) // global variable x is recognized
	}

	tryScope()
	console.log(x)
	// console.log(y) //error

	let z;
	function getSum() {
		let x = 10;
		let y = 20
		let sum = x + y

		// return
		return sum
	}

	console.log(getSum()); //30

	z = getSum(); // stores the return value of getSum function to variable z
	console.log(z);

// hoisting (nauuna yung callback bago ideclare)

	// sayHello()

	// function sayHello() {
	// 	console.log("hello")
	// }

// const lets us create variables which are not reassignable
	const yuan = 54;
	// yuan = 18;
	console.log(yuan)

	let getDiff = function() {
		console.log('i am getting the difference')
	}

	getDiff = "difference"; //na reassign kasi let ginamit, pag const maavoid ito

	// getDiff();
	console.log(getDiff);


	// sample of hoisting (nauna declare si sayHello, mag eerror kasi const ginamit)
	// sayHello()

	// const sayHello = function() {
	// 	console.log('hello')
	// }

	// sayHello() (eto gumana kasi after nadeclare)


// to avoid hoisting, use const instead
// es6 version of function declaration

	// const sayHello = function() {
	// 	console.log('hello')
	// }

	// this can be further simplified
	// arrow notation

	// function sayHello() {
	// 	console.log("hello")
	// }

	// es6 version variable name = function name
	// const sayHello = function() {
	// 	console.log("hello")
	// }

	// simplified version due to es6 arrow notation
	// const sayHello = () => {
	// 	console.log('hello')
	// }

	// sayHello()


// parenthesis explanation (parameters and arguments)

	// para hindi redundant na paulit ulit mag parameters and arguments
	// function sayHello() {
	// 	alert("hello Pat!")
	// }
	// sayHello();


	// with parameter and arguments
	// function sayHello(name) {
	// 	alert("hello " + name)
	// }

	// sayHello("chris")
	// sayHello("vico")
	// sayHello("koko")

	// es6 version
	// const sayHello = function(name) {
	// 	alert("hello " + name)
	// }
	// sayHello("Brex!");

	// es6 arrow notation
	// const sayHello = (name) => {
	// 	console.log("hello " + name)
	// }
	// sayHello("Dan!")

	// function sayHello(greeting, name) {
	// 	alert(greeting + name)
	// 	console.log(name + greeting)
	// }

	// const sayHello = function(greeting, name) {
	// 	alert(greeting + name)
	// }

	// first argument to be passed would be stored to greeting
	// second argument to be passed would be stored to name
	// sayHello("hoy ", "yuan")
	// sayHello("good morning ", "jun")
	// sayHello("good afternoon ", "mayor joy")


	// create a function called hiRowMates
	// output the row number, column and name of each row mate
	// row : <row> column : <column> name : <name>

	// es6
	// const hiRowMates = function(row, column, name) {
	// 	console.log('row :' + row + ' column :' + column + ' name :' + name);
	// }

	// arrow notation
	const hiRowMates = (row, column, name) => {
		console.log('row :' + row + ' column :' + column + ' name :' + name);
	}

	hiRowMates(1, 1, "Nina")
	hiRowMates(1, 2, "Karen")
	hiRowMates(1, 3, "Lance")
	hiRowMates(1, 4, "Arwyne")
	hiRowMates(1, 5, "Tony")
	hiRowMates(1, 6, "Patrick")
	hiRowMates(1, 7, "Brex")
	hiRowMates(1, 8, "Johan")

	