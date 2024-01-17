const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allIngredients = document.querySelector("#ingredients");
for (const ingredient of ingredients) {
  const li= document.createElement("li");
  li.classList.add("item");
  li.textContent = ingredient;
  allIngredients.append(item);
  console.log(item);
}

/*
const allIngredients = document.getElementById(`ingrediends`)
allIngredients.appendChild(li);
ingredients.forEach(ingredient => {
const li = document.createElement(`li`)
li.textContent = ingredient
li.classList.add(`item`)

});
*/