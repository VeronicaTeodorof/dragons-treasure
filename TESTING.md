## Table of Contents

1. <a href="#ui-testing">UI Testing</a>
   - <a href="#navigation">Navigation / Link Testing</a>
   - <a href="#modals">Modal Behaviour</a>
   - <a href="#hover">Hover States of Buttons</a>
   - <a href="#focus">Input Focus Behaviour</a>
   - <a href="#validation">Input Validation</a>
   - <a href="#submission">Guess Submission and Feedback</a>
   - <a href="#game-over">Game Over</a>
   - <a href="#game-logic">Game Logic</a>
2. <a href="#unit-testing">Unit Testing</a>
   - <a href="#code-generation">Code Generation - generateCode()</a>
   - <a href="#input-retrieval">Input Retrieval - processData()</a>
   - <a href="#algorithm">Algorithm - checkAnswer()</a>
3. <a href="#responsiveness">Responsiveness</a>
   - <a href="#home-page">Home Page</a>
   - <a href="#game-page">Game Page</a>
   - <a href="#not-found">404 Page</a>
4. <a href="#appendix">Appendix: UT - Screenshots</a>


## <h2 id="ui-testing">1. UI Testing</h2>

### <h3 id="navigation">Navigation / Link Testing</h3>

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


### <h3 id="modals">Modal Behaviour</h3>

| Test ID | Test | Expected Result | Pass/Fail |
| ------- | ---- | --------------- | --------- |
| UI-01 | Click dragon button on game page | The Story modal opens | Pass |
| UI-02 | Click ? button on game page | How to play modal opens | Pass |
| UI-03 | Close The Story modal (Click close button, X, backdrop, press Esc) on game page | Each action closes modal | Pass |
| UI-04 | Close How to Play modal (Click close button, X, backdrop, press Esc) on game page | Each action closes modal | Pass |
| UI-05 | Win modal - backdrop click does not close the modal | Modal doesn't close | Pass |
| UI-06 | Win modal - Esc key does not close modal | Modal doesn't close | Pass |
| UI-07 | Loss modal - backdrop click does not close the modal | Modal doesn't close | Pass |
| UI-08 | Loss modal - Esc key does not close modal | Modal doesn't close | Pass |

### <h3 id="hover">Hover States of Buttons</h3>

| Test ID | Test | Expected Result | Pass/Fail |
| ------- | ---- | --------------- | --------- |
| UI-09 | Play (homepage), Play again (review screen), Return home (404 page) | Subtle change in text colour and cursor changes to pointer | Pass |
| UI-10 | Try button (gamepage) | Cursor changes to pointer | Pass |
| UI-11 | Dragon button, ? button, home button (gamepage) | Buttons scale and cursor changes to pointer | Pass |
| UI-12 | All modal buttons | No background colour, text changes colour, cursor changes to pointer | Pass | 

### <h3 id="focus">Input Focus Behaviour</h3>

| Test ID | Test | Expected Result | Pass/Fail |
| ------- | ---- | --------------- | --------- |
| UI-13 | Mobile/tablet — no auto-focus on first input on load | No auto-focus on load | Pass |
| UI-14 | Desktop — auto-focus on first input on load | Auto-focus on load | Pass |
| UI-15 | All devices - focus returns on first input after submit | First input focused after submit | Pass |
| UI-16 | Focus moves to the next empty input | Focus moves to next empty input after a character is entered| Pass |

### <h3 id="validation">Input Validation</h3>

| Test ID | Test | Expected Result | Pass/Fail |
| ------- | ---- | --------------- | --------- |
| UI-17 | Submission of guess containing empty field(s) | Does not submit, appropriate feedback is given | Pass |
| UI-18 | Submission of guess containing "e" via keyboard input and paste | Character is permitted as input, but does not submit, appropriate feedback is given | Pass |
| UI-19 | Submission of guess containing "-" or negative numbers via keyboard input and paste | Character is permitted as input, but does not submit, appropriate feedback is given | Pass |
| UI-20 | Submission of guess containing "." or decimal numbers via keyboard input and paste | Character is permitted as input, but does not submit, appropriate feedback is given | Pass |
| UI-21 | Submission of guess containing letters, special characters and spaces | Letters other than "e", special characters other than "-" and ".", and spaces are blocked | Pass |
| UI-22 | Submission of guess containing more than one digit numbers via keyboard input and paste | Permitted as input, but do not submit, appropriate feedback is given | Pass |

### <h3 id="submission">Guess Submission and Feedback</h3>

| Test ID | Test | Expected Result | Pass/Fail |
| ------- | ---- | --------------- | --------- |
| UI-23 | First valid guess | Submits successfully, guess and feedback are displayed in feedback area | Pass |
| UI-24 | 2nd - 9th valid guesses | Each submits successfully, guess and feedback are displayed in feedback area, all previous guesses remain visible and stacked | Pass |
| UI-25 | Cleared inputs after submission | Inputs are cleared after each submission, page is not reloaded | Pass |
| UI-26 | Correct guess (1st to 10th) | Submits successfully, win animation is triggered immediately | Pass |
| UI-27 | 10th incorrect guess | Submits successfully, lose animation is triggered immediately | Pass |
| UI-28 | Initial tries count | Displays 10 tries | Pass |
| UI-29 | Tries count after each submission | Decrements correctly after each submission | Pass |


### <h3 id="game-over">Game Over</h3>

