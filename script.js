document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector(".animated-text");
  const textContent = textElement.textContent; // Texto original do span
  textElement.textContent = ""; // Limpa o texto inicial

  function typeEffect() {
    textElement.textContent = ""; // Limpa o texto antes de reiniciar
    let i = 0;

    function addLetter() {
      if (i < textContent.length) {
        textElement.textContent += textContent.charAt(i); // Adiciona uma letra por vez
        i++;
        setTimeout(addLetter, 150); // Velocidade de digitação
      } else {
        textElement.style.borderRight = "none"; // Remove o cursor após a digitação
      }
    }

    addLetter();
  }

  // Executa o efeito pela primeira vez
  typeEffect();

  // Repete o efeito a cada 5 segundos
  setInterval(() => {
    textElement.style.borderRight = "2px solid black"; // Mostra o cursor antes de reiniciar
    typeEffect();
  }, 5000); // Intervalo de 5 segundos
});
