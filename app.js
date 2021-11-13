// Start of Chapter No 21 to 25

// Answer no 1:
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = `${firstName} ${lastName}`;
// document.write(fullName);

// Answer no 2:
// var mobile = prompt("Enter your favourite mobile phone!");
// var textLength = mobile.length;
// document.write(`Your favorite phone is: ${mobile}<br>`);
// document.write(`Length of string: ${textLength}<br>`);

// Answer no 3:
// var nationality = "Pakistani";
// var findIndex = nationality.indexOf("n");
// document.write(`${typeof nationality}: ${nationality}<br>`);
// document.write(`Index of 'n': ${findIndex}`);

// Answer no 4:
// var text = "Hello world!";
// var findLastIndex = text.lastIndexOf("l");
// document.write(`${typeof text}: ${text}<br>`);
// document.write(`Last index of 'l': ${findLastIndex}`);

// Answer no 5:
// var nationality = "Pakistani";
// var findChar = nationality.charAt(3);
// document.write(`${typeof nationality}: ${nationality}<br>`);
// document.write(`Character at index 3: ${findChar}`);

// Answer no 6:
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName.concat(" ",lastName);
// document.write(fullName);

// Answer no 7:
// var city = "Hyderabad";
// var newCity = "";
// var newText = "Islam";
// var cityLength = city.length;
// for (let i = 0; i < cityLength; i++) {
//     if (city.slice(i, 5) === "Hyder") {
//         newCity = newText + city.slice(i + 5);
//     }
// }
// document.write(newCity);

// Answer no 8:
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replace(/and/g, "&");
// document.write(newMessage);

// Answer no 9:
// var num = "472";
// document.write(`Value: ${num}<br>`);
// document.write(`Type: ${typeof num}<br>`);
// var convertIntoNumber = parseInt(num);
// document.write(`Value: ${convertIntoNumber}<br>`);
// document.write(`Type: ${typeof convertIntoNumber}<br>`);

// Answer no 10:
// var name = prompt("Enter your name");
// document.write(`User Name: ${name}<br>`);
// document.write(`Upper Case: ${name.toUpperCase()}<br>`);

// Answer no 11:
// var fullName = prompt("Enter your name");
// document.write(`User Name: ${fullName}<br>`);
// var text = "";
// var firstLetter = fullName.charAt(0).toUpperCase();
// for (let i = 0; i < fullName.length; i++) {
//     text = firstLetter + fullName.slice(1);
// }
// document.write(`Your Name: ${text}`);

// Answer no 12:
// var num = 35.36;
// var convertedNumber = num.toString().split(".").join("");
// document.write(convertedNumber);

// Answer no 13:
// var fullName = prompt("Enter your full name");
// if (fullName.includes("@")) {
//     alert("Please enter a valid username!");
// } else if (fullName.includes("!")) {
//     alert("Please enter a valid username!");
// } else if (fullName.includes(",")) {
//     alert("Please enter a valid username!");
// } else if (fullName.includes(".")) {
//     alert("Please enter a valid username!");
// } else {
//     document.write(`Hello ${fullName}`);
// }

// Answer no 14:
// var bakkeryItems = ["cake","apple pie","cookie","chips","patties"];
// var findYourItem = prompt("Welcome to our bakkery, What do you want to order sir/ma\'am").toLowerCase();
// var isMatch = false;

// for (let i = 0; i < bakkeryItems.length; i++) {
//     if (bakkeryItems[i] === findYourItem) {
//         isMatch = true;
//         alert(`${findYourItem} is available at index ${i} in our bakery`);
//     }
// }

// if (isMatch == false) {
//     alert(`we are sorry. ${findYourItem} is not available in our bakery.`);
// }

// Answer no 15:
// var password = prompt("Enter your password");
// var isMatch =false;

