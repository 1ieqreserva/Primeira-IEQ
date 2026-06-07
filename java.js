// =====================================
// PRIMEIRA IEQ RESERVA
// script.js
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    // ============================
    // POPUP ENCONTRO
    // ============================

    const popup = document.getElementById("popup");
    const fecharBtn = document.getElementById("fecharPopup");
    const fecharX = document.querySelector(".close-popup");

    if(localStorage.getItem("popupFechado")){

        popup.style.display = "none";

    }

    function fecharPopup(){

        popup.style.display = "none";

        localStorage.setItem(
            "popupFechado",
            "true"
        );

    }

    if(fecharBtn){

        fecharBtn.addEventListener(
            "click",
            fecharPopup
        );

    }

    if(fecharX){

        fecharX.addEventListener(
            "click",
            fecharPopup
        );

    }

    // ============================
    // ANIMAÇÕES DE ENTRADA
    // ============================

    const elementos = document.querySelectorAll(
        ".card, .agenda-card, .evento-box, .quem-somos"
    );

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add(
                    "show"
                );

            }

        });

    },{
        threshold:0.2
    });

    elementos.forEach(el=>{

        el.classList.add("hidden");

        observer.observe(el);

    });

    // ============================
    // HEADER SCROLL
    // ============================

    const header =
    document.querySelector("header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 50){

            header.style.background =
            "rgba(5,11,20,.97)";

            header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.3)";

        }else{

            header.style.background =
            "rgba(5,11,20,.90)";

            header.style.boxShadow =
            "none";

        }

    });

    // ============================
    // WHATSAPP
    // ============================

    const whatsapp =
    document.querySelector(".whatsapp");

    if(whatsapp){

        whatsapp.addEventListener("click",(e)=>{

            e.preventDefault();

            const mensagem =
            encodeURIComponent(
                "Olá! Gostaria de mais informações sobre a Primeira IEQ Reserva."
            );

            window.open(
                `https://wa.me/5542999999999?text=${mensagem}`,
                "_blank"
            );

        });

    }

});