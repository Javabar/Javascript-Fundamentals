// const pressGrindBeans = () => {
//     console.log("Grinding for 20 seconds");
// }
// pressGrindBeans();

// let coffeeIsGrinding = false;
// const pressGrindBeans = () => {
//     if (coffeeIsGrinding) {
//         console.log("stopping the grind");
//         coffeeIsGrinding = false;
//     } else {
//         console.log("grinding is about to begin");
//         coffeeIsGrinding = true;
//     }
// }

// pressGrindBeans ()

// const cashWithdrawl = (amount, accnum ) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`);
// }

// cashWithdrawl(300, 50449921)
// cashWithdrawl(30, 50449921)
// cashWithdrawl(200, 50447921)

// let accnumber = 50449921;
// const cashWithdrawl = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`)
// }
// cashWithdrawl(300, accnum)
// cashWithdrawl(30, 50449921)
// cashWithdrawl(200, 50447921)


// const addUp = (num1, num2) => {
//     return num1 + num2;
// }

// addUp(7, 3);
// console.log(addUp(2, 5));

// const multiplyByNineFifths = (celsius) => {
//     return celsius * (9/5);
// };
// const getFahrenheit = (celsius) => {
//     return multiplyByNineFifths(celsius) + 32;
// };

// console.log("The temperature is " + getFahrenheit(15) + "°F")

// function sqaure(number) {
//     return number * number;
// }

// sqaure(5);
// console.log(sqaure)


// function factorial (n) {}
//     if ((n === 0) || (n ===1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// console.log(factorial(33));

//  Activity 1
// const factorial = (n) => {
//     if ((n === 0) || (n ===1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// };
// console.log(factorial(33))

//  Activity 2

// let orderCount = 0;
// const takeOrder = (topping, typeOfCrust) => {
//     console.log(`${orderCount} Pizza with ${topping} and a crust type ${typeOfCrust}`)
//     orderCount++;
// }
// takeOrder("pineapple", "cheese");
// takeOrder("pineapple", "cheese");
// takeOrder("pineapple", "cheese");

// activity 3

let pinNumber = 1234;
let accBalance = 500;


const balanceCheck = function (number) {
  return accBalance - number;
};
const pinCheck = function (thePin) {
  if (pinNumber == thePin) {
    return false;
  } else {
    return true;
  }
};

const cashMachine = (thePin, amount) => {
  if (pinCheck(thePin)) {
    console.log("Incorrect Pin Number");
  } else {
    if (amount > accBalance) {
      console.log("Insufficient funds");
    } else {
      accBalance = balanceCheck(amount);
      console.log(`New balance is ${accBalance}`);
    }
  }
};

cashMachine(1233, 300);
cashMachine(1234, 600);
cashMachine(1234, 400);
cashMachine(1234, 200);
