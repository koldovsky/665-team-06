(function () {
    const slides = [
        `<div class="header__header-bottom__image__slider">
            <img src="img/header/slider/bag-on-the-map.png" alt="bag on the map">
        </div>`,
        `<div class="header__header-bottom__image__slider">
            <img src="img/header/slider/hand-with-leather-bag.png" alt="hand with leather bag">
        </div>`,
        `<div class="header__header-bottom__image__slider">
            <img src="img/header/slider/leather-case-on-table.png" alt="leather case on table">
        </div>`,
        `<div class="header__header-bottom__image__slider">
            <img src="img/header/slider/leather-folder.png" alt="leather folder">
        </div>`,
        `<div class="header__header-bottom__image__slider">
            <img src="img/header/slider/man-with-leather-bag.png" alt="man with leather bag">
        </div>`,
        `<div class="header__header-bottom__image__slider">
            <img src="img/header/slider/produce-leather-crafties.png" alt="producing leather crafties">
        </div>`,
        `<div class="header__header-bottom__image__slider">
            <img src="img/header/slider/wallet-and-tools.png" alt="wallet and tools">
        </div>`,
        `<div class="header__header-bottom__image__slider">
            <img src="img/header/slider/leather-wallet-on-sheet.png" alt="wallet on sheet">
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
    setInterval(showNextSlide, 5000);

})();