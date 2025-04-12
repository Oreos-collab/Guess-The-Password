let correctPassword = "347"; // Changed password to "347"

function checkGuess() {
  const guess = document.getElementById("guess").value;
  const message = document.getElementById("message");

  if (guess === correctPassword) {
    message.textContent = "Congratulations! You guessed the password!";
    message.style.color = "#60a5fa"; // Matches new blue theme
    showWinPanel(); // Show the win pop-out
    document.getElementById("resetBtn").style.display = "block"; // Show reset button
  } else {
    message.textContent = "Wrong guess, try again!";
    message.style.color = "#f87171"; // Soft red for errors
  }

  document.getElementById("guess").value = ''; // Clear input after each guess
}

function resetGame() {
  document.getElementById("message").textContent = "Enter the password to guess.";
  document.getElementById("message").style.color = "#e5e7eb"; // Matches new text color
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
