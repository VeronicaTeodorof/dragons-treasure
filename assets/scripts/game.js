/*jslint browser */
/*global bootstrap */
document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit");
    const computerCode = generateCode();
    const myForm = document.querySelector("form");
    const triesLeft = document.querySelector(".tries-left");
    const darkOverlay = document.querySelector(".dark-overlay");
    const fieldset = document.querySelector("fieldset");
    // Array.from() converts the NodeList into an array
    // array needed to apply find method in moveFocus
    const inputBoxes = Array.from(document.querySelectorAll(".input"));
    const disappear = document.querySelector(".disappear");
    const footer = document.querySelector("footer");
    const loseModal = new bootstrap.Modal("#loseModal");
    const reviewLose = document.getElementById("review-lose");
    const winModal = new bootstrap.Modal("#winModal");
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

    // Sets cursor for the user to type first input on large screens only
    function cursorLargeScreens() {
        if (window.innerWidth > 1024) {
            cursorReady();
        }
    }

    // Moves focus to the next empty input field after one digit has been inserted
    function moveFocus() {
        inputBoxes.forEach(function (ignore, i) {
            inputBoxes[i].addEventListener("input", function (event) {
                if (event.inputType !== "deleteContentBackward") {
                    if (i < inputBoxes.length - 1) {
                        // Refactored with Claude AI to meet UX expectations
                        // find returns the first element meeting the condition
                        // box is the callback parameter representing each input box
                        // arrow function used as the condition for find
                        // ?. optional chaining guards against undefined if all boxes filled
                        const nextEmpty = inputBoxes.find(box => box.value === "" && box !== inputBoxes[i]);
                        nextEmpty?.focus();
                    }
                }
            });
        });
    }

    moveFocus();

    // Generates a 4 digit random code
    function generateCode() {
        const digit1 = generateDigit();
        const digit2 = generateDigit();
        const digit3 = generateDigit();
        const digit4 = generateDigit();
        const code = [digit1, digit2, digit3, digit4];
        return code;
    }

    // Generates a random digit
    function generateDigit() {
        let digit = Math.floor(Math.random() * 10);
        return digit;
    }

    // Prevents page from refreshing when form is submitted
    function handleSubmit(e) {
        e.preventDefault();
        processData();
    }

    function processData() {
        // Retrieve values entered by player
        const input1 = parseInt(myForm.input1.value);
        const input2 = parseInt(myForm.input2.value);
        const input3 = parseInt(myForm.input3.value);
        const input4 = parseInt(myForm.input4.value);
        const guessCode = [input1, input2, input3, input4];
        // Writes guessCode in feedback area
        const spanGuess = document.querySelector(".guess-span");
        spanGuess.innerText = `${input1} ${input2} ${input3} ${input4}`;
        // Removes class from the filled span so that next one is then selected
        spanGuess.classList.remove("guess-span");
        count -= 1;
        countTries(count);
        checkAnswer(guessCode);
        // Empties inputs without refreshing the page
        myForm.reset();
    }

    // Displays tries left in the play area
    function countTries(count) {
        if (count === 1) {
            triesLeft.innerText = "1 try left";
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
        let k;
        let j;
        let index;

        // Code to find numCorrect
        for (k = 0; k < guessCode.length; k += 1) {
            if (guessCode[k] === computerCode[k]) {
                numCorrect += 1;
            } else {
                // The goal of the two lines below is to create two new arrays
                // where the matching pairs of correct digits have been removed
                // from the original computerCode and guessCode.
                // This is achieved by pushing digits that didn't meet the above
                // criterion into new arrays, rather than removing them from the
                // initial arrays. This way the initial arrays are not changed,
                // as they would have been with the splice() method.
                splicedGuessCode.push(guessCode[k]);
                splicedComputerCode.push(computerCode[k]);
            }
        }

        // Code to calculate numbers incorrectly placed and numbers incorrect
        for (j = 0; j < splicedGuessCode.length; j += 1) {
            if (splicedComputerCode.includes(splicedGuessCode[j])) {
                numIncorrectlyPlaced += 1;
                // Gives the first index of the incorrectly placed digit
                index = splicedComputerCode.indexOf(splicedGuessCode[j]);
                // Remove the matching pair of incorrectly placed digits
                // from the spots where they each appear first
                splicedComputerCode.splice(index, 1);
                splicedGuessCode.splice(j, 1);
                // When one element is removed, the index of the following
                // element decreases by 1, so indexing has to be adjusted
                j -= 1;
            } else {
                numIncorrect += 1;
            }
        }

        const correctedAnswer = [
            numCorrect,
            numIncorrectlyPlaced,
            numIncorrect
        ];
        giveFeedback(correctedAnswer);
        winLose(correctedAnswer, count);
    }

    function giveFeedback(correctedAnswer) {
        const redDot = "🔴 ";
        const whiteDot = "⚪ ";
        const redX = "❌ ";
        const feedback = document.querySelector(".feedback-span");
        // Writes feedback in feedback area
        feedback.innerText = (
            correctedAnswer[0] + " x " + whiteDot + " " +
            correctedAnswer[1] + " x " + redDot);
        // Removes class from occupied feedback span so the next is selected
        feedback.classList.remove("feedback-span");
    }

    // Controls the events in winning and losing situations
    function winLose(correctedAnswer, count) {
        if (correctedAnswer[0] === 4) {
            const winDelay = 3000;
            // Makes main and footer fade out when game is won
            disappear.classList.add("fade-out");
            footer.classList.add("fade-out", "pointers-disabled");
            // Displays winning modal when animation finishes
            delayModal(winModal, winDelay);
            disableForm();
        } else if (correctedAnswer[0] !== 4 && count === 0) {
            const loseDelay = 9500;
            // Starts the animation for the losing event
            darkOverlay.classList.remove("removed");
            // Displays losing modal when losing animation finishes
            delayModal(loseModal, loseDelay);
            disableForm();
        }
    }

    // Disables input fields and pointer actions on inputs and submit button
    function disableForm() {
        fieldset.setAttribute("disabled", "");
        fieldset.classList.add(".pointers-disabled");
        submitButton.classList.add(".pointers-disabled");
    }

    function delayModal(modal, delay) {
        setTimeout(function () {
            modal.show();
        }, delay);
    }

    // Controls common actions in win and lose situations:
    // removes the form
    // displays computerCode on game.html page so that it can be reviewed
    // displays play again button and enables pointer actions
    function reviewScreen() {
        const playAgain = document.getElementById("play-again-button");
        myForm.classList.add("removed");
        triesLeft.innerText = (
            "Key: " +
            computerCode[0] +
            computerCode[1] +
            computerCode[2] +
            computerCode[3]
        );
        playAgain.classList.remove("removed");
        playAgain.classList.remove("pointers-disabled");
    }

    // Controls actions specific to losing situation
    function reviewScreenLose() {
        loseModal.hide();
        reviewScreen(loseModal);
        // Makes animation screen disappear to reveal feedback and review screen
        darkOverlay.classList.add("removed");
    }

    // Controls actions specific to winning situation
    function reviewScreenWin() {
        winModal.hide();
        reviewScreen(winModal);
        // Removes animation class, restores opacity and enables pointer actions
        disappear.classList.remove("fade-out");
        disappear.style.opacity = "1";
        footer.classList.remove("fade-out");
        footer.style.opacity = "1";
        footer.classList.remove("pointers-disabled");
        footer.classList.add(".pointers-active");
    }

    // Reveals review screen when review button is clicked
    reviewWin.addEventListener("click", reviewScreenWin);
    reviewLose.addEventListener("click", reviewScreenLose);
    myForm.addEventListener("submit", handleSubmit);
});