| Test ID | Test | Expected Result | Pass/Fail |
| ------- | ---- | --------------- | --------- |
| UI-30 | Win animation | Overlay and image, feedback, form, tries count, and footer with buttons disappear, form and pointers are disabled on inputs and buttons, win modal appears at the end of the animation | Pass |
| UI-31 | Win modal | Win message and play again, review, and home buttons are displayed | Pass |
| UI-32 | Lose animation | Dark background fades in, image 1 appears and disappears, image 2 appears and disappears, lose modal appears at the end of the animation | Pass |
| UI-33 | Lose modal | Lose message and play again, review, and home buttons are displayed | Pass |
| UI-34 | Review | Modal disappears, board is revealed, play again button is revealed, key is revealed, footer with game buttons are revealed, pointers on buttons are active | Pass |

### <h3 id="game-logic">Game Logic</h3>

| Test ID | Test | Expected Result | Pass/Fail |
| ------- | ---- | --------------- | --------- |
| UI-35 | All correct digits in correct positions (computerCode: 3,9,4,3, guessCode: 3,9,4,3) | 4 white dots, 0 red dots, win condition triggered | Pass |
| UI-36 | All incorrect digits (computerCode: 7,6,2,3 guessCode: 0,1,4,8) | 0 white dots, 0 red dots | Pass |
| UI-37 | All correct digits in wrong positions (computerCode: 7,6,2,3 guessCode: 6,3,7,2) | 0 white dots, 4 red dots | Pass |
| UI-38 | Mix of correct and incorrect digits (computerCode: 3,9,4,3, guessCode: 3,4,7,8) | 1 white dot and 1 red dot displayed | Pass |
| UI-39 | Repeated digit in guessCode, not in computerCode (computerCode 1,2,3,4, guessCode 1,1,2,3) | 1 white dot, 2 red dots | Pass |
| UI-40 | Repeated digit in computerCode, not in guessCode (computerCode 1,1,2,3, guessCode 1,2,3,4) | 1 white dot, 2 red dots | Pass |
| UI-41 | Guess with all identical digits (computerCode: 0,9,4,3, guessCode: 0,0,0,0) | 1 white dot, 0 red dots | Pass |


## <h2 id="ui-testing">2. Unit Testing</h2>

### <h3 id="code-generation">Code Generation - generateCode()</h3>

| Test ID | Description | Expected Output | Actual Output | Pass/Fail |
| ------- | ---- | --------------- | --------- | ------- |
| UT-01 | generateCode() returns a 4 element array with digits 0-9 | Array of 4 digits e.g.[0,1,2,3] | [6,9,3,7] | Pass |

### <h3 id="input-retrieval">Input Retrieval - processData()</h3>

| Test ID | Description | Expected Output | Actual Output | Pass/Fail |
| ------- | ---- | --------------- | --------- | ------- |
| UT-02 | processData() correctly retrieves inputs as guessCode array | Inputs are correctly retrieved and parsed as integers e.g. [1,2,3,4] | [1,2,3,4] | Pass |

### <h3 id="algorithm">Algorithm - checkAnswer()</h3>

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
| UT-13 | guessCode with all identical digits | [0,4,8,1] | [0,0,0,0] | [1,0,3] |[1,0,3] | Pass |


## <h2 id="responsiveness">3. Responsiveness</h2>

### <h3 id="home-page">Home Page</h3>

| Test ID | Breakpoint | Test | Expected Result | Pass/Fail |
| ------- | ---------- | ---- | --------------- | --------- |
| RES-01 | Mobile (below 760px) | Home page layout | Blue gradient background, dragon silhouette  visible, h1 in dark blue, play button centered below title, treasure chest bottom center | Pass |
| RES-02 | Tablet (760px-1024px) | Home page layout | Dark navy background, larger h1 in light blue, play button repositioned to right of treasure chest, faint dragon silhouette on right | Pass |
| RES-03 | Desktop (1024px+) | Home page layout | Dark navy background, h1 on one line, large dragon image on right, treasure chest and play button on left | Pass |

### <h3 id="game-page">Game Page</h3>

| Test ID | Breakpoint | Test | Expected Result | Pass/Fail |
| ------- | ---------- | ---- | --------------- | --------- |
| RES-04 | Mobile (below 760px) | Feedback section layout | Single column layout | Pass |
| RES-05 | Tablet and Desktop (760px+) | Feedback section layout | Two column layout | Pass |

### <h3 id="not-found">404 Page</h3>

| Test ID | Test | Expected Result | Pass/Fail |
| ------- | ---- | --------------- | --------- |
| RES-06 | 404 page across all breakpoints | Page displays correctly across all screen sizes | Pass |


## <h2 id="appendix">4. Appendix - UT Sceenshots</h2>

UT-01:<br>
<img src="readme-assets/second-phase/ut-1.png" style="height:300px;"><br>
UT-02:<br>
<img src="readme-assets/second-phase/ut-2.png" style="height:300px;"><br>
UT-03:<br>
<img src="readme-assets/second-phase/ut-3.png" style="height:300px;"><br>
UT-04:<br>
<img src="readme-assets/second-phase/ut-4.png" style="height:300px;"><br>
UT-05:<br>
<img src="readme-assets/second-phase/ut-5.png" style="height:300px;"><br>
UT-06:<br>
<img src="readme-assets/second-phase/ut-6.png" style="height:300px;"><br>
UT-07:<br>
<img src="readme-assets/second-phase/ut-7.png" style="height:300px;"><br>
UT-08:<br>
<img src="readme-assets/second-phase/ut-8.png" style="height:300px;"><br>
UT-09:<br>
<img src="readme-assets/second-phase/ut-9.png" style="height:300px;"><br>
UT-10:<br>
<img src="readme-assets/second-phase/ut-10.png" style="height:300px;"><br>
UT-11:<br>
<img src="readme-assets/second-phase/ut-11.png" style="height:300px;"><br>
UT-12:<br>
<img src="readme-assets/second-phase/ut-12.png" style="height:300px;"><br>
UT-13:<br>
<img src="readme-assets/second-phase/ut-13.png" style="height:300px;"><br>










 