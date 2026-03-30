## Navigation / Link Testing

| Test ID | Test | Expected Result | Pass/Fail |
| ------- | ---- | --------------- | --------- |
| NAV-01  | Click Play button on home page | Navigates to game.html | Pass |
| NAV-02 | Click Home button (Home) on game page | Returns to index.html | Pass |
| NAV-03 | Click Home button on loss modal | Returns to index.html | Pass |
| NAV-04 | Click Home button on win modal | Returns to index.html | Pass |
| NAV-05 | Click Return home button on 404 page | Returns to index.html | Pass |
| NAV-06 | Click Play again button on loss modal | game.html reloads and new game starts | Pass |
| NAV-07 | Click Play again button on win modal | game.html reloads and new game starts | Pass |
| NAV-08 | Click Play again button on review screen | game.html reloads and new game starts | Pass |


## UI / Interaction Testing

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









 