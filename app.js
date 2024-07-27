document.addEventListener('DOMContentLoaded', (event) => {
    let numeroMagico;
    const botonComenzar= document.getElementById('botonComenzar');
    const areaJuego = document.getElementById('areaJuego');
    const input = document.getElementById('input');
    const botonEnviar = document.getElementById('botonEnviar');

    botonComenzar.addEventListener('click', () => {
      numeroMagico = Math.floor(Math.random() * 100) + 1;
      areaJuego.classList.remove('d-none');
      input.value = '';
      alert('El juego ha comenzado. Intenta adivinar el número mágico (entre 1 y 100).');
    });

    botonEnviar.addEventListener('click', () => {
      const adivinanzaUsuario = parseInt(input.value);

      if (isNaN(adivinanzaUsuario) || adivinanzaUsuario < 1 || adivinanzaUsuario > 100) {
        alert('Por favor, ingresa un número válido entre 1 y 100.');
        return;
      }

      if (adivinanzaUsuario === numeroMagico) {
        alert('¡Felicidades! Has adivinado el número mágico.');
        areaJuego.classList.add('d-none');
      } else if (adivinanzaUsuario > numeroMagico) {
        alert('El número ingresado es mayor al número mágico.');
      } else {
        alert('El número ingresado es menor al número mágico.');
      }
    });
  });