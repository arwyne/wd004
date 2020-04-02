let evenSum = 0;
let oddSum = 0;
let x;

for(x = 0; x <= 50 ; x++) {
	// console.log('this is the value of x: ' + x);
	if(x%2 === 0) {
		// this code block will run if the value of x is even
		// console.log('the number is an even number ' + x);
		// evenSum = (0+2+4+6+8+10+12);
		// evenSum = evenSum + x;
		evenSum += x;
	} else {
		// this code block will run if the value of x is odd
		// console.log('this number is an odd number ' + x);
		// oddSum = (0+1+3+5+7+9+11);
		// oddSum = oddSum + x;
		oddSum += x;
	}
}

console.log('the sum of all even numbers from 0-50 is ' + evenSum)
console.log('the sum of all odd numbers from 0-50 is ' + oddSum)


// for(x = 0; x <= 50; x += 2) {
// 	evenSum += x
// }
// console.log('the sum of all even numbers from 0-50 is ' + evenSum)

// for(x = 1; x <= 50; x += 2 ) { 
// 	oddSum += x
// }

// console.log('the sum of all odd numbers from 0-50 is ' + oddSum)