(function () {
    const slides = [
        `<div class="header__header-bottom__image__slider">
            <img src="img/header/notebook-header.png" alt="notebook header">
        </div>`,
        `<div class="header__header-bottom__image__slider">
            <img src="img/bloc_handmade/open_bag.webp" alt="open bag">
        </div>`,
        `<div class="header__header-bottom__image__slider">
            <img src="img/gift_packs/urban_pack.webp" alt="urban pack">
        </div>`,
        `<div class="header__header-bottom__image__slider">
            <img src="img/collection/wallets-collectins.webp" alt="walets collection">
        </div>`,
        `<div class="header__header-bottom__image__slider">
            <img src="img/gift_packs/vintage_pack.webp" alt="vintage pack">
        </div>`,
        `<div class="header__header-bottom__image__slider">
            <img src="img/collection/cases-collections.webp" alt="cases collections">
        </div>`,
        `<div class="header__header-bottom__image__slider">
            <img src="img/gift_packs/summer_pack.webp" alt="summer_pack_foto">
        </div>`,
        `<div class="header__header-bottom__image__slider">
            <img src="img/collection/holders-collections.webp" alt="holders collections">
        </div>`
    ];

    let currenSlideIdx = 0;
    function showCurrenSlide() {
        const slideContainer = document.querySelector(`.header__header-bottom__image__slider__container`);
        slideContainer.innerHTML = slides[currenSlideIdx];
    }
    function showNextSlide() {
        currenSlideIdx = currenSlideIdx + 1 >= slides.length ? 0 : currenSlideIdx + 1;
        showCurrenSlide();
    }
    showCurrenSlide();
    setInterval(showNextSlide, 3000);

})();