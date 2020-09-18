const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

ingredients.forEach(element => {
  const listOfingredientsEl = document.querySelector('ul');
  let ingredientsEl = document.createElement('li');
  ingredientsEl.textContent = element;
  listOfingredientsEl.appendChild(ingredientsEl);
});
