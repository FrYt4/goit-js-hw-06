function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

  const body = document.querySelector("body");
  const colorSpan = document.querySelector(".color");
  const btn = document.querySelector(".change-color");

const changeColor = () => {
  body.style.backgroundColor = getRandomHexColor();

  colorSpan.textContent = getRandomHexColor();
};

window.onload = (event) => changeColor();
btn.addEventListener("click", changeColor);