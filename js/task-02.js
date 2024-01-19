const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
/*
const allIngredients = document.querySelector("#ingredients");
for (const ingredient of ingredients) {
  const li= document.createElement("li");
  li.classList.add("item");
  li.textContent = ingredient;
  allIngredients.append(li);
  console.log(li);
}
*/

const allIngredients = document.getElementById("ingredients")
const listItems = ingredients.map(ingredient => {
const li = document.createElement(`li`);
li.classList.add("item");
li.textContent = ingredient
allIngredients.appendChild(li);
console.log(li);

return li;
});
