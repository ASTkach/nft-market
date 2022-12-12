const switcher = () => {
    const lightStyles = document.querySelectorAll("link[rel=stylesheet][media*=prefers-color-scheme][media*=light]");
    const darkStyles = document.querySelectorAll("link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]");
    const darkSchemeMedia = matchMedia("(prefers-color-scheme: dark)");
    const switcherRadios = Array.from(document.querySelectorAll(".switcher__radio"));

    const setupSwitcher = () => {
        const savedScheme = getSavedScheme();

        if (savedScheme !== null) {
            const currentRadio = document.querySelector(`.switcher__radio[value=${savedScheme}]`);
            currentRadio.checked = true;
        }

        switcherRadios.forEach((radio) => {
            radio.addEventListener("change", ({ target }) => {
                setScheme(target.value);
            });
        });
    };

    const setupScheme = () => {
        const savedScheme = getSavedScheme();
        const systemScheme = getSystemScheme();

        if (savedScheme === null) return;

        if (savedScheme !== systemScheme) {
            setScheme(savedScheme);
        }
    };

    const setScheme = (scheme) => {
        switchMedia(scheme);

        if (scheme === "auto") {
            clearScheme();
        } else {
            saveScheme(scheme);
        }
    };

    const switchMedia = (scheme) => {
        let lightMedia;
        let darkMedia;

        if (scheme === "auto") {
            lightMedia = "(prefers-color-scheme: light)";
            darkMedia = "(prefers-color-scheme: dark)";
        } else {
            lightMedia = scheme === "light" ? "all" : "not all";
            darkMedia = scheme === "dark" ? "all" : "not all";
        }

        [...lightStyles].forEach((link) => {
            link.media = lightMedia;
        });

        [...darkStyles].forEach((link) => {
            link.media = darkMedia;
        });
    };

    const getSystemScheme = () => {
        const darkScheme = darkSchemeMedia.matches;

        return darkScheme ? "dark" : "light";
    };

    const getSavedScheme = () => localStorage.getItem("color-scheme");
    const saveScheme = (scheme) => localStorage.setItem("color-scheme", scheme);
    const clearScheme = () => localStorage.removeItem("color-scheme");

    setupSwitcher();
    setupScheme();
};

export default switcher;
