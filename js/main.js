// Typing Speed Test by Jordan Antonio

// HTML Elements
let timerText = document.querySelector("#currTime");
let wordText = document.querySelector("#words");
let inputArea = document.getElementById("inputarea");
let pauseText = document.querySelector("#gamepause");
let restartBtn = document.getElementById("restartBtn")
let WPMstat = document.getElementById("WPM");
let ACCstat = document.getElementById("accuracy");

// Global Variables
let timeLimit = 30;
let errors = 0;
let wordArray = [];
let timeLeft = timeLimit;
let accuracy = 0;
let wordString = "";
let charactersTyped = 0;
let timer = null;
let pauseTimer = null;
let delayTimer = null;
let gameStarted = false;
let gamePaused = false;

// EVENT LISTENERS
document.addEventListener("keydown", focusInput);
restartBtn.addEventListener("click", retry)

// Start Game
function startGame() {
    reset()
    generateRandomWords();
    splitWordString();
    restartBtn.classList.remove('hidden');
    timerText.innerHTML = timeLimit + "s"
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
    setTimeout(readOnlyDelay, 10);
    pauseTimer = setTimeout(pause, 2000);
    gameStarted = true;
}

// End Game
function endGame() {
    inputArea.setAttribute('readonly', true);
    clearInterval(timer);
    let WPM = Math.round(((charactersTyped / 5) / (timeLimit / 60)));
    console.log(WPM);
    let accuracy = Math.round(((charactersTyped - errors) / charactersTyped) * 100);
    console.log(errors)
    console.log(accuracy + "%");
    gameStarted = false;

    WPMstat.innerHTML = WPM + " WPM";
    WPMstat.classList.remove('hidden');
    ACCstat.innerHTML = accuracy + "%";
    ACCstat.classList.remove('hidden');
    timerText.classList.add('blur');
    wordText.classList.add('blur');

}

// Update the visible timer
function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timerText.textContent = timeLeft + "s";
    }   else if (timeLeft <= 0) {
        endGame();
    }
}

// Reset all variables, timers and classes to original state
function reset() {
    inputArea.disabled = false;
    timerText.innerHTML = ""
    wordText.innerHTML = ""
    inputArea.value = ""
    clearTimeout(pauseTimer);
    clearInterval(timer);
    timeLimit = 30;
    wordArray = [];
    timeLeft = timeLimit;
    errors = 0;
    accuracy = 0;
    wordString = "";
    timer = null;
    delayTimer = null;
    pauseTimer = null;
    charactersTyped = 0;
    gamePaused = false;
    gameStarted = false;
    WPMstat.classList.add('hidden');
    ACCstat.classList.add('hidden');
    wordText.classList.remove('blur');
    timerText.classList.remove('blur');
    pauseText.classList.add('hidden');
    }

// Restart Game
function retry() {
    gameStarted = false;
    reset()
    wordText.innerHTML = "Press any key to start"
    restartBtn.blur();
    inputArea.setAttribute('readonly', true);
    restartBtn.classList.add('hidden');
}

// Pause Game
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

// Resume Game
function resume() {
    if (gameStarted === true && gamePaused === true) {
        timer = setInterval(updateTimer, 1000);
        setTimeout(readOnlyDelay, 10);
        wordText.classList.remove('blur');
        timerText.classList.remove('blur');
        pauseText.classList.add('hidden');
        gamePaused = false;
    }
}

// Delay Input Area read only
function readOnlyDelay() {
    inputArea.removeAttribute('readonly');
}

// When Inputarea is hovered, check if a word string is present and either start game or resume game
function typing() {
    if (wordString == "") {
        startGame();
    } else {
        resume();
    }
}

// Focus the input area
function focusInput() {
    inputArea.focus();
}