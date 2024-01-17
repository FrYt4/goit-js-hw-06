function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBackgroundColor(){
  const body = document.body;
  const colorSpan = document.querySelector(`.color`);
  const randomColor = getRandomHexColor();

   // Zmiana koloru tła elementu body
  body.style.backgroundColor = randomColor;
   // Wyświetlenie wartości koloru w span.color
  colorSpan.textContent = randomColor;
}