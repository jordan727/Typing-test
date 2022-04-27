// array of random words
// user types out words in a certain time period
// calculate wpm
// https://www.geeksforgeeks.org/design-a-typing-speed-test-game-using-javascript/
//Show only a certain number of random words, generate new line of random words after line finishes
// Random words used
let wordArray = [];

let timeLimit = 60;


let inputArea = document.getElementById("inputarea");


let timeLeft = timeLimit;
let timeElapsed = 0;
let totalErrors = 0;
let errors = 0;
let accuracy = 0;
let characterTyped = 0;
let currentWords = "";
let x = 0;
let timer = null;

updateWords()
// add 100 random words to array
function updateWords() {
    for (let n = 0; n < 100; n++) {
        wordArray.push(randomWord())
    }
// Split array, allows change colour of each letter when typed
    wordArray.split('').forEach(char => {
        const charSpan = document.createElement('span')
        charSpan.innerText = char
    })
}

// Display words as string
currentWords = wordArray.join(" ");
document.getElementById("words").innerHTML = currentWords

// document.addEventListener("input", wordChangeListener())

// function wordChangeListener() {
//     console.log("worked");
// }

// turn typed text into array, split into letters, compare to random word array split into letters
function checkCurrentText() {
    currentInput = inputArea.value;
    currentInputArray = currentInput.split('');
}

function startGame() {

}
// try using charAt() or includes()

// word.onkeyup = wordCheck()

// function wordCheck() {
//     let wordTyped = document.getElementById("typebox").value
//     if (wordTyped == wordArray[0]){
//         return "correct"
//     }
// }