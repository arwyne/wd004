// create a zodiacSigns array of objects with properties
// month, border, sign1 and sign2. the first index of
// the array is an empty strng
// display in the console all of the properties
// of the selected array element
// depending on the border property, display either one
// of the signs associated with the given month

let monthInput = 5;
let dayInput = 23;

const zodiacSigns = [
	'',
	{
		month: "January",
		border: 20,
		sign1: "Aquarius",
		sign2: "Capricorn"
	},
	{
		month: "February",
		border: 19,
		sign1: "Pisces",
		sign2: "Aquarius"
	},
	{
		month: "March",
		border: 21,
		sign1: "Aries",
		sign2: "Pisces"
	},
	{
		month: "April",
		border: 20,
		sign1: "Taurus",
		sign2: "Aries"
	},
	{
		month: "May",
		border: 21,
		sign1: "Gemini",
		sign2: "Taurus"
	},
	{
		month: "June",
		border: 21,
		sign1: "Cancer",
		sign2: "Gemini"
	},
	{
		month: "July",
		border: 23,
		sign1: "Leo",
		sign2: "Cancer"
	},
	{
		month: "August",
		border: 23,
		sign1: "Virgo",
		sign2: "Leo"
	},
	{
		month: "September",
		border: 23,
		sign1: "Libra",
		sign2: "Virgo"
	},
	{
		month: "October",
		border: 23,
		sign1: "Scorpio",
		sign2: "Libra" 
	},
	{
		month: "November",
		border: 22,
		sign1: "Sagittarius",
		sign2: "Scorpio"
	},
	{
		month: "December",
		border: 22,
		sign1: "Capricorn",
		sign2: "Sagittarius"
	},


];

if(dayInput >= zodiacSigns[monthInput].border && monthInput != 0 && dayInput <=31) {
	console.log(zodiacSigns[monthInput].month + " " + dayInput + " is " + zodiacSigns[monthInput].sign1)
} else if (dayInput < zodiacSigns[monthInput].border && dayInput !=0) {
	console.log(zodiacSigns[monthInput].month + " " + dayInput + " is " + zodiacSigns[monthInput].sign2)
} else {
	console.log('INPUT A CORRECT BIRTHDAY')
}

