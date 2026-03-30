## UI Testing

### Navigation / Link Testing

| Test ID | Test | Expected Result | Pass/Fail |
| ------- | ---- | --------------- | --------- |
| NAV-01 | Navigating to a non-existent URL path | Custom 404 page is displayed | Pass |
| NAV-02 | Click Play button on home page | Navigates to game.html | Pass |
| NAV-03 | Click Home button (Home) on game page | Returns to index.html | Pass |
| NAV-04 | Click Home button on loss modal | Returns to index.html | Pass |
| NAV-05 | Click Home button on win modal | Returns to index.html | Pass |
| NAV-06 | Click Return home button on 404 page | Returns to index.html | Pass |
| NAV-07 | Click Play again button on loss modal | game.html reloads and new game starts | Pass |
| NAV-08 | Click Play again button on win modal | game.html reloads and new game starts | Pass |
| NAV-09 | Click Play again button on review screen | game.html reloads and new game starts | Pass |


### Modal Behaviour

| Test ID | Test | Expected Result | Pass/Fail |
| ------- | ---- | --------------- | --------- |
| UI-01 | Click dragon button on game page | The Story modal opens | Pass |
| UI-02 | Click ? button on game page | How to play modal opens | Pass |
| UI-03 | Close The Story modal (Click close button, X, backdrop, press Esc) on game page | Each action closes modal | Pass |
| UI-07 | Close How to Play modal (Click close button, X, backdrop, press Esc) on game page | Each action closes modal | Pass |
| UI-08 | Win modal - backdrop click does not close the modal | Modal doesn't close | Pass |
| UI-09 | Win modal - Esc key does not close modal | Modal doesn't close | Pass |
| UI-10 | Loss modal - backdrop click does not close the modal | Modal doesn't close | Pass |
| UI-11 | Loss modal - Esc key does not close modal | Modal doesn't close | Pass |

### Hover States of Buttons

| Test ID | Test | Expected Result | Pass/Fail |
| ------- | ---- | --------------- | --------- |
| UI-12 | Play (homepage), Play again (review screen), Return home (404 page) | Subtle change in text colour and cursor changes to pointer | Pass |
| UI-13 | Try button (gamepage) | Cursor changes to pointer | Pass |
| UI-14 | Dragon button, ? button, home button (gamepage) | Buttons scale and cursor changes to pointer | Pass |
| UI-15| All modal buttons | No background colour, text changes colour, cursor changes to pointer | Pass | 

### Input Focus Behaviour 

| Test ID | Test | Expected Result | Pass/Fail |
| ------- | ---- | --------------- | --------- |
| UI-16 | Mobile/tablet — no auto-focus on first input on load | No auto-focus on load | Pass |
| UI-17 | Desktop — auto-focus on first input on load | Auto-focus on load | Pass |
| UI-18 | All devices - focus returns on first input after submit | First input focused after submit | Pass |
| UI-19 | Focus moves to the next empty input | Focus moves to next empty input after a character is entered| Pass |

### Input Validation

| Test ID | Test | Expected Result | Pass/Fail |
| ------- | ---- | --------------- | --------- |
| UI-20 | Submission of guess containing empty field(s) | Does not submit, appropriate feedback is given | Pass |
| UI-21 | Submission of guess containing "e" via keyboard input and paste | Character is permitted as input, but does not submit, appropriate feedback is given | Pass |
| UI-22 | Submission of guess containing "-" or negative numbers via keyboard input and paste | Character is permitted as input, but does not submit, appropriate feedback is given | Pass |
| UI-23 | Submission of guess containing "." or decimal numbers via keyboard input and paste | Character is permitted as input, but does not submit, appropriate feedback is given | Pass |
| UI-24 | Submission of guess containing letters, special characters and spaces | Letters other than "e", special characters other than "-" and ".", and spaces are blocked | Pass |
| UI-25 | Submission of guess containing more than one digit numbers via keyboard input and paste | Permitted as input, but do not submit, appropriate feedback is given | Pass |

### Guess Submission and Feedback 

| Test ID | Test | Expected Result | Pass/Fail |
| ------- | ---- | --------------- | --------- |
| UI-26 | First valid guess | Submits successfully, guess and feedback are displayed in feedback area | Pass |
| UI-27 | 2nd - 9th valid guesses | Each submits successfully, guess and feedback are displayed in feedback area, all previous guesses remain visible and stacked | Pass |
| UI-28 | Cleared inputs after submission | Inputs are cleared after each submission, page is not reloaded | Pass |
| UI-29 | Correct guess (1st to 10th) | Submits successfully, win animation is triggered immediately | Pass |
| UI-30 | 10th incorrect guess | Submits successfully, lose animation is triggered immediately | Pass |
| UI-31 | Initial tries count | Displays 10 tries | Pass |
| UI-32 | Tries count after each submission | Decrements correctly after each submission | Pass |


### Game Over

