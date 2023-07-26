const input=document.getElementById("guessInput");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission to avoid page reload
      document.getElementById("key").click();
    }
});
let compNum = Math.floor(Math.random() * 100) + 1;
let chance = 0;
function checkGuess() {
    let Guess = Number.parseInt(document.getElementById("guessInput").value);
    let feedback = document.getElementById("feedback");
    let score = document.getElementById("score");
    let chance = 0; // Assuming you have a 'chance' variable to keep track of the user's attempts  
    if (Guess === compNum) {
      feedback.textContent = "Congratulations! You Guessed The Right Number - " + compNum + "........";
      chance++;
      score.textContent = "Your Score is " + (100 - chance); // Corrected the syntax here
    } else if (Guess > compNum) {
      feedback.textContent = 'The Number You guessed is Greater. Enter a Smaller No........';
      chance++;
    } else if (Guess < compNum) {
      feedback.textContent = 'The Number You guessed is Smaller. Enter a Greater No.......';
      chance++;
    }
  
    // Clear the placeholder text by setting the input value to an empty string
    document.getElementById("guessInput").value = "";
  }
  
  