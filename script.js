function generateRandomNumber() {
  const targetNumber = Math.floor(Math.random() * 100) + 1;
  return targetNumber;
}

function getPlayerGuess() {
  let guess_prompt = prompt("Enter a whole number between 1 and 100");
  guess = Number(guess_prompt);
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
  return guess === targetNumber
}

function pointsEarned(attempt) {
  return attempt * 10; //simple point system, the sooner the user guesses the more points he earns.
}

function restart() {
  let validation = confirm('Do you wish to restart?');
  
  while (validation){ // Continues asking the user if he wants to restart, once the user says No, it ends the game.
    game();
    validation = restart();
  }
  return validation;
}

function game() {
  let numbersGuessed = [];
  const targetNumber = generateRandomNumber();
  for (let i = 10; i > 0; i--) {
    let guess = getPlayerGuess();
    let correct = checkGuess(targetNumber, guess);
    while (numbersGuessed.includes(guess)) {
      alert(`You already guessed that number! Try a different one\nYou guessed: ${numbersGuessed.join(", ")}`);
      guess = getPlayerGuess();
    }
    if (!correct) {
      numbersGuessed.push(guess);
      if (guess < targetNumber) {
        alert(`Guessed number too low\nGuesses remaining: ${i - 1}\nNumbers guessed: ${numbersGuessed.join(", ")}`);
      } else {
        alert(`Guess number too high\nGuesses remaining: ${i - 1}\nNumbers guessed: ${numbersGuessed.join(", ")}`);
      }
    } else {
      return alert(`Correct! The number was ${targetNumber}! You win! \nYou earned ${pointsEarned(i)} points!`);
    }
  } 
  return alert(`Too bad, out of guesses, the number was ${targetNumber}`);
}

alert("This is a Number Guessing game, I'm going to generate a random number between 1 and 100, you'll have 10 guesses to find the number, good luck!")
game();
restart();
alert('GAME OVER');