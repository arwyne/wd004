// console.log("hello from arrays");

// variables lets us contain a single element inside the container
let x = 5;

// arrays
// lets us store multiple elements in a single container
// arrays are created using [] notation, otherwise known as the ARRAY LITERAL

// to initialize an empty array using an array literal
let firstArray = [];
// firstArray = "hello"
console.log(firstArray);

// to be safe and not re assign the value, use const on array
// to create an array with multiple elements can be done like so:
const myArray = [2, 4, 6, 8, 10];
console.log(myArray);

// an array is not limited to numbers
const fruits = ["apple", "orange", "mango"];
console.log(fruits);

// though not advisable, a mix of data types can be stored in array
const mixedStuff = [1, "apple", undefined, 25, null, true, []];
console.log(mixedStuff);

const firstRow = ["johann", "pat", "tony", "arwyne", "lance", "karen", "kat"];
console.log(firstRow);
console.log(firstRow[2]); //tony
console.log('my name is ' + firstRow[4]); //my name is lance
console.log('my name is ' + firstRow[3]); //my name is arwyne
console.log('my name is ' + firstRow[0]); //my name is johann 
console.log('my name is ' + firstRow[1]); //my name is pat
console.log('my name is ' + firstRow[5]); //my name is karen
console.log('my name is ' + firstRow[6]); //my name is kat
console.log(typeof firstRow); //object
console.log(firstRow.length) //length property returns the number of elements inside an array

// since array is an object you can use method and properties on it
firstRow.sort() // sort function/method will sort the array alphabetically
console.log(firstRow);
console.log(firstRow[2]); // returns karen because it is the new second index of firstRow array after sorting

// update an element inside an array
firstRow[3] = "KAT"
console.log(firstRow);

// array methods
// methods are functions inside an object
const secondRow = ['neil', 'lara', 'jen', 'kyle', 'jarren', 'christine', 'brex'];
console.log(secondRow);

// push - add last
// pop - removes last (no parameters needed)
// unshift - add first
// shift - removes first (no parameters needed)

// push method lets us append/add an element at the end of an array
secondRow.push("koko");
console.log(secondRow);

let newSecond = "vico"
secondRow.push(newSecond);
secondRow.push(firstRow);
console.log(secondRow);

// the join method lets us customize the separator of each element inside an array
console.log('this is the new value of secondRow ' + secondRow.join('/'))

	// w3school
	// The join() method returns the array as a string.
	// The elements will be separated by a specified separator. The default separator is comma (,).
	// Note: this method will not change the original array.


// pop method removes the last element in the array
let thirdRow = ["chris", 'neil', "karl", 'angelo', "dan", 'yuan', 'janjan', "jhun", 'koko'];
console.log(thirdRow);
thirdRow.pop();
console.log(thirdRow);


// unshift method allows us to add to the start of an array
const fourthRow = ['lai', 'carl', 'val', 'michelle', 'nathan', 'shan'];
console.log(fourthRow);
fourthRow.unshift("vico");
console.log(fourthRow);

// instead of a hard coded string, declare a variable called rowMate
// and use the unshift method to add the value of rowMate to fourthRow

let rowMate = "manny"
fourthRow.unshift(rowMate);
console.log(fourthRow)

// shift method allows us to remove the first element of an array
const teams = ['instructors', 'ca', 'admin', 'accounting'];
console.log(teams);
teams.shift();
console.log(teams);

// indexOf
const qcInstructors = ['terence', 'emerson', 'ben', 'alex', 'sylvan'];
console.log(qcInstructors.indexOf('sylvan')); // returns 4
console.log('the index of terence in qcInstructors array is ' + qcInstructors.indexOf("terence")); // 0
// find the index number of the string ben inside the qcInstructors array
console.log('the index of ben in qcInstructors array is ' + qcInstructors.indexOf('ben')); // 2
// find the index number of the strng rody inside the qcInstructors array 
console.log('the index of ben in qcInstructors array is ' + qcInstructors.indexOf('rody')); // -1 if not existing in array


// iterator methods
// for loop executes a block of code until a specified condition becomes false
// first argument : initialization value
// second argument : condition to be checked
// third argument : step after each iteration/loop (++/--)

const mkeInstructors = ['alan', 'charles', 'joyce', 'renz', 'chris', 'redd', 'arvin', 'yuan', 'kyle']
//output each element in the console
console.log(mkeInstructors[0]); //alan
console.log(mkeInstructors[1]); //charles
console.log(mkeInstructors[2]); //joyce
console.log(mkeInstructors[3]); //renz
console.log(mkeInstructors[4]); //chris
console.log(mkeInstructors[5]); //redd
console.log(mkeInstructors[6]); //arvin
console.log(mkeInstructors[7]); //undefined ['alan', 'charles', 'joyce', 'renz', 'chris', 'redd', 'arvin']

let count;
console.log(mkeInstructors.length) //returns the number of elements inside an array
// returns 9 
// starts at 1

// count = 0-9
// possible error if condition is wrong; count<=7 undefined
// possible error if something added to array; count<= 6 ['yuan', 'kyle']
// for(count = 0; count<=6; count++)
for(count = 0; count<mkeInstructors.length; count++) {
	// count has the value of 0-6
	// console.log(count);
	console.log(mkeInstructors[count])
	// last element will be undefined; count <= mkeInstructors.length
	// console.log(mkeInstructors[9])
	// to solve either count < mkeInstructors.length or count <= mkeInstructors.length
}


// the forEach iterator method executes a function
// for each iterated element
mkeInstructors.forEach(function(zuittInst) {
	console.log('hello ' + zuittInst);
})

// arrow notation
mkeInstructors.forEach((instructor) => {
	console.log('hello es6 ' + instructor);
})