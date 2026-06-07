document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".dia-card");

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    });

    cards.forEach(card => observer.observe(card));

});