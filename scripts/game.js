document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submit");
    const computerCode = generateCode();
    let myForm = document.querySelector("form");
    const triesLeft = document.querySelector(".tries-left");
    const darkOverlay = document.querySelector(".dark-overlay");
    const fieldset = document.querySelector("fieldset");
    const inputBoxes = document.querySelectorAll(".input");
    const disappear = document.querySelector(".disappear");
    const footer = document.querySelector("footer");
    const loseModal = new bootstrap.Modal('#loseModal');
    const reviewLose = document.getElementById("review-lose");
    const winModal = new bootstrap.Modal('#winModal');
    const reviewWin = document.getElementById("review-win");
    let count = 10;

    //cursor is set on the first input after submit event on all screen sizes
    submitButton.addEventListener("click", cursorReady);
    //cursor is set on the first input when page loads only on large screens
    cursorLargeScreens();

    // Sets the cursor ready for the user to type the first input
    function cursorReady() {
        document.getElementById("input1").focus();
    }
    
    // Sets the cursor ready for the user to type the first input on large screens only
    function cursorLargeScreens() {
        if(window.innerWidth > 1024) {
            cursorReady();
        }
    }

    // Moves focus to the next input field after one digit has been inserted
    function moveFocus() {
        inputBoxes.forEach((inputBox, i) => {
            inputBoxes[i].addEventListener("input", (event) => {
                if (event.inputType !== "deleteContentBackward") {
                    if (i < inputBoxes.length - 1) {
                        inputBoxes[i+1].focus();
                    }    
                }
                
            });
        });
    }

    moveFocus();

    // Generates a 4 digit random code:
    function generateCode() {
    
        let digit1 = generateDigit();
        let digit2 = generateDigit();
        let digit3 = generateDigit();
        let digit4 = generateDigit();

        const computerCode = [digit1, digit2, digit3, digit4];
        console.log(computerCode);
        return computerCode;
    };


    // Generates a random digit
    function generateDigit() {
        let digit = Math.floor(Math.random() * 10);
        return digit;
    }
    
    // Prevents page from refreshing when form is submitted
    function handleSubmit(e) {
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
        // Empties inputs without refreshing the page
        myForm.reset(); 
        
    }

    // Displays tries left in the play area
    function countTries(count) {
        if(count === 1) {
            triesLeft.innerText = "1 try left"
        } else {
            triesLeft.innerHTML = `${count} tries left`;
        }
    }

    function checkAnswer(guessCode) {
        let numCorrect = 0;
        let numIncorrectlyPlaced = 0;
        let numIncorrect = 0;
        let splicedGuessCode = [];
        let splicedComputerCode = [];
       
        //Code to find numCorrect
        for(let k = 0; k < guessCode.length; k++) {
            if(guessCode[k] === computerCode[k]) {
                numCorrect++;
            } else {
                // The goal of the two lines of code below is to create two new arrays where the matching pairs of correct digits have 
                // been removed from the original computerCode and guessCode; 
                // this is achieved in a counterintuitive way, by pushing digits that didn't meet the above criterium
                // into new arrays, rather than removing them from initial arrays.
                // This way the initial arrays are not changed as they would have been with using spliced() method.
                splicedGuessCode.push(guessCode[k]); 
                splicedComputerCode.push(computerCode[k]);
            }
        }

        //  Code to calculate numbers incorrectly placed and numbers incorrect
        for(let j = 0; j < splicedGuessCode.length; j++) {
            if(splicedComputerCode.includes(splicedGuessCode[j])) {
                numIncorrectlyPlaced++;
                // Gives the first index where the incorrectly placed digit appears
                let index = splicedComputerCode.indexOf(splicedGuessCode[j]); 
                // Remove the matching pair of incorrectly placed digits from the spots where they each appear first
                splicedComputerCode.splice(index, 1);
                splicedGuessCode.splice(j, 1);
                // When one element is removed, the index of the following element decreases by 1, so indexing has to be adjusted
                j--;
            } else {
                numIncorrect++;
            }
        }
        
        let correctedAnswer = [numCorrect, numIncorrectlyPlaced, numIncorrect];

        giveFeedback(correctedAnswer);
        winLose(correctedAnswer, count);
        
    }

    function giveFeedback(correctedAnswer) {
        const redDot = "🔴 ";
        const whiteDot = "⚪ ";
        const redX = "❌ ";
        const feedback = document.querySelector(".feedback-span");
        // Writes feedback in feedback area
        feedback.innerText = `${whiteDot.repeat(correctedAnswer[0])} ${redDot.repeat(correctedAnswer[1])} ${redX.repeat(correctedAnswer[2])}`;
        // Removes respective class from the already occupied feedback span, so that the next one can be selected and filled.
        feedback.classList.remove("feedback-span");
    }
    
    // Controls the events in winning and loosing situations
    function winLose(correctedAnswer, count) {
        if(correctedAnswer[0] === 4) {
            const winDelay = 3000;
            // Makes main and footer fade out when game is won
            disappear.classList.add("fade-out");
            footer.classList.add("fade-out", "pointers-disabled");
            // Displays winnig modal when animation finishes
            delayModal(winModal, winDelay);
            disableForm();
        } else if(correctedAnswer[0] !== 4 && count === 0) {
            const loseDelay = 9500;
            // Starts the animation for the loosing event
            darkOverlay.classList.remove("removed");
            // Displays losing modal when losing animation finishes
            delayModal(loseModal, loseDelay);
            disableForm();
        }
        
    }

    // Disables input fields so they can't take any input and any pointers actions on inputs and submit button
    function disableForm() {
        fieldset.setAttribute("disabled", "");
        fieldset.classList.add(".pointers-disabled");
        submitButton.classList.add(".pointers-disabled");
        
    }

    function delayModal(modal, delay) {
        setTimeout(() => modal.show(), delay);
    }

    // Controls common actions in win and lose situations:
    // removes the form
    // displays computerCode on game.html page so that it can be reviewed
    // displays play again button and enables pointers actions
    function reviewScreen() {
        const playAgain = document.getElementById("play-again-button");

        myForm.classList.add("removed");
        triesLeft.innerText = `Key: ${computerCode[0]}${computerCode[1]}${computerCode[2]}${computerCode[3]}`;
        playAgain.classList.remove("removed");
        playAgain.classList.remove("pointers-disabled");
    }

    // Controls actions specific to losing situation
    function reviewScreenLose() {
        loseModal.hide();
        reviewScreen(loseModal);
        // Makes animation screen disappear to reveal the feedback and review screen;
        darkOverlay.classList.add("removed");
    }

    // Controls actions specific to winning situation
    function reviewScreenWin() {
        winModal.hide();
        reviewScreen(winModal);
        // Removes the class that enables animation, returns opacity and enables pointers actions
        disappear.classList.remove("fade-out");
        disappear.style.opacity = "1";
        footer.classList.remove("fade-out");
        footer.style.opacity ="1";
        footer.classList.remove("pointers-disabled")
        footer.classList.add(".pointers-active");
    }
    
    // Reveals review screen when review button is clicked
    reviewWin.addEventListener("click", reviewScreenWin);
    reviewLose.addEventListener("click", reviewScreenLose);
    myForm.addEventListener("submit", handleSubmit);
    
});
