'use strict';

const input = document.querySelector('.input');
const clue = document.querySelector('.clue');
const numberGuess = document.querySelector('.oportunity');
let bigger = ["I'm more smaller", "You are close", "I'm not too bigger", "Subtract a little bit", "Not far away"]
let smaller = ["I'm more bigger", "You are close", "I'm not too smaller", "Add a little bit", "Not far away"]
let value = input.value.trim();
let count = 5;
let random = randomNumber()

function randomNumber () {
    return Math.floor(Math.random() * 25);
}

function checkNum (number) {
    if (number.length > 2 || isNaN(number)) {
        clue.innerText = 'Please, enter a valid two-digit number';
        return;
    }
}

function game(value) {
    let randomPhrase = Math.floor(Math.random() * 4)
    
    if (count > 1) {
        switch (true) {
            case value === random:
                clue.innerText = `Congratulations. The number is ${random}`
                break;
            case value < random:
                clue.innerText = smaller[randomPhrase]
                break;
            case value > random:
                clue.innerText = bigger[randomPhrase]
                break;
            case value > 25:
                clue.innerText = "Type a number under 25"
                break;
        }
    } else {
        clue.innerText = '¡¡GAME OVER!!';
    }
}

console.log(random)
input.addEventListener('change', () => {
    checkNum(value);
    game(value);
    count--;
    numberGuess.innerText = `${count}`
})