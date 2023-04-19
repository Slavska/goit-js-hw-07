import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const addGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join("");

const galleryList = document.querySelector(".gallery");
galleryList.insertAdjacentHTML("beforeend", addGallery);
galleryList.addEventListener("click", imgOpenByClick);

function imgOpenByClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => document.addEventListener("keydown", closeByEsc),
      onClose: () => document.addEventListener("keydown", closeByEsc),
    }
  );
  console.log(instance);
  instance.show();

  function closeByEsc(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
