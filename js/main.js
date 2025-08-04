// main.js
document.addEventListener("DOMContentLoaded", () => {
  // -------- GALERÍA CON MODAL -------- //
  const imagenes = document.querySelectorAll(".galeria-img");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalText = document.getElementById("modal-text");
  const closeModal = document.querySelector(".modal .close");
  const prevBtn = document.querySelector(".modal .prev");
  const nextBtn = document.querySelector(".modal .next");

  const textos = [
    "Nuestra primera foto juntos 💖",
    "Un viaje inolvidable 🌍",
    "El día en que dijimos sí 💍",
  ];

  let currentIndex = 0;

  function mostrarModal(index) {
    if (index >= 0 && index < imagenes.length) {
      modal.classList.remove("hidden");
      modalImg.src = imagenes[index].src;
      modalImg.alt = imagenes[index].alt;
      modalText.textContent = textos[index] || "";
      currentIndex = index;
    }
  }

  imagenes.forEach((img, index) => {
    img.addEventListener("click", (e) => {
      e.preventDefault();
      mostrarModal(index);
    });
  });

  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

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
  const diasEl = document.getElementById("dias");
  const horasEl = document.getElementById("horas");
  const minutosEl = document.getElementById("minutos");
  const segundosEl = document.getElementById("segundos");
  const countdownMessageEl = document.querySelector(".countdown-message");

  function actualizarCountdown() {
    const ahora = new Date();
    const diff = fechaBoda - ahora;

    if (diff <= 0) {
      countdownMessageEl.textContent = "¡Hoy es el gran día!";
      diasEl.textContent = "0";
      horasEl.textContent = "00";
      minutosEl.textContent = "00";
      segundosEl.textContent = "00";
      return;
    }

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    diasEl.textContent = dias;
    horasEl.textContent = horas < 10 ? `0${horas}` : horas;
    minutosEl.textContent = minutos < 10 ? `0${minutos}` : minutos;
    segundosEl.textContent = segundos < 10 ? `0${segundos}` : segundos;
  }

  if (diasEl && horasEl && minutosEl && segundosEl) {
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
  const heroSection = document.querySelector(".hero-section");
  const formSection = document.getElementById("form-asistencia");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      volverBtn.classList.add("visible");
    } else {
      volverBtn.classList.remove("visible");
    }
  });

  volverBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
