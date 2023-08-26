import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector(".gallery")

const renderlist = (arr) => arr.map(item => (`<li data-id=${arr.indexOf(item)} class="gallery__item gallery__link js-product-item"><img class="gallery__image" src=${item.preview} alt=${item.description}/></li>`)).join("");

const handleListClick = (event) => {
    if (event.currentTarget === event.target) {
        return;
    }
    const currentListItem = event.target.closest(".js-product-item");
    const itemId = +currentListItem.dataset.id;
    console.log(itemId)
    // const galleryItem = galleryItems.find(item => {
    //     galleryItems.indexOf(item) === itemId
    // })
    const galleryItem = galleryItems[itemId]

    console.log(galleryItem)

    const modalInstance = basicLightbox.create(`<div class="gallery__item"><img class="gallery__image" src=${galleryItem.original} alt=${galleryItem.description}/></div>`);
    
    modalInstance.show();
}

listEl.insertAdjacentHTML("beforeend", renderlist(galleryItems))
listEl.addEventListener("click", handleListClick)