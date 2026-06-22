function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
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
  if (guess < targetNumber) {
    alert("Guessed number too low, try again");
  } else if (guess > targetNumber) {
    alert("Guess number too high, try again");
  } else {
    alert("That's right! You win");
  }
} 

targetNumber = generateRandomNumber();
getPlayerGuess();

