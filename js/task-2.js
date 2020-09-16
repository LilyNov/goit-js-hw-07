const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

ingredients.forEach(element => {
  const ulEl = document.querySelector('ul');
  let ingredientsEl = document.createElement('li');
  ingredientsEl.textContent = element;
  ulEl.appendChild(ingredientsEl);
});
