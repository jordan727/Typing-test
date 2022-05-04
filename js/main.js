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
let timeLimit = 30;

let wordText = document.querySelector("#words")

let inputArea = document.getElementById("inputarea");

let wordArray = [];
let timeLeft = timeLimit;
let timeElapsed = 0;
let totalErrors = 0;
let errors = 0;
let accuracy = 0;
let wordString = "";
let timer = null;
let misstyped = ""

updateWords()
document.addEventListener("keydown", startGame)

function startGame() {
    reset()
    inputArea.focus()
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
    wordString.split('').forEach(char => {
        const charSpan = document.createElement('span')
        charSpan.innerText = char
        wordText.appendChild(charSpan)
    })

}

// turn typed text into array, split into letters, compare to random word array split into letters
function matchText() {
    currentInput = inputArea.value;
    currentInputArray = currentInput.split('');

    wordSpanArray = wordText.querySelectorAll('span');
    wordSpanArray.forEach((char, index) => {
        let typedChar = currentInputArray[index]

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
            if (char.innerText === " ") {
                misstyped = typedChar;
                const missType = document.createElement('p')
                missType.innerHTML = misstyped
                wordText.appendChild(missType) 

            }
          }
    
    })

}

function updateTimer() {

}

function endGame() {
}

function reset() {

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