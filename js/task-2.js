const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery');

const galleryImg = images
  .map(({ url, alt }) => `<li><img src = '${url}' alt = '${alt}' /></li >`)
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryImg);

const head = document.querySelector('head');
const link = '<link rel="stylesheet" href="./css/task-2.css" />';
head.insertAdjacentHTML('beforeend', link);

const imgs = document.querySelectorAll('img');

imgs.forEach(img => {
  img.classList.add('img-item');
});
