(function () {
          const handmadeProd = [
                    {
                              id: "1",
                              title: "cold look",
                              imgHandmadeUrl: "img/bloc_handmade/cold_look.png"
                    },
                    {
                              id: "2",
                              title: "gloves",
                              imgHandmadeUrl: "img/bloc_handmade/gloves.png"
                    },
                    {
                              id: "3",
                              title: "open bag",
                              imgHandmadeUrl: "img/bloc_handmade/open_bag.png"
                    },
                    {
                              id: "4",
                              title: "man with a bag on his shoulder",
                              imgHandmadeUrl: "img/bloc_handmade/man_with-a_bag-on-his_shoulder.png"
                    },
          ];
          function renderHandmadeProds(handmadeProds) {
                    const handmadeDrodsContainer = document.querySelector('.handmade__products_all');
                    for (const handmadeProd of handmadeProds) {
                              handmadeDrodsContainer.innerHTML += `
                                        <article class="handmade_product__img">
                                                  <img class="handmade_product" src="${handmadeProd.imgHandmadeUrl}" alt="${handmadeProd.title}">
                                        </article>
                              `;
                    }
          }
          renderHandmadeProds(handmadeProd); 
})();