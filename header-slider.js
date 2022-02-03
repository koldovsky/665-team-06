(function () {
    const slides = [
        `<div class="header__header-bottom__image__slider">
            <img src="img/header/notebook-header.png" alt="notebook header">
        </div>`,
        `<div class="handmade__header-img-man">
            <img src="img/bloc_handmade/man_with_a_bag.webp" alt="man with a bag">
        </div>`,
        `<div class="handmade__img-man-with-a-bag-on-his-shoulder">
            <img src="img/bloc_handmade/man_with-a_bag-on-his_shoulder.webp" alt="man with a bag on his shoulder">
        </div>`,
        `<div class="handmade__img-gloves">
            <img src="img/bloc_handmade/open_bag.webp" alt="open bag">
        </div>`,
        `<div class="urban_pack">
            <img src="img/gift_packs/urban_pack.webp" alt="urban pack">
        </div>`,
        `<div class="vintage_pack">
            <img src="img/gift_packs/vintage_pack.webp" alt="vintage pack">
        </div>`,
        `<div class="summer_pack">
            <img src="img/gift_packs/summer_pack.webp" alt="summer_pack_foto">
        </div>`
    ];
    let currenSlideIdx = 0;
    function showCurrenSlide() {
        const slideContainer = document.querySelector(`.header__header-bottom__image__slider__container`);
        slideContainer.innerHTML = slides[currenSlideIdx];
    }
    function showNextSlide() {
        currenSlideIdx = currenSlideIdx + 1 >= currenSlideIdx.length ? 0 : currenSlideIdx + 1;
        showCurrenSlide();
    }
    showCurrenSlide();
    setInterval(showNextSlide, 4000);
})();