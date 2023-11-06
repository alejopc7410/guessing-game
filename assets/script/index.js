'use strict';

const input = document.querySelector('.input');
const clue = document.querySelector('.clue');
const numberGuess = document.querySelector('.oportunity');
let random = randomNumber()
console.log(random)


function randomNumber () {
    return Math.floor(Math.random() * 25);
}

let bigger = ["I'm more smaller", "You are close", "I'm not too bigger", "Subtract a little bit", "Not far away"]
let smaller = ["I'm more bigger", "You are close", "I'm not too smaller", "Add a little bit", "Not far away"]

function game() {
    let randomPhrase = Math.floor(Math.random() * 4);
    let value = input.value;
    let count = 5; 

    // for (let i = 5; i >= 0; i--) {
    //     numberGuess.innerText = i;

    //     if (value.length > 0 && value.length <= 2) {
    //         if (value == random) {
    //             clue.innerText = `Congratulations, the number is ${random}`;
    //         } else if (value > random) {
    //             count -= 1; // Actualizar count en cada rama del condicional
    //             numberGuess.innerText = count;
    //             clue.innerText = bigger[randomPhrase];
    //         } else {
    //             count -= 1; // Actualizar count en cada rama del condicional
    //             numberGuess.innerText = count;
    //             clue.innerText = smaller[randomPhrase];
    //         }
    //     } else {
    //         clue.innerText = 'Please, enter a 2-digit number';
    //         break;
    //     }
    // }

    for (let i = 5; i >= 0; i--) {
        numberGuess.innerText = i;

        if (value.length > 0 && value.length <= 2) {
            return true;
        } else {
            clue.innerText = 'Please, enter a 2-digit number';
        }

        if (value == random) {
            clue.innerText = `Congratulations, the number is ${random}`;
        } else if (value > random) {
            count -= 1; // Actualizar count en cada rama del condicional
            numberGuess.innerText = count;
            clue.innerText = bigger[randomPhrase];
        } else {
            count -= 1; // Actualizar count en cada rama del condicional
            numberGuess.innerText = count;
            clue.innerText = smaller[randomPhrase];
        }
    }
}


input.addEventListener('change', game)