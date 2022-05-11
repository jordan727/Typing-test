// array of random words
// user types out words in a certain time period
// calculate wpm
// https://www.geeksforgeeks.org/design-a-typing-speed-test-game-using-javascript/ (color typing stuff)
//Show only a certain number of random words, generate new line of random words after line finishes
// Random words used
// Add line that shows where you are typing
// Spaces go to next word
// backspace does not work if you correctly typed the word
// When mistyping text on spaces show extra letters that user typed
// underline mistyped words
// When line is typed display next line
// Only show 3 - 4 lines at a time getClientRects()
let timerText = document.querySelector("#currTime");
let wordText = document.querySelector("#words")
let inputArea = document.getElementById("inputarea");
let timeLimit = 30;
let wordArray = [];
let timeLeft = timeLimit;
let totalErrors = 0;
let errors = 0;
let accuracy = 0;
let wordString = "";
let timer = null;
let misstyped = []
let wordsTyped = 0;
let charactersTyped = 0;
let correctChars = 0;

updateWords()
document.addEventListener("keydown", focus);

function focus() {
    inputArea.focus()
}

function startGame() {
    reset()

    clearInterval(timer);
    timer = setInterval(updateTimer, 1000)
    console.log("game started")
}


// add 100 random words to array
function updateWords() {
    wordText.textContent = null;
    if (wordArray.length < 100) {
        for (let n = 0; n < 100; n++) {
            wordArray.push(randomWord())
        }
    } 
    
    // else if (wordArray.length >= 100) {
    //     console.log('worked') 
    // }

    // Split words for css
    wordString = wordArray.join(" ");
    // Split word string into individual letters and seperate them into span elements
    wordString.split('').forEach(char => {
        const charSpan = document.createElement('span')
        charSpan.innerText = char
        wordText.appendChild(charSpan)
    })

}

// turn typed text into array, split into letters, compare to random word array split into letters
function matchText() {
    // try includes()
    currentInput = inputArea.value;
    currentInputArray = currentInput.split('');
    currentWordsTyped = currentInput.split(' ');
    charactersTyped++
    // correctChars = charactersTyped - errors
    // console.log(correctChars)
    errors = 0
    wordSpanArray = wordText.querySelectorAll('span');
    wordSpanArray.forEach((char, index) => {
        let typedChar = currentInputArray[index]
        // try concat() Split array if misstyped on a space, insert all misstyped letters in between the split arrays and display it
        // Change classes of random words depending on if there is words typed, if the word typed is correct or incorrect
        if (typedChar == null) {
            char.classList.remove('correct');
            char.classList.remove('incorrect');
       
            // correct character
          } else if (typedChar === char.innerText) {
            char.classList.add('correct');
            char.classList.remove('incorrect');
       
            // incorrect character
          }  else {
            char.classList.add('incorrect');
            char.classList.remove('correct');
            errors++;
          }
    })
}

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timerText.textContent = timeLeft + "s";
    }   else if (timeLeft <= 0) {
        endGame();
    }
}

function endGame() {
    clearInterval(timer);
    inputArea.disabled = true;
    console.log("game fiished");
    let WPM = Math.round(((charactersTyped / 5) / (timeLimit / 60)));
    console.log(WPM);
    let accuracy = Math.round((charactersTyped - errors) / charactersTyped);
    console.log(accuracy * 100 + "%");
}

function reset() {

}

// Helper Functions
// Generate 100 Random Words
function generateRandomWords() {

}

// Split word string by letters
function splitWordString() {

}

// Split input by letters
function splitInput() {

}








// function startStopwatch() {
//     if (stopTime === false) {
//         // Get date in milliseconds when stopwatch starts
//         begin = new Date();
//         stopwatchInterval = setInterval(updateStopwatch, 1);
//     }
// }

// // Update Stopwatch Time
// function updateStopwatch() {
//     // get date in milliseconds when stopwatch stops
//     end = new Date();
//     // subtract ending and beginning dates to get elapsed date
//     elapsed = end - begin;
// }

// function stopStopwatch() {
//     stopTime = true;
//     clearTimeout(stopwatchInterval);
// }