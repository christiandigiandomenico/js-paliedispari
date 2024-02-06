const buttonElement = document.querySelector("#inizia-gioco")

let userChoice;

buttonElement.addEventListener("click", function () {

    userChoice = prompt("Scegli una parola")

    function palindromo(parola) {

        let i = 0;

        while (i < Math.floor(parola.length / 2)) {

            if (parola[i] !== parola[parola.length - 1 - i]) {

                return false;

            }

            i++;

        }

        return true;

    }

    document.getElementById("result").innerHTML = palindromo(userChoice)

})