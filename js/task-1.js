const categories = document.getElementById('categories');
const items = categories.querySelectorAll('li.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const categoryName = item.querySelector('h2').textContent;
  const itemNum = item.querySelectorAll('ul > li').length;

  console.log(`Categoty: ${categoryName}`);
  console.log(`Element: ${itemNum}`);
});

// const head = document.querySelector('head');
// const link = '<link rel="stylesheet" href="./css/task-1.css" />';
// head.insertAdjacentHTML('beforeend', link);
// const font =
//   '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">';
// head.insertAdjacentHTML('beforeend', font);

categories.classList.add('categories-list');

const headers = document.querySelectorAll('h2');

headers.forEach(header => {
  header.classList.add('title');
});

const lists = document.querySelectorAll('ul');

lists.forEach(list => {
  list.classList.add('list');
});

categories.classList.remove('list');

const listItems = document.querySelectorAll('li');

listItems.forEach(listItem => {
  listItem.classList.add('list-item');
});

const genLists = document.querySelectorAll('.item');
genLists.forEach(genList => {
  genList.classList.remove('list-item');
});
