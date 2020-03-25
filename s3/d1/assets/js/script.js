// review

// control structures
// there are logical conditions that allow developers to control the flow of the program

// if-else statements
// if statement (if statement can stand alone while else cannot)

/*
	if(condition to be checked) {
		if condition is met, run this code block
	}
*/

// the {} encloses the if "code block"
// the code within the block will run in the IF STATEMENT if the given condition is true
let age = 23;

if(age > 18) {
	console.log('you are old enough to play the game');
}

// else statements
// the else keyword is used to add a default/extra block of code
// fallback on the else statement if the if condition is not met

/*
	if(condition to be checked) {
		if condition is met/true, run this code
	}

	else {
		code to be executed if condition is not met
	}
*/

if(age > 18) {
	console.log('you are old enough to play the game');
} else {
	console.log('wait a few more years...');
}




// ternary operator
// the ternary operator(?) is a shorthand way of writing simple if-else statements
// it takes 3 operands/arguments to execute the code in the ff format:
// syntax: condition to be checked ? code to be run if condition is true/met : code to be run if false

let n = 10
n % 2 === 0 ? console.log(n + " is an even number") : console.log(n + " is an odd number");

// same as

if(n%2===0) {
	console.log(n + " is an even number");
} else {
	console.log(n + " is an odd number");
}

// lets simulate a dice roll
// Math is a standard built-in JS object
// .floor method of math object will round down to the nearest integer
// .random method will randomize a number between 0-1 (includes 0 but not 1)
// we needed to add 1 because max value that we can generate out of query is
// 0.9999999999 * 6 which would result to 5.something. in order for us
// to generate a value of 6 and avoid getting a value of 0, we added the 1 value

let diceRoll = Math.floor(Math.random() * 6) + 1
console.log(diceRoll);

// mini activity
// using if-else statements
// only dice rolls from 4-6 outpputs the message "you rolled 4!" in the console
// anything lower than 4, outputs "your roll is less than 4"

// diceRoll >= 4 ? console.log("you rolled a " + diceRoll + "!") : console.log("your roll is less than 4");

// if (diceRoll >=4 && diceRoll <= 6 ) {
// 		console.log("you rolled a " + diceRoll)
// 	} else {
// 	console.log ("your roll is less then 4")	
// }

// example ni sir
// if (diceRoll === 4) {
// 	console.log('you rolled a 4!')
// } else if(diceRoll === 5) {
// 	console.log('you rolled a 5!')
// } else if(diceRoll === 6) {
// 	console.log('you rolled a 6!')
// } else {
// 	console.log('your roll is less than 4')
// }


// the switch statement
// pass in the value to be compared/checked to the different cases

switch(diceRoll) {
	case 4:
		// the code below will run if the case statement is met
		console.log('you rolled a 4!');
		// the break keyword prevent us from going to the next case
		break;
	case 5:
		console.log('you rolled a 5!')
		break
	case 6:
		console.log('you rolled a 6!')
		break
	default:
		console.log('your roll is less than 4');
}

