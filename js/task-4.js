const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const elements = event.currentTarget.elements;

  const info = {
    email: elements.email.value,
    password: elements.password.value,
  };

  if (info.email === '' || info.password === '') {
    alert('All form fields must be filled in');
  }

  console.log(info);

  event.currentTarget.reset();
}

const head = document.querySelector('head');
const link = '<link rel="stylesheet" href="./css/task-4.css" />';
head.insertAdjacentHTML('beforeend', link);
const font =
  '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">';
head.insertAdjacentHTML('beforeend', font);

const labels = document.querySelectorAll('label');
labels.forEach(label => label.classList.add('form-label'));

const btn = document.querySelector('button');
btn.classList.add('form-btn');

const inputs = document.querySelectorAll('input');
inputs.forEach(input => input.classList.add('form-input'));
