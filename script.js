// Simple Guess the Number game

const secretNumber = Math.floor(Math.random() * 100) + 1;

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('guessInput');
  const button = document.getElementById('guessButton');
  const result = document.getElementById('result');

  button.addEventListener('click', () => {
    const guess = parseInt(input.value, 10);

    if (isNaN(guess)) {
      result.textContent = 'Please enter a number.';
    } else if (guess < secretNumber) {
      result.textContent = 'Too low!';
    } else if (guess > secretNumber) {
      result.textContent = 'Too high!';
    } else {
      result.textContent = 'Correct! You win!';
    }
  });
});
