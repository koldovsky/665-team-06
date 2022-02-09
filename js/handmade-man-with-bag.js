(function () {
         
          function loadiHandmadeImgs() {
                    fetch('handmade-man-with-bag.json')
                              .then(response => response.json())
                              .then(handmadeImgTitleProds => renderHandmadeImgTitleProds(handmadeImgTitleProds));
          }

          function renderHandmadeImgTitleProds(handmadeImgTitleProds) {
                    const handmadeImgTitleProdsContainer = document.querySelector('.handmade__header-img-man');
                    for (const handmadeImgTitleProd of handmadeImgTitleProds) {
                              handmadeImgTitleProdsContainer.innerHTML += `
                               <img class="handmade_product_h3" src="${handmadeImgTitleProd.imgTitleUrl}" alt="${handmadeImgTitleProd.title}">
                              `;
                    }
          }
          loadiHandmadeImgs();
})();