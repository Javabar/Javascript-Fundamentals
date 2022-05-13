// let wehather = "sunny";

// if (weather == "sunny") {
//     console.log("well, I better wear some suncream!")
// } else if (weather == "rainy") {
//     console.log("better take an umbrella")
// } else {
//     console.log("hmm, it could go either way!")
// }

// if (1 === "1") {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// if (1 != "1") {
//     console.log(true);
// }
// else {
//     console.log(false);
// }


// let place = "Manc";
// let weather = "Cloudy";

// if (place == "Manc" && weather == "Sunny") {
//     console.log("Check again");
// }
// else if (place == "Manc" && weather == "Rain") {
//     console.log("Obvs");
// }
// else {
//     console.log("What it isnt raining");
// }

// let day = "saturday";

// if (day == "saturday" || day == "sunday"){
//     console.log("It's weekend!")
// }
// else {
//     console.log("when's weekend?")
// }

// let car = "Peugeot";

// switch(car){
//     case "Ford":
//     case "GM":
//         console.log("You've got an American car!");
//         break;
//     case "Peugeot":
//     case "Citroen":
//         console.log("You've got a French boy!");
//         break;
//     case "Honda":
//     case "Toyota":
//     case "Suzuki":
//         console.log("Japenese cars are dead quite!");
//         break;
//     case "Mercedes":
//         console.log("You are proper posh German!");
//         break;
//     case "Volkswagen":
//         console.log("German aren't that bad at all");
//         break;
//     case "Hyundai":
//     case "Kia":
//         console.log("South Korea cars are getting popular");
//         break;
//     default:
//         console.log("your car is not in the top ten companies in the world!")
// }

// activity 1

// let age = 17

// if (age => 17){
//     console.log("Yes I can serve you")
// } else {
//     console.log ("You aren;t old enough")
// }

// let age = 17
// let country = "UK"

// if (age => 17 && country == "UK"){
//     console.log("Yes I can serve you")
// } else {
//     console.log ("You aren;t old enough")
// }

// activity 2

// let pizzaTopping = "Pineapple"

// switch(pizzaTopping){
// case "Mushrooms":
// case "sweetcorn":
// case "Onions":
//     console.log("These are important ingreidents for my pizza")
//     break;
// case "Oregano":
// case "Olives":
//     console.log(`I do not mind having ${pizzaTopping} on my pizza `)
//     break;
// default:
//     console.log(`${pizzaTopping} should not be on a pizza`)
// }

//activity 3

// let x = "password"
// let password = 8

// if (password < 8) {
//     console.log("Password is too short")
// } else {
//     console.log("log the password to the console")
// }

// activity 4

// let x = "num"

// if ( x % 3 == 0 || x % 5 == 0){
//     console.log("This number is divisbile by 3 or 5")
// } else {
//     console.log("log something else")
// }

// activity 5

// let n = 15

// if (n % 3) {
//     console.log("buzz")
// } else if (n % 5){
// console.log("buzz")
// } else {
//     console.log("fizz buzz")
// }

// activity 6

let num2 = 1001;
let text = num2.toString();
let arrayText = text.split("");
let reverseArray = arrayText.reverse();
let joinArray = reverseArray.join("");

if (text == joinArray){
    console.log("Palindrome")
}
else{
    console.log("Not a Palindrome")
}

// activity 7

let time = 11;
let placeOfWork = "Liverpool"
let townOfHome = "Wallasey"

if (time < 9 && time > 7){
    console.log(`Commuting from ${townOfHome} to ${placeOfWork}`);
}
else if (time > 9 && time < 18){
    console.log(`In work in ${placeOfWork}`)
}
else if (time > 18 && time < 20){
    console.log(`Commuting from ${placeOfWork} to ${townOfHome}`);
} else {
    console.log(`At home in ${townOfHome}`)
}

// activity 8

let theString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
console.log(theString.lastIndexOf("i"))


// activity 9

let word = "drippled"
if (word[0] == word[word.length - 1]){
    console.log(`${word} starts and ends with the same letter`);
}
else {
    console.log(`${word} does not start and end in the same letter`);
}

// activity 10
let theNum1 = 2;
let theNum2 = 15;
let sum = theNum1 + theNum2;
if (sum % 2 == 0){
    console.log(sum);
}
else {
    console.log(theNum1 * theNum2);
}
