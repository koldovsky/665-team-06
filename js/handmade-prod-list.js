(function () {
          async function loadHandmadProds() {
                    const response = await fetch('handmade-list.json');
                    const handmadeProds = await response.json();
                    renderHandmadeProds(handmadeProds);
          }

          function renderHandmadeProds(handmadeProds) {
                    const handmadeDrodsContainer = document.querySelector('.handmade__products_all');
                    for (const handmadeProd of handmadeProds) {
                              handmadeDrodsContainer.innerHTML += `
                                        <article class="handmade_product__img">
                                                  <img class="handmade_product" src="${handmadeProd.imgHandmadeUrl}" 
                                                  alt="${handmadeProd.title}">
                                        </article>
                              `;
                    }
          }
          loadHandmadProds(); 
})();