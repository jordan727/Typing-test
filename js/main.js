// array of random words
// user types out words in a certain time period
// calculate wpm
// https://www.geeksforgeeks.org/design-a-typing-speed-test-game-using-javascript/
//Show only a certain number of random words, generate new line of random words after line finishes
// Random words used

let timeLimit = 30;

let wordText = document.querySelector("#words")

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

updateWords()
document.addEventListener("keydown", startGame)

function startGame() {
    reset()
    inputArea.focus()
}

// add 100 random words to array
function updateWords() {
    if (wordArray.length < 100) {
        for (let n = 0; n < 100; n++) {
            wordArray.push(randomWord())
        }
    } else if (wordArray.length >= 100) {
        console.log('worked')
    }

    // Word String
    wordString = wordArray.join(" ");
    wordString.split('').forEach(char => {
        const charSpan = document.createElement('span')
        charSpan.innerText = char
        wordText.appendChild(charSpan)
    })
    document.getElementById("words").innerHTML = wordString

    // Split word Array
    splitWordArray = wordString.split('')
}

// turn typed text into array, split into letters, compare to random word array split into letters
function matchText() {
    currentInput = inputArea.value;
    currentInputArray = currentInput.split('');

    n = currentInputArray.length - 1;

    wordSpanArray = wordText.querySelectorAll('span');
    wordSpanArray.forEach((char, index) => {
        let typedChar = currentInputArray[index]
        if (currentInputArray[n] == splitWordArray[n]) {
            console.log('nice');
            char.classList.add('correct_char');
            char.classList.remove('incorrect_char');
        } else {
            console.log('not nice');
            char.classList.add('incorrect_char');
            char.classList.remove('correct_char');
        }
    
    })
    // compare split input and word arrays together and change colour of text depending if correct or not
    
    // if (typedChar == null) {
    //     char.classList.remove('correct_char');
    //     char.classList.remove('incorrect_char');
   
        // correct character
    //   } else if (typedChar === char.innerText) {
    //     char.classList.add('correct_char');
    //     char.classList.remove('incorrect_char');
   
        // incorrect character
    //   } else {
    //     char.classList.add('incorrect_char');
    //     char.classList.remove('correct_char');
   
    //     // increment number of errors
    //     errors++;
    //   }
}

function updateTimer() {

}

function endGame() {
}

function reset() {

}