import { galleryItems } from "./gallery-items.js";
// Change code below this line

//----createGalery----

const refs = {
  listGalery: document.querySelector(".gallery"),
};

function createGaleryTemplate(items) {
  return items
    .map(({ preview, description, original }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img loading="lazy"
      class="gallery__image"
      loading="lazy"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

const galleryMarkup = createGaleryTemplate(galleryItems);
refs.listGalery.insertAdjacentHTML("beforeend", galleryMarkup);

//----createModalWindow-----

refs.listGalery.addEventListener("click", openModalWindow);

const createModal = (imgUrl) => {
  window.instance = basicLightbox.create(
    `
    <img src="${imgUrl}">
    `,
    {
      onShow: () => window.addEventListener("keydown", closeModalWindow),
      onClose: () => {
        window.removeEventListener("keydown", closeModalWindow);
      },
    }
  );
  return instance;
};

function openModalWindow(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const originalImg = evt.target.dataset.source;
  createModal(originalImg).show();
}

function closeModalWindow(evt) {
  evt = evt || window.evt;
  var isEscape = false;
  if ("key" in evt) {
    isEscape = evt.key === "Escape" || evt.key === "Esc";
  } else {
    isEscape = evt.keyCode === 27;
  }
  if (isEscape) {
    instance.close();
  }
}

