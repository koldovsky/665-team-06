(function () {
         
          const slides = [
         
                    `<article class="handmade_product__img">
                              <img class="handmade_product" src="img/bloc_handmade/man_with-a_bag-on-his_shoulder.png" alt="man with a bag on his shoulder">
                    </article>`,
                    `<article class="handmade_product__img">
                              <img class="handmade_product" src="img/bloc_handmade/gloves.png" alt="gloves">
                    </article>`,
                    `<article class="handmade_product__img">
                              <img class="handmade_product" src="img/bloc_handmade/cold_look.png" alt="cold look">
                    </article>`,
                    `<article class="handmade_product__img">
                              <img class="handmade_product" src="img/bloc_handmade/open_bag.png" alt="open bag">
                    </article>`
          ];

          let currentSlideIdx = 0;

         function showCurrentSlide() {
                    const slideContainer = document.querySelector('.handmade__products-carousel-slide-container');
                   slideContainer.innerHTML = slides[currentSlideIdx];
          }

          function showNextSlide() {
                    currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
                    showCurrentSlide();
          }


          showCurrentSlide();
          setInterval(showNextSlide, 2000);
})();