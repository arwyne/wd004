// create a monthInput variable
// that will accept 1-12 as its value
let monthInput = 5;
let dayInput = 23;

const months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const zodiac = ['Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagitarius', 'Capricorn']


switch(monthInput) {
	case 1:
		if(dayInput >= 20) {
			console.log(months[1] + " " + dayInput + " is " + zodiac[0])
		}
		else{
			console.log(months[1] + " " + dayInput + " is " + zodiac[11])
		} break


	case 2:
		if(dayInput >= 19) {
			console.log(months[2] + " " + dayInput + " is " + zodiac[1])
		}
		else{
			console.log(months[2] + " " + dayInput + " is " + zodiac[0])
		} break


	case 3:
		if(dayInput >= 21) {
			console.log(months[3] + " " + dayInput + " is " + zodiac[2])
		}
		else{
			console.log(months[3] + " " + dayInput + " is " + zodiac[1])
		}break


	case 4:
		if(dayInput >= 20) {
			console.log(months[4] + " " + dayInput + " is " + zodiac[3])
		}
		else{
			console.log(months[4] + " " + dayInput + " is " + zodiac[2])
		} break


	case 5:
		if(dayInput >= 21) {
			console.log(months[5] + " " + dayInput + " is " + zodiac[4])
		}
		else{
			console.log(months[5] + " " + dayInput + " is " + zodiac[3])
		} break


	case 6:
		if(dayInput >= 21) {
			console.log(months[6] + " " + dayInput + " is " + zodiac[5])
		}
		else{
			console.log(months[6] + " " + dayInput + " is " + zodiac[4])
		} break


	case 7:
		if(dayInput >= 23) {
			console.log(months[7] + " " + dayInput + " is " + zodiac[6])
		}
		else{
			console.log(months[7] + " " + dayInput + " is " + zodiac[5])
		} break


	case 8:
		if(dayInput >= 23) {
			console.log(months[8] + " " + dayInput + " is " + zodiac[7])
		}
		else{
			console.log(months[8] + " " + dayInput + " is " + zodiac[6])
		} break


	case 9:
		if(dayInput >= 23) {
			console.log(months[9] + " " + dayInput + " is " + zodiac[8])
		}
		else{
			console.log(months[9] + " " + dayInput + " is " + zodiac[7])
		} break


	case 10:
		if(dayInput >= 23) {
			console.log(months[10] + " " + dayInput + " is " + zodiac[9])
		}
		else{
			console.log(months[10] + " " + dayInput + " is " + zodiac[8])
		} break


	case 11:
		if(dayInput >= 22) {
			console.log(months[11] + " " + dayInput + " is " + zodiac[10])
		}
		else{
			console.log(months[11] + " " + dayInput + " is " + zodiac[9])
		} break


	case 12:
		if(dayInput >= 22) {
			console.log(months[12] + " " + dayInput + " is " + zodiac[11])
		}
		else{
			console.log(months[12] + " " + dayInput + " is " + zodiac[10])
		} break

	default:
		console.log("INPUT A CORRECT BIRTHDAY!!")
}