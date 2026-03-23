document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submit");
    let computerCode = generateCode();
    let myForm = document.querySelector("form");
    let triesLeft = document.querySelector(".tries-left");
    let darkOverlay = document.querySelector(".dark-overlay");
    const fieldset = document.querySelector("fieldset");
    const inputBoxes = document.querySelectorAll(".input");
    const disappear = document.querySelector(".disappear");
    const footer = document.querySelector("footer");
    const loseDiv = document.querySelector(".lose-events-wrapper");
    console.log(darkOverlay);
    let count = 10;

    

    cursorReady();

    submitButton.addEventListener("click", cursorReady);


    // Sets the cursor ready for the user to type the first input
    function cursorReady() {
        document.getElementById("input1").focus();
    }

    // Moves focus to the next input field after one digit has been inserted
    function moveFocus() {
       for(let i=0; i<inputBoxes.length-1; i++) {
            inputBoxes[i].addEventListener("input", (event) => {
                if (event.inputType !== "deleteContentBackward") {
                    inputBoxes[i+1].focus();
                } 
            });
        }
    }

    moveFocus();

    // Generates a 4 digit random code:
    function generateCode() {
    
        let digit1 = generateDigit();
        let digit2 = generateDigit();
        let digit3 = generateDigit();
        let digit4 = generateDigit();

        let computerCode = [digit1, digit2, digit3, digit4];
        console.log(computerCode);
        return computerCode;
    };


    // Generates a random digit
    function generateDigit() {
        let digit = Math.floor(Math.random() * 10);
        return digit;
    }
    
    function showData(e) {
        e.preventDefault();
        myForm = e.target;
        processData();
    }

    function processData() {
        // Retrieve values entered by player
        let input1 = parseInt(myForm.input1.value);
        let input2 = parseInt(myForm.input2.value);
        let input3 = parseInt(myForm.input3.value);
        let input4 = parseInt(myForm.input4.value);
        let guessCode = [input1, input2, input3, input4];
        // Writes guessCode in feedback area
        let spanGuess = document.querySelector(".guess-span");
        spanGuess.innerText = `${input1} ${input2} ${input3} ${input4}`;  
        // Removes guess-span class from the filled span, so that the next span is then selected
        spanGuess.classList.remove("guess-span");
        count--;
        countTries(count);
        checkAnswer(guessCode);
        
        console.log(count)
        myForm.reset(); 
        
    }

    function countTries(count) {
        if(count === 1) {
            triesLeft.innerText = "1 try left"
        } else {
            triesLeft.innerHTML = `${count} tries left`;
        }
    }

    function checkAnswer(guessCode) {
        console.log(guessCode);
        // do whatever you need here
        let numCorrect = 0;
        let numIncorrectlyPlaced = 0;
        let numIncorrect = 0;
        let splicedGuessCode = [];
        let splicedComputerCode = [];
       

        //Code to find numCorrect
        for(let k = 0; k < guessCode.length; k++) {
            if(guessCode[k] === computerCode[k]) {
                numCorrect++;
                // if(numCorrect === 4) { 
                    // code used to trigger bs modal from JS written with help from: https://www.youtube.com/watch?v=tyxchSojW48
                    // const winModal = new bootstrap.Modal('#winModal');
                    // winModal.show(); 
                // }
            } else {
                splicedGuessCode.push(guessCode[k]); 
                // Creates a copy of computerCode with digits correctly guessed removed;
                splicedComputerCode.push(computerCode[k]);
            }
        }

        //  Code to calculate numbers incorrectly placed and numbers incorrect
        for(let j = 0; j < splicedGuessCode.length; j++) {
            if(splicedComputerCode.includes(splicedGuessCode[j])) {
                numIncorrectlyPlaced++;

                let index = splicedComputerCode.indexOf(splicedGuessCode[j]); 
                splicedComputerCode.splice(index, 1);
                splicedGuessCode.splice(j, 1);
                j--; // When one element is removed, the index of the following element decreases by 1
            } else {
                numIncorrect++;
            }
        }
        
        let correctedAnswer = [numCorrect, numIncorrectlyPlaced, numIncorrect];
        console.log(correctedAnswer);

        giveFeedback(correctedAnswer);
        winLose(correctedAnswer, count);
        
    }

    function giveFeedback(correctedAnswer) {
    
        let redDot = "🔴 ";
        let whiteDot = "⚪ ";
        let redX = "❌ ";
        let feedback = document.querySelector(".feedback-span");
        feedback.innerText = `${whiteDot.repeat(correctedAnswer[0])} ${redDot.repeat(correctedAnswer[1])} ${redX.repeat(correctedAnswer[2])}`;
        feedback.classList.remove("feedback-span");
    }

    function winLose(correctedAnswer, count) {
        if(correctedAnswer[0] === 4) {
            disappear.classList.add("fade-out", "pointers-disabled");
            footer.classList.add("fade-out", "pointers-disabled");
            disableForm();
        } else if(correctedAnswer[0] !== 4 && count === 0) {
            darkOverlay.classList.remove("removed");
            disableForm();
        }
        
    }

    function disableForm() {
        fieldset.setAttribute("disabled", "");
        submitButton.classList.add(".pointers-disabled");
        
    }

    myForm.addEventListener("submit", showData);
    
});
