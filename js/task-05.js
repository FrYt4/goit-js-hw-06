const nameInput = document.getElementById(`name-input`);
const nameOutput = document.getElementById(`name-output`);

nameInput.addEventListener(`name-input`, () => {
 if(nameInput.ariaValueMax.trim === ``){
    nameOutput.textContent = `Anonymous`
 }
 else{
    nameOutput.textContent = nameInput.value;
 }
});