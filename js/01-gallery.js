import { galleryItems } from "./gallery-items.js";

const ul = document.querySelector(".gallery");

galleryItems.forEach(({ preview, original, description }) => {
  const li = document.createElement("li");

  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = original;

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = preview;
  img.dataset.source = original;
  img.alt = description;

  link.appendChild(img);
  galleryItem.appendChild(link);
  li.appendChild(galleryItem);

  ul.appendChild(li);
});

ul.addEventListener("click", openModal);
