import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery")

const renderlist = (arr) => arr.map(item => (`<li data-id=${arr.indexOf(item)} class="gallery__item"><img class="gallery__image" src=${item.preview} alt=${item.description}/></li>`)).join("");

const handleListClick = (event) => {
    if (event.currentTarget === event.target) {
        return;
    }
    const currentListItem = event.target.closest(".gallery__item");
    const itemId = +currentListItem.dataset.id;
    console.log(itemId)
    // const galleryItem = galleryItems.find(item => {
    //     galleryItems.indexOf(item) === itemId
    // })
    const galleryItem = galleryItems[itemId]

    const modalInstance = basicLightbox.create(`<div class="gallery__item"><img src=${galleryItem.original} alt=${galleryItem.description}/></div>`,
    {
       onShow: (instance) => {
         window.addEventListener('keydown', onEscKeyPress);
      },
       onClose: (instance) => {
         window.removeEventListener('keydown', onEscKeyPress);
      },
    });
    
    modalInstance.show();

    function onEscKeyPress(event) {
      const ESC_KEY_CODE = 'Escape';
      const isEscKey = event.code === ESC_KEY_CODE;
      if (!isEscKey) return;
      modalInstance.close();
  }
}




galleryContainer.insertAdjacentHTML("beforeend", renderlist(galleryItems))
galleryContainer.addEventListener("click", handleListClick)