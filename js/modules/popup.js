const openPopup = () => {
    const body = document.body;
    const popup = document.querySelector(".popup");
    const popupContainer = document.querySelector(".popup__container");
    const accountButtons = Array.from(document.querySelectorAll("[data-name='popup-account']"));
    let scrollWidth = window.innerWidth - body.offsetWidth + "px";

    accountButtons.forEach((button) => {
        button.addEventListener("click", () => {
            popup.classList.add("_active-popup");
            body.classList.add("_locked");
            setTimeout(() => {
                popupContainer.classList.add("_active-popup");
            }, 300);

            if (window.innerWidth > 1025) {
                body.style.paddingRight = scrollWidth;
            }
        });
    });

    popup.addEventListener("click", ({ target }) => {
        if (!target.closest(".popup__container") || target.closest(".popup__button")) {
            popupContainer.classList.remove("_active-popup");
            setTimeout(() => {
                popup.classList.remove("_active-popup");
                body.classList.remove("_locked");
                body.style.paddingRight = null;
            }, 300);
        }
    });
};

export default openPopup;
