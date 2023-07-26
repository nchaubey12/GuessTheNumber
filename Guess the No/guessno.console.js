let compNum = Math.floor(Math.random() * 100) + 1;
console.log('Welcome To Try Your Luck');
console.log('------------------------');

let Guess = Number.parseInt(prompt('Enter a Number between 1 to 100'));
let chance = 0;

while (Guess !== compNum) {
  if (Guess > compNum) {
    console.log('The Number You guessed is Greater. Enter a Smaller No.');
    chance++;
  } else if (Guess < compNum) {
    console.log('The Number You guessed is Smaller. Enter a Greater No.');
    chance++;
  }

  // Get the new user input inside the loop
  Guess = Number.parseInt(prompt('Enter a Number between 1 to 100'));
}

// The loop will exit only when the user guesses the correct number
console.log('You Guessed The Right Number');
chance++;

console.log('The Right Number To Be Guessed is ' + compNum + '\nYour Score is ' + (100 - chance));