// if (password != "") {
//     for (let i = 0; i < password.length; i++) {
//         if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
//             document.write("Password can't begin with a number.<br>");
//             isMatch = true;
//             break;
//         }
//         if (password.charCodeAt(i) >= 0 
//         && password.charCodeAt(i) <= 47 
//         ) {
//             document.write("Password should contain alphabets & numbers (a-z,A-X & 0-9).<br>");
//             isMatch = true;
//             break;
//         } else if (password.charCodeAt(i) >= 58
//         && password.charCodeAt(i) <= 64
//         ) {
//             document.write("Password should contain alphabets & numbers (a-z,A-X & 0-9).<br>");
//             isMatch = true;
//             break;
//         } else if (password.charCodeAt(i) >= 91
//         && password.charCodeAt(i) <= 96
//         ) {
//             document.write("Password should contain alphabets & numbers (a-z,A-X & 0-9).<br>");
//             isMatch = true;
//             break;
//         } else if (password.charCodeAt(i) >= 123
//         && password.charCodeAt(i) <= 127
//         ) {
//             document.write("Password should contain alphabets & numbers (a-z,A-X & 0-9).<br>");
//             isMatch = true;
//             break;
//         }
//         if (password.length > 6) {
//             document.write("Password must at least 6 characters long.<br>");
//             isMatch = true;
//             break;
//         }
//     }
// } else {
//     document.write("Please fill you password!<br>");
// }

// if (isMatch) {
//     document.write("Please enter a valid password<br>");
// } else {
//     document.write(`Entered Password: ${password}<br>`);
// }

// Answer no 16:
// var uni = "University of Karachi";
// var university = uni.split("");
// for (let i = 0; i < university.length; i++) {
//     document.write(`${university[i]}<br>`);
// }

// Answer no 17:
// var text = prompt("Enter what ever you want");
// var findLastIndex = text.charAt(text.length - 1);
// document.write(`User Input: ${text}<br>`);
// document.write(`Last character of input: ${findLastIndex}`);

// Answer no 18:
// var text = "The quick brown fox jumps over the lazy dog";
// var counter = text.toLowerCase().split('the').length - 1;
// document.write(`There are ${counter} occurrence(s) of word 'text'`);

// End of Chapter No 21 to 25

// Start of Chapter 26 to 30

// Answer no 1:
// var num = +prompt("Enter the number!");
// document.write(`number: ${num}<br>`);
// var roundValue = Math.round(num);
// document.write(`round off value: ${roundValue}<br>`);
// var floorValue = Math.floor(num);
// document.write(`floor value: ${floorValue}<br>`);
// var ceilValue = Math.ceil(num);
// document.write(`ceil value: ${ceilValue}<br>`);

// Answer no 2:
// var num = +prompt("Enter the number!");
// document.write(`number: ${num}<br>`);
// var roundValue = Math.round(num);
// document.write(`round off value: ${roundValue}<br>`);
// var floorValue = Math.floor(num);
// document.write(`floor value: ${floorValue}<br>`);
// var ceilValue = Math.ceil(num);
// document.write(`ceil value: ${ceilValue}<br>`);

// Answer no 3:
// var num = +prompt("Enter the number!");
// var absNum = Math.abs(num);
// document.write(`The absolute value of ${num} is ${absNum}`);

// Answer no 4:
// var dice1 = Math.floor(Math.random() * 6) + 1;
// var dice2 = Math.floor(Math.random() * 6) + 1;
// document.write(`Random Dice Value: ${dice1}<br>`);
// document.write(`Random Dice Value: ${dice2}<br>`);

// Answer no 5:
// var head = prompt("Enter a name for head toss");
// var tail = prompt("Enter a name for tail toss");
// var toss = Math.floor(Math.random() * 2) + 1;

// if (toss === 1) {
//     document.write(`It\'s Head! ${head} has won the toss!`);
// } else {
//     document.write(`It\'s Tail! ${tail} has won the toss!`);
// }

// Answer no 6:
// var num = Math.floor(Math.random() *100) + 1;
// document.write(`Random number between 1 and 100: ${num}`);

// Answer no 7:
// var kilogram = prompt("Enter your weight in kilograms");
// document.write(`The weight of user is ${parseFloat(kilogram)} kilograms`);

// Answer no 8:
// var secretNumber = 9;
// var num = +prompt("Guess the number!");

// if (secretNumber == num) {
//     document.write(`Congratulations`);
// } else {
//     document.write(`Try Again!`);
// }

// End of Chapter 26 to 30