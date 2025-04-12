let correctPassword = "admin123"; // Default password (admin can change this)
let maxAttempts = 5;
let remainingAttempts = maxAttempts;

function checkGuess() {
  const guess = document.getElementById("guess").value;
  const message = document.getElementById("message");
  const attemptsDisplay = document.getElementById("remainingAttempts");

  if (guess === correctPassword) {
    message.textContent = "Congratulations! You guessed the password!";
    message.style.color = "green";
    document.getElementById("resetBtn").style.display = "block"; // Show reset button
  } else {
    remainingAttempts--;
    attemptsDisplay.textContent = remainingAttempts;
    if (remainingAttempts === 0) {
      message.textContent = "Game Over! You ran out of attempts.";
      message.style.color = "red";
      document.getElementById("resetBtn").style.display = "block"; // Show reset button
    } else {
      message.textContent = "Wrong guess, try again!";
      message.style.color = "orange";
    }
  }

  document.getElementById("guess").value = ''; // Clear input after each guess
}

function resetGame() {
  remainingAttempts = maxAttempts;
  document.getElementById("remainingAttempts").textContent = remainingAttempts;
  document.getElementById("message").textContent = "Enter a password to guess.";
  document.getElementById("message").style.color = "#333";
  document.getElementById("resetBtn").style.display = "none";
}

function updateSettings() {
  // Get new password and max attempts from admin input fields
  const newPassword = document.getElementById("newPassword").value;
  const newAttempts = parseInt(document.getElementById("newAttempts").value, 10);

  // If new password or attempts are provided, update them
  if (newPassword) {
    correctPassword = newPassword;
    alert("Password has been updated!");
  }
  
  if (newAttempts && newAttempts > 0) {
    maxAttempts = newAttempts;
    remainingAttempts = maxAttempts;
    document.getElementById("remainingAttempts").textContent = remainingAttempts;
    alert("Max attempts updated to " + maxAttempts);
  }

  // Clear the input fields after updating
  document.getElementById("newPassword").value = '';
  document.getElementById("newAttempts").value = '';
}
