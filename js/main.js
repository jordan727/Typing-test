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
let wordText = document.querySelector("#words");
let inputArea = document.getElementById("inputarea");
let pauseText = document.querySelector("#gamepause");
let restartBtn = document.getElementById("restartBtn")

let timeLimit = 30;
let errors = 0;
let spanWidth = []
let wordArray = [];
let timeLeft = timeLimit;
let accuracy = 0;
let wordString = "";
let timer = null;
let charactersTyped = 0;
let pauseTimer = null;
let gameStarted = false;
let gamePaused = false;

// EVENT LISTENERS
document.addEventListener("keydown", focusInput);
// try adding perameters
document.addEventListener("focusout", delayer);
restartBtn.addEventListener("click", retry)

function typing() {
    if (wordString == "") {
        startGame();
    } else {
        resume();
    }
}

function startGame() {
    reset()
    generateRandomWords();
    splitWordString();
    timerText.innerHTML = timeLimit + "s"
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
    setTimeout(readOnlyTemp, 10);
    pauseTimer = setTimeout(pause, 2000);
    gameStarted = true;
}

function endGame() {
    inputArea.setAttribute('readonly', true);
    clearInterval(timer);
    // console.log("game fiished");
    let WPM = Math.round(((charactersTyped / 5) / (timeLimit / 60)));
    console.log(WPM);
    let accuracy = (Math.round((charactersTyped - errors) / charactersTyped)) * 100;
    console.log(accuracy + "%");
    gameStarted = false;


    let WPMstat = document.getElementById("WPM");
    let ACCstat = document.getElementById("accuracy");


    WPMstat.innerHTML = WPM + " WPM";
    WPMstat.classList.remove('hidden');
    ACCstat.innerHTML = accuracy + "%";
    ACCstat.classList.remove('hidden');

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
    timerText.innerHTML = ""
    wordText.innerHTML = ""
    inputArea.value = ""

    timeLimit = 30;
    wordArray = [];
    timeLeft = timeLimit;
    errors = 0;
    accuracy = 0;
    wordString = "";
    timer = null;
    pauseTimer = null;
    charactersTyped = 0;
    gamePaused = false;
    gameStarted = false;
    wordText.classList.remove('blur');
    timerText.classList.remove('blur');
    pauseText.classList.add('hidden');

    }

function retry() {
    gameStarted = false;
    reset()
    wordText.innerHTML = "Press any key to start"
}

function pause() {
    if (gameStarted === true) {
        clearInterval(timer);
        inputArea.setAttribute('readonly', true);
        timerText.classList.add('blur');
        wordText.classList.add('blur');
        pauseText.classList.remove('hidden');
        gamePaused = true
        inputArea.blur();
    }
}

function resume() {
    if (gameStarted === true && gamePaused === true) {
        timer = setInterval(updateTimer, 1000);
        setTimeout(readOnlyTemp, 10);
        wordText.classList.remove('blur');
        timerText.classList.remove('blur');
        pauseText.classList.add('hidden');
        gamePaused = false;
    }
}


// Change name of function
function readOnlyTemp() {
    inputArea.removeAttribute('readonly');
}


function focusInput() {
    inputArea.focus();
}

// Add perameteres
function delayer() {
    setTimeout(pause, 100);
}