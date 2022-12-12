const uploadFiles = () => {
    const sectionButtons = document.querySelector(".section__buttons--popular");
    const buttons = Array.from(document.querySelectorAll(".btn--secondary-small"));
    const loadButton = document.querySelector(".btn--secondary-popular");
    const nftList = document.querySelector(".list--popular");
    const removeActiveLink = () => buttons.forEach((btn) => btn.classList.remove("_active"));

    const initialNftList = () => {
        getNFT("../../json/photography1.json");
    };
    initialNftList();

    sectionButtons.addEventListener("click", ({ target }) => {
        const buttonId = target.id;

        if (target.closest(".btn--secondary-small")) {
            removeActiveLink();
            if (target.classList.contains("_active")) {
                target.classList.remove("_active");
            } else {
                target.classList.add("_active");
                loadButton.classList.remove("_deactivated");
                nftList.innerHTML = null;
            }
        } else {
            return;
        }

        switch (buttonId) {
            case "photo":
                getNFT("../../json/photography1.json");
                break;
            case "games":
                getNFT("https://rickandmortyapi.com/api/character/[1,22,3,23,17,111]");
                break;
            case "music":
                getNFT("https://rickandmortyapi.com/api/character/[45,132,5,29,77,101]");
                break;
        }
    });

    buttons.find((button) => {
        loadButton.addEventListener("click", () => {
            switch (button.classList.contains("_active") && button.id) {
                case "photo":
                    getNFT("../../json/photography2.json");
                    break;
                case "games":
                    getNFT("https://rickandmortyapi.com/api/character/[2,44,6,46,34,222]");
                    break;
                case "music":
                    getNFT("https://rickandmortyapi.com/api/character/[51,69,200,99,71,136]");
                    break;
            }
            loadButton.classList.add("_deactivated");
        });
    });

    async function getNFT(url) {
        let response = await fetch(url, {
            method: "GET",
        });

        if (response.ok) {
            let result = await response.json();
            loadNFT(result);
        } else {
            alert("Error");
        }
    }

    function loadNFT(result) {
        result.map((item) => {
            let li = document.createElement("li");
            li.classList.add("list__item", "list__item--popular");
            nftList.appendChild(li);

            li.innerHTML = `
                    <div class="card card--popular">
                        <a class="card__img-link card__img-link--popular" href="#" style="--color-hue: 222">
                            <img class="card__img card__img--popular" src="${item.image || item.img}" alt="#" />
                        </a>
                        <div class="card__content card__content--popular">
                            <div class="card__item card__item--popular">
                            <a class="card__link card__link--popular" href="#" target="_blank" rel="nofollow noopener">${item.title || item.name}</a>
                            </div>
                            <div class="card__item card__item--popular">
                                <p class="card__time _icon-timer">22:59</p>
                                <span class="card__price card__price--popular">2.55 ETH</span>
                            </div>
                            <div class="card__item card__item--popular">
                                <p class="card__text card__text--popular">${item.bidding || item.id} people are bidding</p>
                                <svg class="card__likes-icon" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.83268 0.5C2.53185 0.5 0.666016 2.34667 0.666016 4.625C0.666016 6.46417 1.39518 10.8292 8.57268 15.2417C8.70125 15.3199 8.84885 15.3613 8.99935 15.3613C9.14985 15.3613 9.29745 15.3199 9.42602 15.2417C16.6035 10.8292 17.3327 6.46417 17.3327 4.625C17.3327 2.34667 15.4668 0.5 13.166 0.5C10.8652 0.5 8.99935 3 8.99935 3C8.99935 3 7.13352 0.5 4.83268 0.5Z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
           `;
        });

        return nftList.innerHTML;
    }
};

export default uploadFiles;
