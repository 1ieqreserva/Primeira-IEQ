document.addEventListener("DOMContentLoaded", () => {

    // animação

    const elementos = document.querySelectorAll(
        ".form-card, .page-hero"
    );

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    });

    elementos.forEach(el=>{

        el.classList.add("fade-up");

        observer.observe(el);

    });

    // envio

    const form =
    document.getElementById("encontroForm");

    form.addEventListener("submit",(e)=>{

        e.preventDefault();

        alert(
            "Inscrição enviada com sucesso! Em breve entraremos em contato."
        );

        form.reset();

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

});