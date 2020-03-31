// creating a JS object
// we use the object literal {} to create an object

// const arr = []; //array literals
const myObject = {}
console.log(typeof myObject); //object

let stringExample = "hello";
console.log(typeof stringExample); //string

// whereas in arrays, values are simple added and accessed
// by index, objects use key:value pairs

const lotteryNumbers = [1, 8, 2, 55, 34, 60]
console.log(lotteryNumbers[3]); //55

const user = {
	// key : value
	firstName : "Arwyne",
	lastName : "De Guzman",
	car : "Civic",
	color: "red" 
}
console.log(user.firstName); // outputs the value of firstName property inside user
console.log(user.lastName); // outputs the value of lastName property inside user
console.log(user.firstName + ' ' + user.lastName);
console.log(user); // outputs the whole user object
console.log(user.car);
console.log(user.color);


// arrays lend itself well to storing a sequence of data that can be accessed via its index
// while an object is well-suited for storing key-value pairs

// adding to an object
// you can declare an empty object, the populate its key-value pairs.
// this can be achieved in a couple of ways:
const obj = {}; //an empty object

// bracket notation
// syntax: objectName["key"] = "value to be assigned"
obj["firstName"] = "John";
obj["lastName"] = "Doe";
obj["weight in kilos"] = 5; // you can do spaces on bracket notation but not advisable. camelCase is still used

console.log(obj);
console.log(obj.firstName + ' ' + obj.lastName);
console.log(obj.firstName) // John
console.log(obj.lastName) // Doe

// dot notation
obj.gener = "male";
obj.profession = "web developer";
console.log(obj);

// create an alert message that says : "my name is <firstname prop> <lastname prop>"

// alert("my name is " + obj.firstName + " " + obj.lastName);

// dot notation is more commonly used, there are tasks that
// are only possible with bracket notation such as support for
// strings as keys containing spaces and other special characters


// reading from an object
	// reading from an object can also be done
	// using bracket and dot notation

const obj2 = {
	firstName : "Hugo",
	lastName : "Boss"
}

console.log("Hello, my name is " + obj2.firstName + " " + obj2.lastName)
console.log(obj2[0]); //returns undefined
// dot notation
console.log(obj2.firstName); //Hugo
// bracket notation
console.log(obj2["lastName"]) //Boss


// nested objects
const person = {
	firstName : "Juan",
	lastName : "Dela Cruz",
	// nested object birthday
	birthday : {
		// declare the birthday object's own key value pairs
		month: "June",
		day: 12
	}
}

console.log(person);
console.log(person.firstName) // Juan
console.log(person.lastName) // Dela Cruz
console.log(person.month) // undefined
console.log(person.birthday) // key-value pairs inside the birthday object
console.log(person.birthday.month) // June
console.log(person.birthday.day) // 12
// Hello, My name is Juan Dela Cruz. My birthday is June 12
console.log("Hello, My name is " + person.firstName + " " + person.lastName + ". My birthday is " + person.birthday.month + " " + person.birthday.day)

// we can also create nested objects
// person.name = {
// 	first : "jun",
// 	last : "doe"
// }
// creates a nested empty object
person.name = {}
person.name.first = "jun";
person.name.last = "doe";
console.log(person)

// take note that it can only assign object properties
// to a previously declared object


// methods are functions inside an object
// console.log(console)


const profile = {
	username : "yuanveerus",
	password : "covid19",
	id : 932123122,
	birthday : {
		month : "june",
		day : 12
	},
	// create a method called showUser that will output
	// the username and the password of the profile object
	showUser : function () {
		// alert("accessing the user credentials...")
		// console.log("accessing the user credentials...")
		// console.log("output value of username: " + profile.username)
		// console.log("output value of password: " + profile.password)

		// this will refer to the object we are inside of (object profile)
		console.log(this)
		console.log(this.username); //yuanveerus
		console.log(this.password) //covid19
		// console.log("username: " + this.username + " password: " + this.password)

		// return will break the function and return the result of the query
		// upon execution of the method
		return "username: " + this.username + " password: " + this.password
	}
}

// access the showUser method
// console.log()
console.log(profile.showUser())

// once we call back the showUser method of profile, output in the console
// " username: valueOfUsername password: valueOfPassword "
console.log(profile.showUser())
