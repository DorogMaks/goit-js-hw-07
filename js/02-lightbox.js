import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryListMarkUp = createGalleryList(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryListMarkUp);

function createGalleryList(imagesArray) {
  return imagesArray
    .map(({ original, preview, description }) => {
      return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                    title="${description}"
                />
            </a>
        </li>`;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  scrollZoom: false,
});
