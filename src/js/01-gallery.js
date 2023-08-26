import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector(".gallery")

const renderlist = (arr) => arr.map(item => (`<li class="gallery__item js-product-item"><img class="gallery__image" src=${item.preview} alt=${item.description}/></li>`)).join("");

listEl.insertAdjacentHTML("beforeend", renderlist(galleryItems))