| Test ID | Test | Expected Result | Pass/Fail |
| ------- | ---- | --------------- | --------- |
| UI-33 | Win animation | Overlay and image, feedback, form, tries count, and footer with buttons disappear, form and pointers are disabled on inputs and buttons, win modal appears at the end of the animation | Pass |
| UI-34 | Win modal | Win message and play again, review, and home buttons are displayed | Pass |
| UI-35 | Lose animation | Dark background fades in, image 1 appears and disappears, image 2 appears and disappears, lose modal appears at the end of the animation | Pass |
| UI-36 | Lose modal | Lose message and play again, review, and home buttons are displayed | Pass |
| UI-37 | Review | Modal disappears, board is revealed, play again button is revealed, key is revealed, footer with game buttons are revealed, pointers on buttons are active | Pass |

### Game Logic

| Test ID | Test | Expected Result | Pass/Fail |
| ------- | ---- | --------------- | --------- |
| GL-01 | All correct digits in correct positions (computerCode: 3,9,4,3, guessCode: 3,9,4,3) | 4 white dots, 0 red dots, win condition triggered | Pass |
| GL-02 | All incorrect digits (computerCode: 7,6,2,3 guessCode: 0,1,4,8) | 0 white dots, 0 red dots | Pass |
| GL-03 | All correct digits in wrong positions (computerCode: 7,6,2,3 guessCode: 6,3,7,2) | 0 white dots, 4 red dots | Pass |
| GL-04 | Mix of correct and incorrect digits (computerCode: 3,9,4,3, guessCode: 3,4,7,8) | 1 white dot and 1 red dot displayed | Pass |
| GL-05 | Repeated digit in guessCode, not in computerCode (computerCode 1,2,3,4, guessCode 1,1,2,3) | 1 white dot, 2 red dots | Pass |
| GL-06 | Repeated digit in computerCode, not in guessCode (computerCode 1,1,2,3, guessCode 1,2,3,4) | 1 white dot, 2 red dots | Pass |
| GL-07 | Guess with all identical digits (computerCode: 0,9,4,3, guessCode: 0,0,0,0) | 1 white dot, 0 red dots | Pass |


## Unit Testing

### Code Generation - generateCode()

| Test ID | Description | Expected Output | Actual Output | Pass/Fail |
| ------- | ---- | --------------- | --------- | ------- |
| UT-01 | generateCode() returns a 4 element array with digits 0-9 | Array of 4 digits e.g.[0,1,2,3] | [6,9,3,7] | Pass |

### Input Retrieval - processData()

| Test ID | Description | Expected Output | Actual Output | Pass/Fail |
| ------- | ---- | --------------- | --------- | ------- |
| UT-02 | processData() correctly retrieves inputs as guessCode array | Inputs are correctly retrieved and parsed as integers e.g. [1,2,3,4] | [1,2,3,4] | Pass |

### Algorithm checkAnswer()

| Test ID | Description | computerCode | guessCode | Expected Output | Actual Output | Pass/Fail |
| ------- | ---- | --------------- | --------- | ------- | ----- | ------- |
| UT-03 | Checks the number of correct digits in guessCode | [5,6,6,8] | [1,2,3,4] | numCorrect: 0 | numCorrect: 0 | Pass |
| UT-04 | Checks that all digits other than correctly guessed ones in guessCode are pushed into the splicedGuessCode | [8,9,7,5] | [8,1,2,3] | 1,2,3 | 1,2,3 | Pass |
| UT-05 | Checks that all digits other than correctly guessed ones in computerCode are pushed into the splicedComputerCode | [0,9,5,9] | [0,1,2,3] | 9,5,9 | 9,5,9| Pass |
| UT-06 | Checks the number of incorrectly placed digits in guessCode | [9,2,0,8] | [0,1,2,3] | numIncorrectlyPlaced: 2 | numIncorrectlyPlaced: 2 | Pass |
| UT-07 | Mix of correct, incorrectly placed, and incorrect digits | [0,5,0,1] | [0,1,2,3] | [1,1,2] | [1,1,2] | Pass |
| UT-08 | All correct digits in correct positions | [5,7,8,3] | [5,7,8,3] | [4,0,0] | [4,0,0] | Pass |
| UT-09 | No correct digits | [1,2,3,4] | [5,6,7,8] | [0,0,4] | [0,0,4] | Pass |
| UT-10 | All correct digits in wrong positions | [8,0,2,0] | [0,2,0,8] | [0,4,0] | [0,4,0] | Pass |
| UT-11 | Repeated digit in guessCode, not in computerCode | [1,5,9,4] | [1,1,5,6] | [1,1,2] | [1,1,2] | Pass |
| UT-12 | Repeated digit in computerCode, not in guessCode | [9,9,6,9] | [1,9,2,3] | [1,0,3] | [1,0,3] | Pass |
| UT-13 | Guesscode with all identical digits | [0,4,8,1] | [0,0,0,0] | [1,0,3] |[1,0,3] | Pass |








 