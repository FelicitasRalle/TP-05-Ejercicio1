document.addEventListener('DOMContentLoaded', (event) => {
    let magicNumber;
    const startGameButton = document.getElementById('startGame');
    const gameArea = document.getElementById('gameArea');
    const guessInput = document.getElementById('guessInput');
    const submitGuessButton = document.getElementById('submitGuess');

    startGameButton.addEventListener('click', () => {
      magicNumber = Math.floor(Math.random() * 100) + 1;
      gameArea.classList.remove('d-none');
      guessInput.value = '';
      alert('El juego ha comenzado. Intenta adivinar el número mágico (entre 1 y 100).');
    });

    submitGuessButton.addEventListener('click', () => {
      const userGuess = parseInt(guessInput.value);

      if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        alert('Por favor, ingresa un número válido entre 1 y 100.');
        return;
      }

      if (userGuess === magicNumber) {
        alert('¡Felicidades! Has adivinado el número mágico.');
        gameArea.classList.add('d-none');
      } else if (userGuess > magicNumber) {
        alert('El número ingresado es mayor al número mágico.');
      } else {
        alert('El número ingresado es menor al número mágico.');
      }
    });
  });