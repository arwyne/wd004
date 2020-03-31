// create a zodiacSigns array of objects with properties
// month, border, sign1 and sign2. the first index of
// the array is an empty strng
// display in the console all of the properties
// of the selected array element
// depending on the border property, display either one
// of the signs associated with the given month

// let monthInput = 5;
// let dayInput = 23

// prompt("question to be asked", "default value/placeholder")
let monthInput = prompt("Please Enter a Month 1(January) - 12(December) ", "Enter Month here...");
let dayInput = prompt("Please Enter a Day: ", "Enter Day here...");

console.log(monthInput);
console.log(dayInput);

const zodiacSigns = [
	'',
	{
		month: "January",
		border: 20,
		// sign1: "Aquarius",
		// sign2: "Capricorn"
		signs: ['Aquarius', 'Capricorn']
	},
	{
		month: "February",
		border: 19,
		// sign1: "Pisces",
		// sign2: "Aquarius"
		signs: ['Pisces', 'Aquarius']
	},
	{
		month: "March",
		border: 21,
		// sign1: "Aries",
		// sign2: "Pisces"
		signs: ['Aries', 'Pisces']
	},
	{
		month: "April",
		border: 20,
		// sign1: "Taurus",
		// sign2: "Aries"
		signs: ['Taurus', 'Aries']
	},
	{
		month: "May",
		border: 21,
		// sign1: "Gemini",
		// sign2: "Taurus"
		signs: ['Gemini', 'Taurus']
	},
	{
		month: "June",
		border: 21,
		// sign1: "Cancer",
		// sign2: "Gemini"
		signs: ['Cancer', 'Gemini']
	},
	{
		month: "July",
		border: 23,
		// sign1: "Leo",
		// sign2: "Cancer"
		signs: ['Leo', 'Cancer']
	},
	{
		month: "August",
		border: 23,
		// sign1: "Virgo",
		// sign2: "Leo"
		signs: ['Virgo', 'Leo']
	},
	{
		month: "September",
		border: 23,
		// sign1: "Libra",
		// sign2: "Virgo"
		signs: ['Libra', 'Virgo']
	},
	{
		month: "October",
		border: 23,
		// sign1: "Scorpio",
		// sign2: "Libra" 
		signs: ['Scorpio', 'Libra']
	},
	{
		month: "November",
		border: 22,
		// sign1: "Sagittarius",
		// sign2: "Scorpio"
		signs: ['Sagittarius', 'Scorpio']
	},
	{
		month: "December",
		border: 22,
		// sign1: "Capricorn",
		// sign2: "Sagittarius"
		signs: ['Capricorn', 'Sagittarius']
	},


];

// solution 1

// if(dayInput >= zodiacSigns[monthInput].border && monthInput != 0 && dayInput <=31) {
// 	console.log(zodiacSigns[monthInput].month + " " + dayInput + " is " + zodiacSigns[monthInput].sign1)
// } else if (dayInput < zodiacSigns[monthInput].border && dayInput !=0) {
// 	console.log(zodiacSigns[monthInput].month + " " + dayInput + " is " + zodiacSigns[monthInput].sign2)
// } else {
// 	console.log('INPUT A CORRECT BIRTHDAY')
// }


// solution 2

if(dayInput >= zodiacSigns[monthInput].border && monthInput != 0 && dayInput <=31) {
	console.log(zodiacSigns[monthInput].month + " " + dayInput + " is " + zodiacSigns[monthInput].signs[0])
} else if (dayInput < zodiacSigns[monthInput].border && dayInput !=0) {
	console.log(zodiacSigns[monthInput].month + " " + dayInput + " is " + zodiacSigns[monthInput].signs[1])
} else {
	console.log('INPUT A CORRECT BIRTHDAY')
}