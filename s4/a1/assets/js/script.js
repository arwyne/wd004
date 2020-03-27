// create a monthInput variable
// that will accept 1-12 as its value
let monthInput = 5;
let dayInput = 23;

const months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const zodiac = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn']


// solution 2

switch(monthInput) {

	// jan 1-19 capricorn[0]
	// jan 20 onwards aquarius zodiac[1]
	case 1:
		if(dayInput >= 20) {
			console.log(months[monthInput] + " " + dayInput + " is " + zodiac[monthInput])
		}
		else {
			console.log(months[monthInput] + " " + dayInput + " is " + zodiac[monthInput-1])
		}
		break


	// feb 1-18 aquarius zodiac[1]
	// feb 19 onwards zodiac[2]
	case 2:
		if(dayInput >= 19) {
			console.log(months[monthInput] + " " + dayInput + " is " + zodiac[monthInput])
		}
		else{
			console.log(months[monthInput] + " " + dayInput + " is " + zodiac[monthInput-1])
		}
		break


	// march 1-20 pisces zodiac[2]
	// march 21 onwards aries zodiac[3]
	case 3:
		if(dayInput >= 21) {
			console.log(months[monthInput] + " " + dayInput + " is " + zodiac[monthInput])
		}
		else{
			console.log(months[monthInput] + " " + dayInput + " is " + zodiac[monthInput-1])
		}
		break


	// april 1-19 aries zodiac[3]
	// april 20 onwards taurus zodiac[4]
	case 4:
		if(dayInput >= 20) {
			console.log(months[monthInput] + " " + dayInput + " is " + zodiac[monthInput])
		}
		else{
			console.log(months[monthInput] + " " + dayInput + " is " + zodiac[monthInput-1])
		}
		break


	// may 1 - 20 taurus zodiac[4]
	// may 21 onwards gemini zodiac[5]
	case 5:
		if(dayInput >= 21) {
			console.log(months[monthInput] + " " + dayInput + " is " + zodiac[monthInput])
		}
		else{
			console.log(months[monthInput] + " " + dayInput + " is " + zodiac[monthInput-1])
		}
		break


	// june 1-20 gemini zodiac[5]
	// june 21 onwards cancer zodiac[6]
	case 6:
		if(dayInput >= 21) {
			console.log(months[monthInput] + " " + dayInput + " is " + zodiac[monthInput])
		}
		else{
			console.log(months[monthInput] + " " + dayInput + " is " + zodiac[monthInput-1])
		}
		break


	// july 1-22 cancer zodiac[6]
	// july 23 onwards leo zodiac[7]
	case 7:
		if(dayInput >= 23) {
			console.log(months[monthInput] + " " + dayInput + " is " + zodiac[monthInput])
		}
		else{
			console.log(months[monthInput] + " " + dayInput + " is " + zodiac[monthInput-1])
		} 
		break


	// august 1-22 leo zodiac[7]
	// august 23 onwards virgo zodiac [8]
	case 8:
		if(dayInput >= 23) {
			console.log(months[monthInput] + " " + dayInput + " is " + zodiac[monthInput])
		}
		else{
			console.log(months[monthInput] + " " + dayInput + " is " + zodiac[monthInput-1])
		}
		break


	// september 1-22 virgo zodiac[8]
	// september 23 onwards libra zodiac[9]
	case 9:
		if(dayInput >= 23) {
			console.log(months[monthInput] + " " + dayInput + " is " + zodiac[monthInput])
		}
		else{
			console.log(months[monthInput] + " " + dayInput + " is " + zodiac[monthInput-1])
		}
		break


	// october 1-22 libra zodiac[9]
	// october 23 onwards scorpio zodiac[10]
	case 10:
		if(dayInput >= 23) {
			console.log(months[monthInput] + " " + dayInput + " is " + zodiac[monthInput])
		}
		else{
			console.log(months[monthInput] + " " + dayInput + " is " + zodiac[monthInput-1])
		}
		break


	// november 1-21 scorpio zodiac[10]
	// november 22 onwards sagittarius zodiac[11]
	case 11:
		if(dayInput >= 22) {
			console.log(months[monthInput] + " " + dayInput + " is " + zodiac[monthInput])
		}
		else{
			console.log(months[monthInput] + " " + dayInput + " is " + zodiac[monthInput-1])
		}
		break


	// december 1-21 sagittarius zodiac[11]
	// december 22 onwards capricorn zodiac[12]
	case 12:
		if(dayInput >= 22) {
			console.log(months[monthInput] + " " + dayInput + " is " + zodiac[monthInput])
		}
		else{
			console.log(months[monthInput] + " " + dayInput + " is " + zodiac[monthInput-1])
		}
		break

	default:
		console.log("INPUT A CORRECT MONTH!!")
}


