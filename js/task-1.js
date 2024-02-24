const categories = document.getElementById('categories');
const items = categories.querySelectorAll('li.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const categoryName = item.querySelector('h2').textContent;
  const itemNum = item.querySelectorAll('ul > li').length;

  console.log(`Categoty: ${categoryName}`);
  console.log(`Element: ${itemNum}`);
});
