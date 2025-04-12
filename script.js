let correctPassword = "stupid"; // The password is "stupid"

function checkGuess() {
  const guess = document.getElementById("guess").value;
  const message = document.getElementById("message");

  if (guess === correctPassword) {
    message.textContent = "Congratulations! You guessed the password!";
    message.style.color = "green";
    showWinPanel(); // Show the win pop-out
    document.getElementById("resetBtn").style.display = "block"; // Show reset button
  } else {
    message.textContent = "Wrong guess, try again!";
    message.style.color = "orange";
  }

  document.getElementById("guess").value = ''; // Clear input after each guess
}

function resetGame() {
  document.getElementById("message").textContent = "Enter the password to guess.";
  document.getElementById("message").style.color = "#fff";
  document.getElementById("resetBtn").style.display = "none";
  closeWinPanel(); // Close the win pop-out panel if reset
}

function showWinPanel() {
  const winPanel = document.getElementById("winPanel");
  winPanel.style.display = "flex"; // Show the pop-out
}

function closeWinPanel() {
  const winPanel = document.getElementById("winPanel");
  winPanel.style.display = "none"; // Hide the pop-out
}
