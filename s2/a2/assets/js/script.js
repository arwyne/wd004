let firstQtr = 85;
let secondQtr = 90;
let thirdQtr = 88;
let fourthQtr = 92;

console.log('the student\'s first qtr grade is: ' + firstQtr);
console.log('the student\'s second qtr grade is: ' + secondQtr);
console.log('the student\'s third qtr grade is: ' + thirdQtr);
console.log('the student\'s fourth qtr grade is: ' + fourthQtr);

let averageScore = (firstQtr + secondQtr + thirdQtr + fourthQtr)/4;

if (!isNaN(averageScore)) {
	// if averageScore is a number, execute this
	console.log('the average score is: ' + averageScore);
	if (averageScore >= 0 && averageScore < 55) {
		console.log('the qpi is: 5.0 and the student\'s status is failed');

	} else if(averageScore >=55 && averageScore < 60) {
		console.log('the qpi is: 4.0 and the student\'s status is failed');

	} else if(averageScore >= 60 && averageScore < 65) {
		console.log('the qpi is: 3.0 and the student\'s status is passed');
		
	} else if(averageScore >= 65 && averageScore < 70) {
		console.log('the qpi is: 2.75 and the student\'s status is passed');
		
	} else if(averageScore >= 70 && averageScore < 75) {
		console.log('the qpi is: 2.5 and the student\'s status is passed');

	} else if(averageScore >= 75 && averageScore < 80) {
		console.log('the qpi is: 2.25 and the student\'s status is passed');

	} else if(averageScore >= 80 && averageScore < 84) {
		console.log('the qpi is: 2 and the student\'s status is passed');
		
	} else if(averageScore >= 84 && averageScore < 87) {
		console.log('the qpi is: 1.75 and the student\'s status is passed');
		
	} else if(averageScore >= 87 && averageScore < 90) {
		console.log('the qpi is: 1.5 and the student\'s status is passed');
		
	} else if(averageScore >= 90 && averageScore < 93) {
		console.log('the qpi is: 1.25 and the student\'s status is passed');
		
	} else if(averageScore >= 93 && averageScore <= 100) {
		console.log('the qpi is: 1 and the student\'s status is passed');
	
	} else {
		console.log('out of bounds');
	}

} else {
	console.log('not a number');
}
