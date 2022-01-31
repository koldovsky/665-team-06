(function() {

    const slides = [
            `<div class="why-us__content-element">
                <div class="why-us__icons">
                    <img src="img/icons/icon-irish-waxed-linen.png" alt="icon-irish-waxed-linen" />
                </div>
                <h4>Irish Waxed Linen</h4>
                <p>We've sourced the finest quality European linen and other contemporary materials for our products.</p>
            </div>`,
            `<div class="why-us__content-element">
                <div class="why-us__icons">
                    <img src="img/icons/icon-craftsmanship.png" alt="icon-craftsmanship" />
                    </div>
                <h4>Craftsmanship</h4>
                <p>We combine traditional techniques and modern manufacturing technologies to create exquisite yet
                    durable pieces.</p>
            </div>`,
            `<div class="why-us__content-element">
                <div class="why-us__icons">
                    <img src="img/icons/icon-handmade.png" alt="icon-handmade" />
                    </div>
                <h4>Handmade</h4>
                <p>Our craftsmen work with each client individually to create bespoke one-of-a-kind product that
                    reflects their unique taste.</p>
            </div>`,
            `<div class="why-us__content-element">
                <div class="why-us__icons">
                    <img src="img/icons/icon-top-quality-leather.png" alt="icon-top-quality-leather" />
                </div>
                <h4>Top-Quality Leather</h4>
                <p>We want our work to last for generations, and therefore use only the highest quality leather and
                    findings.</p>
            </div>`
     ];

    let currentSlideIdx = 0;
    function showCurrentSlide() {
        const slideContainer = document.querySelector('.why-us__carousel');
        slideContainer.innerHTML = slides[currentSlideIdx];
        if (window.innerWidth >= 640) {
            const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            slideContainer.innerHTML += slides[secondSlideIdx];
            if (window.innerWidth >= 960) {
                const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
                slideContainer.innerHTML += slides[thirdSlideIdx];    
            }
        }
    }

    function showNextSlide() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        showCurrentSlide();
    }

    function showPrevSlide() {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
        showCurrentSlide();
    }

    showCurrentSlide();

    document.querySelector('.why-us__carousel-forward')
         .addEventListener('click', showNextSlide);

    document.querySelector('.why-us__carousel-back')
         .addEventListener('click', showPrevSlide);

    setInterval(showNextSlide, 3000);

    window.addEventListener('resize', showCurrentSlide);

})();