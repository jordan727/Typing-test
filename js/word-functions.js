// Functions that work with words

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
    currentInputArray = currentInput.split('');
    wordSpanArray = wordText.querySelectorAll('span');
    wordSpanArray.forEach((char, index) => {
        let typedChar = currentInputArray[index]
        // try concat() Split array if misstyped on a space, insert all misstyped letters in between the split arrays and display it
        // Change classes of random words depending on if there is words typed, if the word typed is correct or incorrect
        updateColours(typedChar, char)
    })
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
        errors++;
      }
}

function moveWords() {
    
}