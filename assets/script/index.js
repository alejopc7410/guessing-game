'use strict';

const input = document.querySelector('.input');
const clue = document.querySelector('.clue');
const numberGuess = document.querySelector('.oportunity');
const guessBtn = document.querySelector('.submit')
const start = document.querySelector('.start')
const gameWindow = document.querySelector('.game')
const dialog = document.querySelector('.welcome-window')
let bigger = ["I'm more smaller", "You are close", "I'm not too bigger", "Subtract a little bit", "Not far away"]
let smaller = ["I'm more bigger", "You are close", "I'm not too smaller", "Add a little bit", "Not far away"]
let count = 5;

function randomNumber () {
    return Math.floor(Math.random() * 25);
}

let random = randomNumber()

function checkNum (number) {
    const num = parseInt(number)

    if (isNaN(num)) {
        clue.innerText = 'Please enter a valid number';
        return false;
    } else if (num > 25) {
        clue.innerText = 'Please enter a number smaller than 25';
        return false;
    } else {
        clue.innerText = ''
        return true;
    }
}

function game(number) {
    let randomPhrase = Math.floor(Math.random() * 4)
    
    if (count > 1) {
        if (number == random) {
            clue.innerText = `Congratulations. The number is ${random}`
            guessBtn.style.display = 'none'
        } else if (number < random) {
            clue.innerText = smaller[randomPhrase]
        } else {
            clue.innerText = bigger[randomPhrase]
        }
    } else {
        clue.innerText = '¡¡GAME OVER!!';
    }
}

console.log(random)

start.addEventListener('click', () => {
    dialog.style.display = 'none'
    gameWindow.style.display = 'block'
})

guessBtn.addEventListener('click', () => {
    let value = input.value;
    if (checkNum(value)) {
        game(value);
        count--;
        numberGuess.innerText = `${count}`
    }

    if (count == 0) {
        input.style.animation = 'flash'
        input.style.animationDuration = '1s';
        input.style.animationIterationCount = '3';
        guessBtn.style.display = 'none'
    }
})