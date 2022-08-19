import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryListMarkUp = createGalleryList(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryListMarkUp);
gallery.addEventListener("click", onImageClick);

function createGalleryList(imagesArray) {
  return imagesArray
    .map(({ original, preview, description }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
}

function onImageClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") return;

  const instance = basicLightbox.create(
    `
    <img src="${evt.target.dataset.source}" width="800" height="600">
    `,
    {
      onShow: () => {
        gallery.addEventListener("keydown", onEscKeyPress);
      },
      onClose: () => {
        gallery.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );

  function onEscKeyPress(evt) {
    if (evt.code === "Escape") instance.close();
  }

  instance.show();
}
