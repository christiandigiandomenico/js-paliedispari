let userChoice1 = prompt("Pari o dispari?")
let userChoice2 = Number(prompt("Inserisci un numero da 1 a 5"))

let numberSum = userChoice2 + randomNumber()

console.log(userChoice1)
console.log(userChoice2)
console.log(randomNumber())
console.log(evenOrOdd())
console.log(numberSum)

function randomNumber() {

    return Math.floor(Math.random() * 5) + 1;

}

function evenOrOdd() {

    if (numberSum % 2 == 0) {

        return "pari"

    } else {

        return "dispari"

    }

}
