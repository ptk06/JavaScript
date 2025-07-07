# Projects related to DOM

## Project Link

[GoTo Project](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## Solution code

## project 1

```javascript
const button = document.querySelectorAll(".button");
// console.log(button);
const body = document.querySelector("body");
// console.log(body);

button.forEach(function (btn) {
  // console.log(button)
  btn.addEventListener("click", (e) => {
    // console.log(e);
    // console.log(e.target);
    if (e.target.id == "grey") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id == "white") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id == "blue") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id == "yellow") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## project 2 solution code

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  height = parseInt(document.querySelector("#height").value);
  weight = parseInt(document.querySelector("#weight").value);
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  const text = document.querySelector("#results");
  text.innerHTML = `<span>${bmi}</span>`;
});
```

## project 3 solution code

```javascript
const clock = document.querySelector("#clock");
setInterval(() => {
  let myDate = new Date();
  console.log(myDate.toLocaleTimeString());
  clock.innerHTML = myDate.toLocaleTimeString();
}, 1000);
```

## project 4 solution code

```javascript
let rand = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector(".guessSubmit");
const userInput = document.querySelector(".guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const hintMsg = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1; // will disable the submit btn when this crosses 10

let playGame = true; // this will decide wheather we will play the game or not

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please Enter a Valid Number");
  } else if (guess < 1) {
    alert("Please enter a number greater than 1");
  } else if (guess > 100) {
    alert("please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess > 10) {
      displayGuess(guess);
      displayMsg(`Game over, Random number was ${rand}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === rand) {
    displayMsg(`You Guessed it right`);
    endGame();
  } else if (guess < rand) {
    displayMsg(`Number is lower than the Random Number`);
  } else {
    displayMsg(`Number is higher than the Random Number`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMsg(msg) {
  hintMsg.innerHTML = `<h2>${msg}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  submit.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id='newGame'>Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector("#newGame");
  newGameBtn.addEventListener("click", function (e) {
    rand = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = "";
    userInput.removeAttribute("disabled");
    submit.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
```
