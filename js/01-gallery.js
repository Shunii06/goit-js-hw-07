import { galleryItems } from "./gallery-items.js";

const ul = document.querySelector(".gallery");

const openModal = function (event) {
  event.preventDefault();
  const target = event.target;
  if (!target.classList.contains("gallery__image")) {
    return;
  }

  const modalInstance = basicLightbox.create(`
    <img src="${target.dataset.source}" alt="${target.alt}">
  `);

  modalInstance.show();
  document.addEventListener("keydown", function (event) {
    if (event.code === "Escape") {
      modalInstance.close();
    }
  });
};

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
