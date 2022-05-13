// let offer = "none";
// let time = 1200;

// const cafe = {
//     name: "whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Cappuccino",
//         "Latte",
//         "Filter Coffee",
//         "Tea",
//         "Hot Chocolate"
//     ],
//     breakfastOffer: "Free Croisant with coffee",
//     lunchOffer: "Free drink with surprisngly priced sandwitch",
//     noOffer: "sorry no offer",

// this is for nomral functions
// openCafe () {
//     return "come on in";
// },
// closeCafe () {
//     return "we are closed, come back tomorrow"
// }

//  This is for functions with this.
// openCafe () {
//     if(this.hasSpecialOffer){
//     return "Time for a special offer!";
//     }
// },
// closeCafe () {
//     return "we are closed, come back tomorrow"
// }
// };

// console.log(cafe.openCafe());
// console.log(cafe.closeCafe())

// if (time < 1100) {
//     offer = cafe.breakfastOffer;
//     console.log(cafe.breakfastOffer);
// } else if (time < 1500) {
//     offer = cafe.lunchOffer;
//     console.log(cafe.lunchOffer);
// }


// const person = {
// name: "Abdelbar",
// age: 27
// }
// console.log(person.name)


// const alarmType = {
//     weekendAlarm: "No alarm needed",
//     weekdayAlarm: "get up at 7am",
// };

// let day = "saturday";
// let alarm;

//     if (day === "saturday" || day === "sunday") {
//         alaram = alarmType.weekendAlarm;
//     } else {
//         alarm = alarmType.weekdayAlarm;
//     }
// console.log(alarm);




// activity 1 

// const person = {
// name: "Abdelbar",
// age: 27,
// hi: true,

// sayHi () {
//         return `hello my name is ${this.name}`
//     }
// }
// console.log(person.sayHi());

// Activity 2

// const pet = {
//     name: "cat",
//     typeOfPet: "Domestic",
//     age: 12,
//     colour: "white",

// eat () {
//     return `${this.name} is eating`
// },
// drink () {
//     return `${this.name} is drinking`
// }
   
// }

// console.log(pet.eat())
// console.log(pet.drink())


// activity 3

coffeeShop = {
    branch: "manchester",
    drinks:["coke", "pepsi", "7up", "fanta" ],
    food: ["tuna", "salad", "chicken", "lamb"],
drinksOrdered () {
    return `You're order is ${this.drinks}`
},
foodOrdered () {
    return `You're order is ${this.food}`
}
}

console.log(coffeeShop.drinksOrdered())
console.log(coffeeShop.foodOrdered())











