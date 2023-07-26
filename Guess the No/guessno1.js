let compNum = Math.floor(Math.random() * 100) + 1;
let chance = 0;

function checkGuess() {
  let numguess = parseInt(document.getElementById("guessInput").value);
  let feedback = document.getElementById("feedback");
  let score = document.getElementById("score");

  if (numguess === compNum) {
    feedback.textContent = "Congratulations! You Guessed The Right Number";
    chance++;
    score.textContent = "Your Score is " + (100 - chance);
  } else if (numguess > compNum) {
    feedback.textContent = "The Number You Guessed is Greater. Enter a Smaller No.";
    chance++;
  } else if (numguess < compNum) {
    feedback.textContent = "The Number You Guessed is Smaller. Enter a Greater No.";
    chance++;
  }
}


