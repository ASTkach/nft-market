const sendForm = () => {
    const loginForm = document.querySelector(".form--login");

    loginForm.addEventListener("submit", formSend);

    async function formSend(e) {
        const formData = new FormData(loginForm);
        let error = formValidate();

        e.preventDefault();

        if (error === 0) {
            let response = await fetch("sendmail.php", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                loginForm.reset();
            } else {
                alert("ERROR");
            }
        }
    }

    function formValidate() {
        const formReq = document.querySelectorAll("._req");
        let error = 0;

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];

            formRemoveError(input);

            if (input.classList.contains("_email")) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                    alert("check your email");
                }
            } else if (input.value.length < 6) {
                formAddError(input);
                error++;
                alert("must be more than six characters");
            }
        }

        return error;
    }

    const formAddError = (input) => {
        input.parentElement.classList.add("_error");
    };

    const formRemoveError = (input) => {
        input.parentElement.classList.remove("_error");
    };

    const emailTest = (input) => !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
};

export default sendForm;
