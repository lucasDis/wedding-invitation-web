// main.js

document.addEventListener("DOMContentLoaded", () => {
  // -------- GALERÍA CON MODAL -------- //
  const imagenes = document.querySelectorAll(".galeria-img");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalText = document.getElementById("modal-text");
  const closeModal = document.querySelector(".close");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  const textos = [
    "Nuestra primera foto juntos 💖",
    "Un viaje inolvidable 🌍",
    "El día en que dijimos sí 💍",
  ];

  let currentIndex = 0;

  function mostrarModal(index) {
    modal.classList.remove("hidden");
    modalImg.src = imagenes[index].src;
    modalText.textContent = textos[index] || "";
    currentIndex = index;
  }

  imagenes.forEach((img, index) => {
    img.addEventListener("click", () => mostrarModal(index));
  });

  closeModal.addEventListener("click", () => modal.classList.add("hidden"));

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
    mostrarModal(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % imagenes.length;
    mostrarModal(currentIndex);
  });

  // -------- CONTADOR REGRESIVO -------- //
  const fechaBoda = new Date("2025-12-20T00:00:00");
  const countdownEl = document.getElementById("countdown");

  if (countdownEl) {
    function actualizarCountdown() {
      const ahora = new Date();
      const diff = fechaBoda - ahora;

      if (diff <= 0) {
        countdownEl.textContent = "¡Hoy es el gran día!";
        return;
      }

      const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diff / (1000 * 60)) % 60);
      const segundos = Math.floor((diff / 1000) % 60);

      countdownEl.textContent = `${dias} días, ${horas}h ${minutos}m ${segundos}s`;
    }

    actualizarCountdown();
    setInterval(actualizarCountdown, 1000);
  }

  // -------- FORMULARIO DE CONFIRMACIÓN -------- //
  const form = document.getElementById("form-asistencia");
  const mensaje = document.getElementById("mensaje-envio");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      form.classList.add("oculto");
      mensaje.classList.remove("oculto");
    });
  }

  // -------- BOTÓN VOLVER ARRIBA -------- //
  const volverBtn = document.querySelector(".volver-arriba");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      volverBtn.classList.add("visible");
    } else {
      volverBtn.classList.remove("visible");
    }
  });
});
