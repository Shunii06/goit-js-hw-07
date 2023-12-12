import { galleryItems } from "./gallery-items.js";
// Change code below this line
const ul = document.querySelector(".gallery");

galleryItems.forEach(({ preview, original, description }) => {
  const li = document.createElement("li");

  const galleryItem = document.createElement("a");
  galleryItem.classList.add("gallery__item");
  galleryItem.href = original;

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = preview;
  img.alt = description;

  galleryItem.appendChild(img);
  li.appendChild(galleryItem);
  ul.appendChild(li);
});
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
