const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

text.style.fontSize = `${fontSizeControl.value}px`

fontSizeControl.addEventListener("input" , (event) => {
    const fontSize = event.target.value + `px`;
    text.style.fontSize = fontSize;
});