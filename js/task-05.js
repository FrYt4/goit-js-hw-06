const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
 if(nameInput.ariaValueMax.trim === ""){
    nameOutput.textContent = "Anonymous"
 }
 else{
    nameOutput.textContent = nameInput.value;
 }
});