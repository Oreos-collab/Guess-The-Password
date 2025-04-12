let correctPassword = "stupid"; // Updated password
let remainingAttempts = Infinity; // Unlimited attempts

function checkGuess() {
  const guess = document.getElementById("guess").value;
  const message = document.getElementById("message");

  if (guess === correctPassword) {
    message.textContent = "Congratulations! You guessed the password!";
    message.style.color = "green";
    document.getElementById("resetBtn").style.display = "block"; // Show reset button
  } else {
    message.textContent = "Wrong guess, try again!";
    message.style.color = "orange";
  }

  document.getElementById("guess").value = ''; // Clear input after each guess
}

function resetGame() {
  document.getElementById("message").textContent = "Enter a password to guess.";
  document.getElementById("message").style.color = "#fff";
  document.getElementById("resetBtn").style.display = "none";
}
