const digits = () => {
    window.addEventListener("load", windowLoad);

    function windowLoad() {
        function digitsCountersAnimate(digitsCounter) {
            let startTimestamp = null;
            const duration = 1000;
            const startPosition = 0;
            const startValue = parseInt(digitsCounter.innerHTML);

            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;

                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue));

                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };

            window.requestAnimationFrame(step);
        }

        let options = {
            threshold: 0.3,
        };

        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const targetElement = entry.target;
                    const digitsCountersItems = targetElement.querySelectorAll("[data-digits-counter]");

                    if (digitsCountersItems.length) {
                        digitsCountersItems.forEach((digitsCounter) => {
                            digitsCountersAnimate(digitsCounter);
                        });
                    }

                    observer.unobserve(targetElement);
                }
            });
        }, options);

        const sections = document.querySelectorAll(".section--statistic");

        if (sections.length) {
            sections.forEach((section) => {
                observer.observe(section);
            });
        }
    }
};

export default digits;
