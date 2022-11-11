import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listGalery = document.querySelector(".gallery");

function createGaleryTemplate(items) {
    return items
        .map(({ preview, description, original }) => {
            return `<a class="gallery__item" href="${original}">
                <img class="gallery__image lazyload blur-up" loading="lazy" data-src="${preview}" src="${preview}" alt="${description}" />
            </a>`;
        }).join('');
}

const galleryMarkup = createGaleryTemplate(galleryItems);
listGalery.insertAdjacentHTML("beforeend", galleryMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  scrollZoomFactor: 0.05,
  enableKeyboard: true,
  disableScroll: true,
  fadeSpeed: 250,
});

