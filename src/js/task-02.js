const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allIngredients = document.getElementById(`ingrediends`)

ingredients.forEach(ingredient => {
const li = document.createElement(`li`)
li.textContent = ingredient
li.classList.add(`item`)
allIngredients.appendChild(li);
});
