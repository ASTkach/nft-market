const like = () => {
    document.addEventListener("click", ({ target }) => {
        if (target.matches("path")) {
            const icon = target.closest(".card__likes-icon");
            const currentLikes = icon.nextElementSibling;

            if (icon.classList.contains("_like") && currentLikes !== null) {
                icon.classList.remove("_like");
                currentLikes.innerHTML = parseInt(currentLikes.innerHTML) - 1;
            } else if (currentLikes !== null) {
                icon.classList.add("_like");
                currentLikes.innerHTML = parseInt(currentLikes.innerHTML) + 1;
            } else {
                icon.classList.toggle("_like");
            }
        } else {
            return;
        }
    });
};

export default like;
