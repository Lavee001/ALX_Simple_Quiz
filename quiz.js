// Function to check the user's answer
function checkAnswer() {
  // Correct answer
  const correctAnswer = "4";

  // Get the user's selected answer
  const userAnswer = document.querySelector('input[name="quiz"]:checked');

  // Get the feedback element
  const feedback = document.getElementById("feedback");

  // Check if the user selected an answer
  if (!userAnswer) {
      feedback.textContent = "Please select an answer.";
      feedback.style.color = "red";
      return;
  }

  // Compare the selected answer with the correct answer
  if (userAnswer.value === correctAnswer) {
      feedback.textContent = "Correct! Well done.";
      feedback.style.color = "green";
  } else {
      feedback.textContent = "That's incorrect. Try again!";
      feedback.style.color = "red";
  }
}

// Add an event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
