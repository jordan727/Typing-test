// array of random words
// user types out words in a certain time period
// calculate wpm
// https://www.geeksforgeeks.org/design-a-typing-speed-test-game-using-javascript/
//Show only a certain number of random words, generate new line of random words after line finishes
// Random words used

let timeLimit = 30;

let inputArea = document.getElementById("inputarea");

let wordArray = [];
let timeLeft = timeLimit;
let timeElapsed = 0;
let totalErrors = 0;
let errors = 0;
let accuracy = 0;
let lettersTyped = 0;
let wordString = "";
let timer = null;


// add 100 random words to array
function updateWords() {
    if (wordArray.length < 100) {
        for (let n = 0; n < 100; n++) {
            wordArray.push(randomWord())
        }
    } else if (wordArray.length >= 100) {
        console.log('worked')
    }
    // Split word array
    wordString = wordArray.join(" ");
    document.getElementById("words").innerHTML = wordString
}


// turn typed text into array, split into letters, compare to random word array split into letters
function matchText() {
    currentInput = inputArea.value;
    currentInputArray = currentInput.split('');
    // compare split input and word arrays together and change colour of text depending if correct or not
    
}

function updateTimer() {

}

function endGame() {

}

function startGame() {
    updateWords()
}

function reset() {

}