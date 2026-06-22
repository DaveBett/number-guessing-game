function generateRandomNumber() {
  targetNumber = Math.floor(Math.random() * 100) + 1;
}
function getPlayerGuess() {
  guess = prompt("Enter a whole number between 1 and 100");
  guess = Number(guess);
  if (guess % 1 === 0)  {
    if (guess < 1) {
      alert("Number too low, please enter a whole number between 1 and 100");
      getPlayerGuess();
    } else if (guess > 100) {
      alert ("Number too big, please enter a whole number between 1 and 100");
      getPlayerGuess();
    }
  } else {
    alert("Please enter a whole number");
    getPlayerGuess();
  }
  return guess;
}
function checkGuess(targetNumber, guess) {
  correct = false;
  checkResult = "";
  if (guess < targetNumber) {
    checkResult = "Guessed number too low";
  } else if (guess > targetNumber) {
    checkResult = "Guessed number too high";
  } else {
    checkResult = "That's right! You win";
    correct = true;
  }
}
function game() {
  numbersGuessed = [];
  generateRandomNumber();
  for (let i = 10; i > 0; i--) {
    checkGuess(targetNumber, getPlayerGuess());
    while (numbersGuessed.includes(guess)) {
      alert("You already guessed that number! Try a different one");
      getPlayerGuess();
    }
    if (!correct) {
      numbersGuessed.push(guess);
      alert(`${checkResult}, Guesses remaining: ${i - 1}, Numbers guessed: ${numbersGuessed.join(" ")}`);
    } else {
      return alert(`Correct! The number was ${targetNumber}! You win!`);
    }
  } 
  return alert(`Too bad, out of guesses, the number was ${targetNumber}`);
}

game();