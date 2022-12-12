const resizeManipulations = () => {
    // repositioning header buttons
    const blockPosition = () => {
        const navBody = document.querySelector(".nav__body");
        const headerContainer = document.querySelector(".header__container");
        const headerButtons = document.querySelector(".header__buttons");

        if (window.innerWidth <= 600) {
            navBody.append(headerButtons);
            // in css adding display: none
            // block not appearing when updating the home page
            headerButtons.style.display = "flex";
        } else {
            headerContainer.append(headerButtons);
        }
    };

    // changing the opacity of a slide
    const slideOpacity = () => {
        const slide = Array.from(document.querySelectorAll(".slider__slide--more"));

        if (window.innerWidth > 1424 || window.innerWidth <= 414) {
            slide.forEach((el) => el.classList.add("_opacity"));
        } else {
            slide.forEach((el) => el.classList.remove("_opacity"));
        }
    };

    // fixing the slider button
    const sliderButtonPosition = () => {
        const sliderParentWidth = document.querySelector(".section__item").clientWidth + "px";
        const sliderButton = document.querySelector(".slider__button-next--more");

        sliderButton.style.left = `calc(${sliderParentWidth} - 17%)`;
    };

    blockPosition();
    slideOpacity();
    sliderButtonPosition();

    window.addEventListener("resize", () => {
        blockPosition();
        slideOpacity();
        sliderButtonPosition();
    });
};

export default resizeManipulations;
