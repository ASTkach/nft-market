const burgerMenu = () => {
    const iconMenu = document.querySelector(".nav__icon");
    const navigation = document.querySelector(".nav__body");

    iconMenu.addEventListener("click", () => {
        document.body.classList.toggle("_lock");
        iconMenu.classList.toggle("_active");
        navigation.classList.toggle("_active");
    });
};

export default burgerMenu;
