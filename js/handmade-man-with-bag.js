(function () {
          const handmadeImgTitle = [
                    {
                              id: "5",
                              title: "man with a bag",
                              imgTitleUrl: "img/bloc_handmade/man_with_a_bag.png"
                    },
          ];
          function renderHandmadeImgTitleProds(handmadeImgTitleProds) {
                    const handmadeImgTitleProdsContainer = document.querySelector('.handmade__header-img-man');
                    for (const handmadeImgTitleProd of handmadeImgTitleProds) {
                              handmadeImgTitleProdsContainer.innerHTML += `
                               <img class="handmade_product_h3" src="${handmadeImgTitleProd.imgTitleUrl}" alt="${handmadeImgTitleProd.title}">
                              `;
                    }
          }
          renderHandmadeImgTitleProds(handmadeImgTitle);
})();