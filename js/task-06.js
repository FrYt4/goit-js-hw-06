const validationInput = document.getElementById("validation-input")

validationInput.addEventListener("blur",() => {
    const inputValue = validationInput.value.trim();
    const expectedLength = validationInput.getAttribute("data-length");

   if(inputValue.length === expectedLength.length){
  // if(inputValue.length === parseInt(expectedLength ,10)){  
    validationInput.classList.remove(`invalid`);
    validationInput.classList.add(`valid`);   
}
else{
    validationInput.classList.remove(`valid`);
    validationInput.classList.add(`invalid`);
} 
})