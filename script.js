// =====================================================
// MENU MOBILE
// =====================================================

const menuButton =
    document.getElementById("menu-button");

const nav =
    document.getElementById("nav");


if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("active");

        const icon =
            menuButton.querySelector("i");


        if (nav.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

            menuButton.setAttribute(
                "aria-label",
                "Fechar menu"
            );

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

            menuButton.setAttribute(
                "aria-label",
                "Abrir menu"
            );

        }

    });


    // Fecha o menu ao clicar em um link

    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

            const icon =
                menuButton.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}


// =====================================================
// BOTÕES DOS SERVIÇOS
// =====================================================

const serviceButtons =
    document.querySelectorAll(".service-book");

const serviceSelect =
    document.getElementById("service");

const bookingSection =
    document.getElementById("agendamento");


serviceButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedService =
            button.getAttribute("data-service");


        if (serviceSelect) {

            serviceSelect.value =
                selectedService;

        }


        if (bookingSection) {

            bookingSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// =====================================================
// DATA MÍNIMA
// =====================================================

const dateInput =
    document.getElementById("date");


if (dateInput) {

    const today =
        new Date();


    const year =
        today.getFullYear();


    const month =
        String(
            today.getMonth() + 1
        ).padStart(2, "0");


    const day =
        String(
            today.getDate()
        ).padStart(2, "0");


    dateInput.min =
        `${year}-${month}-${day}`;

}


// =====================================================
// FORMULÁRIO DE AGENDAMENTO
// =====================================================

const bookingForm =
    document.getElementById("booking-form");


// =====================================================
// WHATSAPP
// TROQUE PELO NÚMERO REAL DO CLIENTE
// =====================================================

const whatsappNumber =
    "5547999999999";


if (bookingForm) {

    bookingForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const service =
                document.getElementById("service").value;


            const date =
                document.getElementById("date").value;


            const time =
                document.getElementById("time").value;


            const name =
                document.getElementById("name").value;


            const phone =
                document.getElementById("phone").value;


            const message =
                document.getElementById("message").value;


            // Verifica os campos obrigatórios

            if (
                !service ||
                !date ||
                !time ||
                !name ||
                !phone
            ) {

                alert(
                    "Por favor, preencha todos os campos obrigatórios."
                );

                return;

            }


            // =================================================
            // FORMATA DATA
            // =================================================

            const dateParts =
                date.split("-");


            const formattedDate =
                `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;


            // =================================================
            // MONTA MENSAGEM
            // =================================================

            let whatsappMessage =

                `Olá! Gostaria de solicitar um agendamento no Studio Lumi.

*Nome:* ${name}
*WhatsApp:* ${phone}
*Serviço:* ${service}
*Data:* ${formattedDate}
*Horário:* ${time}`;


            if (message.trim() !== "") {

                whatsappMessage +=
                    `\n*Observação:* ${message}`;

            }


            whatsappMessage +=

                `

Aguardo a confirmação do horário. Obrigada!`;


            // =================================================
            // ABRE WHATSAPP
            // =================================================

            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}


// =====================================================
// MÁSCARA DE TELEFONE
// =====================================================

const phoneInput =
    document.getElementById("phone");


if (phoneInput) {

    phoneInput.addEventListener(
        "input",
        function () {

            let value =
                this.value.replace(/\D/g, "");


            if (value.length > 11) {

                value =
                    value.substring(0, 11);

            }


            if (value.length <= 10) {

                value =
                    value.replace(
                        /^(\d{2})(\d)/,
                        "($1) $2"
                    );


                value =
                    value.replace(
                        /(\d{4})(\d)/,
                        "$1-$2"
                    );

            } else {

                value =
                    value.replace(
                        /^(\d{2})(\d)/,
                        "($1) $2"
                    );


                value =
                    value.replace(
                        /(\d{5})(\d)/,
                        "$1-$2"
                    );

            }


            this.value =
                value;

        }
    );

}