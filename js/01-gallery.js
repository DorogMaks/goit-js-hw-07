import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("beforeend", createGalleryList(galleryItems));

function createGalleryList(imagesArray) {
  return imagesArray
    .map((elem) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src="${elem.preview}"
            data-source="${elem.original}"
            alt="${elem.description}"
          />
        </a>
    </div>`;
    })
    .join("");
}

gallery.addEventListener("click", onImageClick);

function onImageClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") return;

  const instance = basicLightbox.create(`
    <img src="${evt.target.getAttribute(
      "data-source"
    )}" width="800" height="600">
`);

  instance.show();

  gallery.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") instance.close();
  });
}
