// Typing Test

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
let errors = 0;
let accuracy = 0;
let wordString = "";
let timer = null;
let charactersTyped = 0;

// EVENT LISTENERS
document.addEventListener("keydown", focus);
document.addEventListener("focusout", pause)

function typing() {
    if (wordString == "") {
        startGame()
    } else {
        resume()
    }
}

function startGame() {
    reset()
    generateRandomWords()
    splitWordString()
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000)
    setTimeout(readOnlyTemp, 10)
}

function endGame() {
    inputArea.setAttribute('readonly', true);
    clearInterval(timer);
    console.log("game fiished");
    let WPM = Math.round(((charactersTyped / 5) / (timeLimit / 60)));
    console.log(WPM);
    let accuracy = Math.round((charactersTyped - errors) / charactersTyped);
    console.log(accuracy * 100 + "%");
}

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timerText.textContent = timeLeft + "s";
    }   else if (timeLeft <= 0) {
        endGame();
    }
}

function reset() {
    inputArea.disabled = false;
    timerText.innerHTML = timeLimit + "s"
    wordText.innerHTML = ""
    inputArea.value = ""

    timeLimit = 30;
    wordArray = [];
    timeLeft = timeLimit;
    errors = 0;
    accuracy = 0;
    wordString = "";
    timer = null;
    charactersTyped = 0;
    }

function pause() {
    clearInterval(timer);
    inputArea.setAttribute('readonly', true);
    timerText.classList.add('blur');
    wordText.classList.add('blur');
}

function resume() {
    timer = setInterval(updateTimer, 1000);
    setTimeout(readOnlyTemp, 10)
    wordText.classList.remove('blur');
    timerText.classList.remove('blur');
}


// Change name of function
function readOnlyTemp() {
    inputArea.removeAttribute('readonly');
}


function focus() {
    inputArea.focus()
}