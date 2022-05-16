// Functions that work with creating, comparing and styling words
// Generate 100 Random Words
function generateRandomWords() {
    wordText.textContent = null;
    if (wordArray.length < 100) {
        for (let n = 0; n < 100; n++) {
            wordArray.push(randomWord())
        }
    } 
}

// Split word string by letters
function splitWordString() {
    // Split words for css
    wordString = wordArray.join(" ");
    // Split word string into individual letters and seperate them into span elements
    wordString.split('').forEach(char => {
        const charSpan = document.createElement('span')
        charSpan.innerText = char
        wordText.appendChild(charSpan)
    })
}

// Split input by letters
function splitInput() {
    currentInput = inputArea.value;
    charactersTyped++
    clearTimeout(pauseTimer);
    pauseTimer = setTimeout(pause, 3000);
    errors = 0
    currentInputArray = currentInput.split('');
    wordSpanArray = wordText.querySelectorAll('span');
    wordSpanArray.forEach((char, index) => {
        let typedChar = currentInputArray[index]
        updateColours(typedChar, char)
    })
    // if (currentInputArray == wordArray) {
    //     wordArray = []
    //     generateRandomWords()
    // }
}

function updateColours(typedChar, char) {
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
        errors++
      }
}