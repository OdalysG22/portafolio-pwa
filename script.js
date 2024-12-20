// Botón para mostrar y ocultar el menú de navegación
var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");

togglebtn.addEventListener("click", function() {
    this.classList.toggle("click");
    nav.classList.toggle("open");
});

// Efecto de texto animado utilizando Typed.js
var typed = new Typed(".input", {
    strings: ["Desarrolladora frontend", "UX Designer", "Web Developer"],
    typedSpeed: 70,
    backSpeed: 55,
    loop: true
});

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/portafolio-pwa/sw.js")
        .then((registration) => {
            console.log("Service Worker registrado con éxito:", registration);
        })
        .catch((error) => {
            console.error("Error al registrar el Service Worker:", error);
        });
  }
  
