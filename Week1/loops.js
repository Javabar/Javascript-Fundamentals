// let favDrink = [
//     "coke",
//     "Fanta",
//     "Tonic"
// ]

// console.log(favDrink[0])
// console.log(favDrink[1])
// console.log(favDrink[2])


// let favDrink = [
//     "coke",
//     "Fanta",
//     "Tonic",
//     "Red Bull"
// ];

// for(let i = 0; i < favDrink.length; i++){
//     console.log(favDrink[i]);
// }

// let multiplesTwo = [];

// for (let i = 0; i < 20; i++) {
//     if (i % 2 == 0) {
//         multiplesTwo.push(i);
//     }
// }
// console.log(`Numbers divisible by 2 between 0 and 20 are: $(multiplesTwo).`)

// let age = 15
// while (age < 18) {
//     console.log("You're a child!");
//     age++;
// }
// console.log("You're an adult!")

// let cards = ["Diamond", "Spade", "Heart", "club"];
// let currentCard = "club";
// while (currentCard != "spade") {
//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random()*4)];
// }
// console.log(currentCard);

// activity 1

// let favFilm = [
//     "spiderman", 
//     "batman", 
//     "superman", 
//     "hulk", 
//     "thor"
// ];

// favFilm.push("starwars");
// console.log(favFilm)

// // for(let i = 0; i < favFilm.length; i++){
// //     console.log(favFilm[i])
// // }

// // activity 2
// var i = [];
// while(i.length < 6){
// var r = Math. floor(Math. random() * 50) + 1;
// if ( i. indexOf(r) === -1) i. push(r);
// console.log(i);
// }

// // activity 3

// let aNumber = 0;
// while (aNumber < 10) {
//   console.log(aNumber);
//   aNumber++;
// } 
// let aNumber1 = 9;
// while (aNumber1 > -1) {
//   console.log(aNumber1);
//   aNumber1--;
// }

// Activity 4

let fourFilms = ["Toy Story", "Home Alone", "Spiderman", "Gremlins"];
for (let i = 0; i < fourFilms.length; i++) {
  console.log(fourFilms[i]);
}
if (fourFilms[2] == "GhostBusters") {
  console.log("Yay it's Ghostbusters");
} else {
  console.log("Boo! We want Ghostbusters");
}

// Activity 5 

// let randomNumberList = [];
// for (let i = 0; i < 6; i++) {
//   randomNumberList.push(Math.floor(Math.random() * 30));
// }
// console.log(randomNumberList);
// for (let i = 0; i < randomNumberList.length; i++) {
//   if (randomNumberList[i] % 7 == 0) {
//     console.log(`${randomNumberList[i]} is divisible by 7`);
//   } else {
//     console.log(`${randomNumberList[i]} is not divisible by 7`);
//   }
// }
// for (let i = 0; i < randomNumberList.length; i++) {
//   console.log(`${i}: ${randomNumberList[i]}`);
// }

// // Activity 6

// let bobsFollowers = ["Katy", "Sarah", "Mark", "Taz"];
// let hannahsFollowers = ["Joanne", "Claire", "Sarah", "Katy"];

// for (let bobIndex = 0; bobIndex < bobsFollowers.length; bobIndex++) {
  
//   for (
//     let hannahIndex = 0;
//     hannahIndex < hannahsFollowers.length;
//     hannahIndex++
//   ) {
    
//     if (bobsFollowers[bobIndex] == hannahsFollowers[hannahIndex]) {
//       console.log(`${bobsFollowers[bobIndex]} follows Bob and Hannah`);
//     }
//   }
// }

// // Activity 7

// // While Loop
// // Uses a condition and the program will run WHILE the condition is met
// // Pros - Can iterate through part of an array 
// // Cons - Can get stuck on an loop if condition is not met 

// // For Loop 
// // Iterates over an array for a condition 
// // Pros - can iterate over a full list if you dont know long the list is 
// // Con - cant not iterate over part of list 

