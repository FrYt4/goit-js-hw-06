const categories = document.querySelectorAll("ul#categories > li.item")  //Pobieram wszystkie categorie
console.log(`Number of categories: ${categories.length}`)  

categories.forEach(category => {
const nameOfCategory = category.querySelector("h2").textContent; 
const countElements = category.querySelectorAll("ul > li").length;
console.log(`Category: ${nameOfCategory}`);
console.log(`Elements: ${countElements}`)
});



/*const titles = document.querySelectorAll("h2").length;
console.log("Number of categories:", titles);

const items = document.querySelectorAll("li.item");
for (const item of items) {
    const category = item.firstElementChild.textContent;
    const elements = item.querySelectorAll("li").length;
    console.log(`Category: ${category} \n Elements: ${elements}`);
}

*/