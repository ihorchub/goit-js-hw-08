// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const gallery = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href=${original}>
      <img class="gallery__image" src=${preview} alt=${description} title=${description} />
      </a>`
  )
  .join(' ');

gallery.insertAdjacentHTML('beforeend', markup);

gallery.addEventListener('click', selectImg, { once: true });

const lightbox = new SimpleLightbox('.gallery .gallery__item', {
  captionDelay: 250,
  animationSpeed: 200,
  fadeSpeed: 150,
});

function selectImg(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }
}
