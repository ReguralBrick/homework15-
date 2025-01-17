// შემთხვევითი რიცხვის გენერაცია
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const message = document.getElementById("message");
const guessInput = document.getElementById("guess-input");
const submitButton = document.getElementById("submit-button");
const restartButton = document.getElementById("restart-button");
const attemptsDisplay = document.getElementById("attempts");

// რიცხვის შემოწმება
submitButton.addEventListener("click", function () {
  const userGuess = Number(guessInput.value);

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.textContent = "გთხოვთ, შეიყვანეთ რიცხვი 1-დან 100-მდე!";
    return;
  }

  attempts++;
  attemptsDisplay.textContent = attempts;

  if (userGuess === randomNumber) {
    message.textContent = `გილოცავთ! თქვენ გამოიცანით რიცხვი ${randomNumber}!`;
    submitButton.style.display = "none";
    restartButton.style.display = "inline-block";
  } else if (userGuess < randomNumber) {
    message.textContent = " გამოსაცნობი რიცხვი უფრო დიდია!";
  } else {
    message.textContent = "გამოსაცნობი რიცხვი უფრო მცირეა!";
  }

  guessInput.value = "";
});

// თამაშის თავიდან დაწყება
restartButton.addEventListener("click", function () {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  attemptsDisplay.textContent = attempts;
  message.textContent = "მე ავირჩიე რიცხვი 1-დან 100-მდე. გამოიცანი!";
  submitButton.style.display = "inline-block";
  restartButton.style.display = "none";
  guessInput.value = "";
});