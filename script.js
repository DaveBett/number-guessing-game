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
    correct = true;
  }
}

function pointsEarned(attempt) {
  return attempt * 10; //simple point system, the sooner the suer guesses the more points he earns.
}

function restart() {
  validation = confirm('Do you wish to restart?');
  
  while (validation){ // Continues asking the user if he wants to restart, once the user says No, it ends the game.
    game();
    restart();
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
      return alert(`Correct! The number was ${targetNumber}! You win! \n Your earned ${pointsEarned(i)} points!`);
    }
  } 
  return alert(`Too bad, out of guesses, the number was ${targetNumber}`);
}

alert("This is a Number Guessing game, I'm going to generate a random number between 1 and 100, you'll have 10 guesses to find the number, good luck!")
game();
restart();
alert('GAME OVER');