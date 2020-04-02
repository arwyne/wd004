// input 4 grades here
let firstQtr = 75;
let secondQtr = 70;
let thirdQtr = 85;
let fourthQtr = "e123";

// output in the console the grades of the student per quarter
console.log('the student\'s first qtr grade is: ' + firstQtr);
console.log('the student\'s second qtr grade is: ' + secondQtr);
console.log('the student\'s third qtr grade is: ' + thirdQtr);
console.log('the student\'s fourth qtr grade is: ' + fourthQtr);

// compute average
// Javascript's parseInt() function analyzes/parses the data and tries to convert it to an integer
// syntax: parseInt(value to be converted to an integer)
// if you have decimals, you can use parseFloat()
// console.log(parseInt(fourthQtr)) //NaN since parseInt cannot convert "e123" into an integer
let averageScore = (parseInt(firstQtr) + parseInt(secondQtr) + parseInt(thirdQtr) + parseInt(fourthQtr))/4;

if (!isNaN(averageScore)) {
	// if averageScore is a number, execute this
	console.log('the average score is: ' + averageScore);
	// grade range from 0 - <55
	if (averageScore >= 0 && averageScore < 55) {
		console.log('the qpi is: 5.0 and the student\'s status is failed');

	// grade range from 0 - <55
	} else if(averageScore >=55 && averageScore < 60) {
		console.log('the qpi is: 4.0 and the student\'s status is failed');

	// grade range from 60 - <65
	} else if(averageScore >= 60 && averageScore < 65) {
		console.log('the qpi is: 3.0 and the student\'s status is passed');
	
	// grade range from 65 - <70	
	} else if(averageScore >= 65 && averageScore < 70) {
		console.log('the qpi is: 2.75 and the student\'s status is passed');
		
	// grade range from 70 - <75
	} else if(averageScore >= 70 && averageScore < 75) {
		console.log('the qpi is: 2.5 and the student\'s status is passed');

	// grade range from 75 - <80
	} else if(averageScore >= 75 && averageScore < 80) {
		console.log('the qpi is: 2.25 and the student\'s status is passed');

	// grade range from 80 - <84
	} else if(averageScore >= 80 && averageScore < 84) {
		console.log('the qpi is: 2 and the student\'s status is passed');
		
	// grade range from 84 - <87	
	} else if(averageScore >= 84 && averageScore < 87) {
		console.log('the qpi is: 1.75 and the student\'s status is passed');
	
	// grade range from 87 - <90
	} else if(averageScore >= 87 && averageScore < 90) {
		console.log('the qpi is: 1.5 and the student\'s status is passed');
	
	// grade range from 90 - <93	
	} else if(averageScore >= 90 && averageScore < 93) {
		console.log('the qpi is: 1.25 and the student\'s status is passed');
	
	// grade range from 93 - 100	
	} else if(averageScore >= 93 && averageScore <= 100) {
		console.log('the qpi is: 1 and the student\'s status is passed');
	
	} else {
		console.log('out of bounds');
	}

} else {
	console.log('not a number');
}



// function scores(a, b, c, d) {
// 	let firstQtr = parseInt(a);
// 	let secondQtr = parseInt(b);
// 	let thirdQtr = parseInt(c);
// 	let fourthQtr = parseInt(d);

// 	console.log('the student\'s first qtr grade is: ' + firstQtr);
// 	console.log('the student\'s second qtr grade is: ' + secondQtr);
// 	console.log('the student\'s third qtr grade is: ' + thirdQtr);
// 	console.log('the student\'s fourth qtr grade is: ' + fourthQtr);

// 	let averageScore = (firstQtr + secondQtr + thirdQtr + fourthQtr)/4;

// 	if (!isNaN(averageScore)) {
// 		// if averageScore is a number, execute this
// 		console.log('the average score is: ' + averageScore);
// 		if (averageScore >= 0 && averageScore < 55) {
// 			console.log('the qpi is: 5.0 and the student\'s status is failed');

// 		} else if(averageScore >=55 && averageScore < 60) {
// 			console.log('the qpi is: 4.0 and the student\'s status is failed');

// 		} else if(averageScore >= 60 && averageScore < 65) {
// 			console.log('the qpi is: 3.0 and the student\'s status is passed');
			
// 		} else if(averageScore >= 65 && averageScore < 70) {
// 			console.log('the qpi is: 2.75 and the student\'s status is passed');
			
// 		} else if(averageScore >= 70 && averageScore < 75) {
// 			console.log('the qpi is: 2.5 and the student\'s status is passed');

// 		} else if(averageScore >= 75 && averageScore < 80) {
// 			console.log('the qpi is: 2.25 and the student\'s status is passed');

// 		} else if(averageScore >= 80 && averageScore < 84) {
// 			console.log('the qpi is: 2 and the student\'s status is passed');
			
// 		} else if(averageScore >= 84 && averageScore < 87) {
// 			console.log('the qpi is: 1.75 and the student\'s status is passed');
			
// 		} else if(averageScore >= 87 && averageScore < 90) {
// 			console.log('the qpi is: 1.5 and the student\'s status is passed');
			
// 		} else if(averageScore >= 90 && averageScore < 93) {
// 			console.log('the qpi is: 1.25 and the student\'s status is passed');
			
// 		} else if(averageScore >= 93 && averageScore <= 100) {
// 			console.log('the qpi is: 1 and the student\'s status is passed');
		
// 		} else {
// 			console.log('out of bounds');
// 		}

// 	} else {
// 		console.log('not a number');
// 	}
// }

// scores('90testing', 78, '84', 88);