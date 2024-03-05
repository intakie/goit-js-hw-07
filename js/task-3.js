const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', handleInput);

function handleInput(event) {
  const name = event.currentTarget.value.trim();
  if (name === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = name;
  }
}

const head = document.querySelector('head');
const link = '<link rel="stylesheet" href="./css/task-3.css" />';
head.insertAdjacentHTML('beforeend', link);

const font =
  '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">';
head.insertAdjacentHTML('beforeend', font);

nameInput.classList.add('in');

const header = document.querySelector('h1');
header.classList.add('greeting');
