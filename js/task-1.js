const textCategoryEl = document.querySelector('.item');
const amountOfListEl = document.querySelectorAll('li.item').length;
console.log(`В списке ${amountOfListEl} категории`);

const itemsCategoryEl = Array.from(document.querySelectorAll('.item'));
itemsCategoryEl.forEach(value => {
  const titleOfEl = value.firstElementChild.textContent;
  const amountOfEl = value.querySelectorAll('li').length;
  console.log(`Категория: ${titleOfEl} \nКоличество элементов: ${amountOfEl}`);
});
