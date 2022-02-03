(function() {

    const giftCarosel = [
            `<div class="floral_pack">
                <img src="img/gift_packs/Floral_pack.webp" alt="floral pack">
                <h2 class="button_pack">The Big Floral Pack</h2>
            </div>`,
            `<div class="autumn_pack">
                <img src="img/gift_packs/autumn_pack.webp" alt="autumn pack">
                <h2 class="button_pack">The Autumn Lanscape Pack</h2>
            </div>`,
            `<div class="urban_pack">
                <img src="img/gift_packs/urban_pack.webp" alt="urban pack">
                <h2 class="button_pack">The Urban View Pack</h2>
            </div>`,
            `<div class="vintage_pack">
                <img src="img/gift_packs/vintage_pack.webp" alt="vintage pack">
                <h2 class="button_pack">The Big Vintage Pack</h2>
            </div>`,
            `<div class="summer_pack">
                <img src="img/gift_packs/summer_pack.webp" alt="summer_pack_foto">
                <h2 class="button_pack">The Summer Village Pack</h2>
            </div>`,
            `<div class="exotick_pack">
                <img src="img/gift_packs/exotick_pack.webp" alt="exotick pack">
                <h2 class="button_pack">Exotic Leather Pack</h2>
            </div>`
        ];

        let currentCaroselIdx = 0;
        function showCurrentCarosel() {
            const caroselContainer = document.querySelector('.gift-carosel');
            caroselContainer.innerHTML = giftCarosel[currentCaroselIdx];
            if (window.innerWidth >= 640) {
                const secondCaroselIdx = currentCaroselIdx + 1 >= giftCarosel.length ? 0 : currentCaroselIdx + 1;
                caroselContainer.innerHTML += giftCarosel[secondCaroselIdx];
                if (window.innerWidth >= 960) {
                    const thirdCaroselIdx = secondCaroselIdx + 1 >= giftCarosel.length ? 0 : secondCaroselIdx + 1;
                    caroselContainer.innerHTML += giftCarosel[thirdCaroselIdx];    
                }
            }
        }
    
        function showNextCarosel() {
            currentCaroselIdx = currentCaroselIdx + 1 >= giftCarosel.length ? 0 : currentCaroselIdx + 1;
            showCurrentCarosel();
        }
    
        function showPrevCarosel() {
            currentCaroselIdx = currentCaroselIdx - 1 < 0 ? giftCarosel.length - 1 : currentCaroselIdx - 1;
            showCurrentCarosel();
        }
    
        showCurrentCarosel();
    
        document.querySelector('.gift_carosel-forward')
             .addEventListener('click', showNextCarosel);
    
        document.querySelector('.gift_carosel-back')
             .addEventListener('click', showPrevCarosel);
    
        setInterval(showNextCarosel, 4000);
    
        window.addEventListener('resize', showCurrentCarosel);
    
    })();
        