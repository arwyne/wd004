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

// multiple values for switch-case statement
// highly suggest to use if-else instead
let testx = 1;
let testy = 2;

// if you want your switch-case statement to run no matter what
// pass true as the expression being checked by the switch-case
switch(true) {
	case testx == 1 && testy == 2:
		console.log('&& is satisfied');
		break;
	case testx == 1 || testy == 1:
		console.log('|| is satisfied');
		break;
	default:
		console.log('default statement ran');
		break;
}


// loops
	// used to repeat pieces of code over and over according conditions

	// display the number of tasks remaining for a user until 1 task is left
	// if value of tasks < 1, do not output anything in the console
	let tasks = 100;
	// there are 5 tasks left
	// console.log('there are 5 tasks left');
	// console.log('there are 4 tasks left');
	// console.log('there are 3 tasks left');
	// console.log('there are 2 tasks left');
	// console.log('there is 1 task left');


	// while loop
	/*
		while(condition is true/being fulfilled) {
			code block to be run if condition is true
		}
	*/

	while(tasks > 0) {
		// while the value of tasks is greater than 0, execute this code
		// code block will run as long as value of tasks is greater than 0
		// decrementing the value of tasks means that the next iteration
		// of the loop will give the tasks variable a value of current value-1

		// console.log('there are ' + tasks + ' tasks left'); 

		if(tasks > 1){
			console.log('there are ' + tasks + " tasks left");
		} else {
			console.log('there is ' + tasks + " task left");
		}

		tasks-- 

	}


	// 	while (tasks > 0) {
	//     	console.log(`there are ${tasks} tasks left`)
	//     	tasks--
	//     	if (tasks == 1) {
	//         console.log(`there is ${tasks} task left`)
	//         break
	//     }
	// }

	
	// infinite loop
	// it is important that the given condition in the while loop
	// will be met and BREAK AT SOME POINT
	// if not, the loop will be infinite; may cause our program to crash

	// let inf = 1;

	// while(inf > 0) {
	// 	console.log('PRINT ME!')
	// 	inf++;
	// }


	// do-while loop
	// similar to a while loop. only difference is the condition is checked
	// after running the code once

	/*
		do {
			code to be run
		} while(condition to be checked)

	*/

	let tasksDo = 3
	do {
		// code block will run atleast once even if the condition is not met
		console.log('mayroon ' + tasksDo + " tasks left")
	} while(tasksDo > 5) // checks if condition is met. if not, loop will terminate




	// for loop
	// syntax:
	// for(initialization value; condition to be checked; increment/decrement after) {
	//		code block to be run if condition is met
	// }

	let tasksFor;

	for(tasksFor = 6; tasksFor < 10; tasksFor++) {
		console.log('you still have ' + tasksFor + " tasks left");
		//console.log('you still have ' + 6 + " tasks left");
		//console.log('you still have ' + 7 + " tasks left");
		//console.log('you still have ' + 8 + " tasks left");
		//console.log('you still have ' + 9 + " tasks left");
	}


