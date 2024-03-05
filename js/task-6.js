const inputDiv = document.getElementById('controls');
const boxes = document.getElementById('boxes');

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

createBtn.addEventListener('click', createBoxes);

function createBoxes(event) {
  const num = input.value;

  if (num >= 1 && num <= 100) {
    boxes.innerHTML = '';

    for (let i = 0; i < num; i++) {
      const size = 30 + i * 10;
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxes.append(box);
    }
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
}

destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const head = document.querySelector('head');
const link = '<link rel="stylesheet" href="./css/task-6.css" />';
head.insertAdjacentHTML('beforeend', link);
const font =
  '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">';
head.insertAdjacentHTML('beforeend', font);

boxes.classList.add('boxes');
inputDiv.classList.add('input');
input.classList.add('input-inp');
createBtn.classList.add('btn1');
destroyBtn.classList.add('btn2');
