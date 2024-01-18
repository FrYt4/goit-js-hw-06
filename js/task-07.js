const fontSizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");

text.style.fontSize = fontSizeControl.value

fontSizeControl.addEventListener(`input` , (event) => {
    const fontSize = event.target.value + `px`;
    text.style.fontSize = fontSize;
});