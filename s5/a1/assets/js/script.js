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
		// signs: ['Aquarius', 'Capricorn']
		signs: [{name: 'Aquarius', horoscope: function () {
			return 'Friendly and Humanitarian'
		}}, {name: 'Capricorn', horoscope: function () {
			return 'Practical and Prudent'
		}}
		]
	},
	{
		month: "February",
		border: 19,
		// sign1: "Pisces",
		// sign2: "Aquarius"
		// signs: ['Pisces', 'Aquarius']
		signs: [{name: 'Pisces', horoscope: function () {
			return 'Imaginative and Sensitive'
		}}, {name: 'Aquarius', horoscope: function () {
			return 'Friendly and Humanitarian'
		}}
		]
	},
	{
		month: "March",
		border: 21,
		// sign1: "Aries",
		// sign2: "Pisces"
		// signs: ['Aries', 'Pisces']
		signs: [{name: 'Aries', horoscope: function () {
			return 'Positive and Energetic'
		}}, {name: 'Pisces', horoscope: function () {
			return 'Imaginative and Sensitive'
		}}
		]
	},
	{
		month: "April",
		border: 20,
		// sign1: "Taurus",
		// sign2: "Aries"
		// signs: ['Taurus', 'Aries']
		signs: [{name: 'Taurus', horoscope: function () {
			return 'Patient and Reliable'
		}}, {name: 'Aries', horoscope: function () {
			return 'Positive and Energetic'
		}}
		]
	},
	{
		month: "May",
		border: 21,
		// sign1: "Gemini",
		// sign2: "Taurus"
		// signs: ['Gemini', 'Taurus']
		signs: [{name: 'Gemini', horoscope: function () {
			return 'Adaptable and Versatile'
		}}, {name: 'Taurus', horoscope: function () {
			return 'Patient and Reliable'
		}}
		]
	},
	{
		month: "June",
		border: 21,
		// sign1: "Cancer",
		// sign2: "Gemini"
		// signs: ['Cancer', 'Gemini']
		signs: [{name: 'Cancer', horoscope: function () {
			return 'Emotional and Loving'
		}}, {name: 'Gemini', horoscope: function () {
			return 'Adaptable and Versatile'
		}}
		]
	},
	{
		month: "July",
		border: 23,
		// sign1: "Leo",
		// sign2: "Cancer"
		// signs: ['Leo', 'Cancer']
		signs: [{name: 'Leo', horoscope: function () {
			return 'Generous and Warmhearted'
		}}, {name: 'Cancer', horoscope: function () {
			return 'Emotional and Loving'
		}}
		]
	},
	{
		month: "August",
		border: 23,
		// sign1: "Virgo",
		// sign2: "Leo"
		// signs: ['Virgo', 'Leo']
		signs: [{name: 'Virgo', horoscope: function () {
			return 'Modesty and Shy'
		}}, {name: 'Leo', horoscope: function () {
			return 'Generous and Warmhearted'
		}}
		]
	},
	{
		month: "September",
		border: 23,
		// sign1: "Libra",
		// sign2: "Virgo"
		// signs: ['Libra', 'Virgo']
		signs: [{name: 'Libra', horoscope: function () {
			return 'Diplomatic and Urbane'
		}}, {name: 'Virgo', horoscope: function () {
			return 'Modesty and Shy'
		}}
		]
	},
	{
		month: "October",
		border: 23,
		// sign1: "Scorpio",
		// sign2: "Libra" 
		// signs: ['Scorpio', 'Libra']
		signs: [{name: 'Scorpio', horoscope: function () {
			return 'Determined and Forceful'
		}}, {name: 'Libra', horoscope: function () {
			return 'Diplomatic and Urbane'
		}}
		]
	},
	{
		month: "November",
		border: 22,
		// sign1: "Sagittarius",
		// sign2: "Scorpio"
		// signs: ['Sagittarius', 'Scorpio']
		signs: [{name: 'Sagittarius', horoscope: function () {
			return 'Optimistic and Freedom-Loving'
		}}, {name: 'Scorpio', horoscope: function () {
			return 'Determined and Forceful'
		}}
		]
	},
	{
		month: "December",
		border: 22,
		// sign1: "Capricorn",
		// sign2: "Sagittarius"
		// signs: ['Capricorn', 'Sagittarius']
		signs: [{name: 'Capricorn', horoscope: function () {
			return 'Practical and Prudent'
		}}, {name: 'Sagittarius', horoscope: function () {
			return 'Optimistic and Freedom-Loving'
		}}
		]
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

// if(dayInput >= zodiacSigns[monthInput].border && monthInput != 0 && dayInput <=31) {
// 	console.log(zodiacSigns[monthInput].month + " " + dayInput + " is " + zodiacSigns[monthInput].signs[0].horoscope)
// } else if (dayInput < zodiacSigns[monthInput].border && dayInput !=0) {
// 	console.log(zodiacSigns[monthInput].month + " " + dayInput + " is " + zodiacSigns[monthInput].signs[1].horoscope)
// } else {
// 	console.log('INPUT A CORRECT BIRTHDAY')
// }


// solution 3

if(dayInput >= zodiacSigns[monthInput].border && monthInput != 0 && dayInput <=31) {
	console.log(zodiacSigns[monthInput].month + " " + dayInput + " is " + zodiacSigns[monthInput].signs[0].name)
	console.log(zodiacSigns[monthInput].signs[0].horoscope())

} else if (dayInput < zodiacSigns[monthInput].border && dayInput !=0) {
	console.log(zodiacSigns[monthInput].month + " " + dayInput + " is " + zodiacSigns[monthInput].signs[1].name)
	console.log(zodiacSigns[monthInput].signs[1].horoscope())

} else {
	console.log('INPUT A CORRECT BIRTHDAY')
}
