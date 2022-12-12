const slider = () => {
    var sliderLatest = new Swiper(".slider--latest", {
        spaceBetween: 24,
        speed: 600,
        loop: true,
        slidesPerView: "auto",
        centeredSlides: true,
        initialSlide: 1,

        navigation: {
            nextEl: ".slider__button-next--latest",
            prevEl: ".slider__button-prev--latest",
        },
    });

    var sliderMore = new Swiper(".slider--more", {
        slidesPerGroup: 1,
        spaceBetween: 24,
        speed: 600,
        loop: true,
        slidesPerView: "auto",

        navigation: {
            nextEl: ".slider__button-next--more",
        },
    });

    var sliderGallery = new Swiper(".slider--gallery", {
        spaceBetween: 24,
        speed: 600,
        loop: true,
        slidesPerView: "auto",
        centeredSlides: true,
        simulateTouch: true,
        grabCursor: true,
    });
};

export default slider;
