let evenSum = 0;
let oddSum = 0;
let x;

for(x = 0; x <= 50 ; x++) {
	if(x%2 == 0) {
		evenSum += x;
	} else {
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