const categories = document.querySelectorAll("ul#categories > li.item")  //Pobieram wszystkie categorie
console.log(`Number of categories: ${categories.length}`)  

categories.forEach(category => {
const nameOfCategory = category.querySelector(`h2`).textContent 
const countElements = category.querySelector(`li < ul`).length
console.log(`Category: ${nameOfCategory}`);
console.log(`Elements: ${countElements}`)
});



