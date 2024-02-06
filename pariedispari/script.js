const buttonElement = document.querySelector("#inizia-gioco")

buttonElement.addEventListener("click", function () {

    let userChoice1;

    userChoice1 = prompt("Pari o Dispari?")

    while (!(userChoice1 === "Pari" || userChoice1 === "Dispari")) {
        userChoice1 = prompt("Valore non valido, inserisci Pari o Dispari")
    }

    let userChoice2;

    userChoice2 = Number(prompt("Inserisci un numero da 1 a 5"));

    while (userChoice2 < 1 || userChoice2 > 5 || isNaN(userChoice2)) {
        userChoice2 = prompt("Valore non valido, inserisci un numero da 1 a 5")
    }

    let numRnd = randomNumber();

    let numberSum = userChoice2 + numRnd

    let esito = evenOrOdd(numberSum)


    if (userChoice1 == esito) {
        document.getElementById("result").innerHTML = ("Il numero uscito è " + numberSum + " hai vinto!")
    } else {
        document.getElementById("result").innerHTML = ("Il numero uscito è " + numberSum + " hai perso!")
    }

    // console.log(userChoice1)
    // console.log(userChoice2)
    // console.log(numRnd)
    // console.log(evenOrOdd(numberSum))
    // console.log(numberSum)

    function randomNumber() {

        return Math.floor(Math.random() * 5) + 1;

    }

    function evenOrOdd(variabile) {

        if (variabile % 2 == 0) {

            return "Pari"

        } else {

            return "Dispari"

        }

    }

})