document
  .querySelectorAll(".fade-in")
  .forEach((el) => el.classList.add("visible"));

// -------- CONTADOR REGRESIVO -------- //

(function () {
  "use strict";

  // Configuration
  const CONFIG = {
    weddingDate: "2026-09-15T18:00:00",
    scrollOffset: 100,
    animationDelay: 100,
  };

  // DOM Elements
  const elements = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds"),
    countdown: document.getElementById("countdown"),
    navbar: document.querySelector(".navbar"),
    fadeElements: document.querySelectorAll(".fade-in"),
    galleryItems: document.querySelectorAll(".gallery-item"),
    navLinks: document.querySelectorAll('a[href^="#"]'),
  };

  // Countdown Timer Functionality
  const countdown = {
    targetDate: new Date(CONFIG.weddingDate).getTime(),

    init() {
      this.update();
      this.interval = setInterval(() => this.update(), 1000);
    },

    update() {
      const now = new Date().getTime();
      const distance = this.targetDate - now;

      if (distance > 0) {
        const times = this.calculateTime(distance);
        this.updateDisplay(times);
      } else {
        this.showWeddingDay();
      }
    },

    calculateTime(distance) {
      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      };
    },

    updateDisplay(times) {
      if (elements.days) elements.days.textContent = this.padZero(times.days);
      if (elements.hours)
        elements.hours.textContent = this.padZero(times.hours);
      if (elements.minutes)
        elements.minutes.textContent = this.padZero(times.minutes);
      if (elements.seconds)
        elements.seconds.textContent = this.padZero(times.seconds);
    },

    padZero(num) {
      return num < 10 ? "0" + num : num;
    },

    showWeddingDay() {
      if (elements.countdown) {
        elements.countdown.innerHTML = `
                  <div class="countdown-item">
                      <div class="countdown-number">¡Hoy!</div>
                      <div class="countdown-label">Es el gran día</div>
                  </div>
              `;
      }
      clearInterval(this.interval);
    },

    destroy() {
      if (this.interval) {
        clearInterval(this.interval);
      }
    },
  };

  countdown.init();

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
    const icon = volverBtn.querySelector("i");
    if (window.scrollY > 200) {
      volverBtn.classList.add("visible");
      icon.className = "bi bi-chevron-up";
    } else {
      volverBtn.classList.remove("visible");
      icon.className = "bi bi-chevron-down";
    }
  });

  volverBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const icon = volverBtn.querySelector("i");
    if (window.scrollY > 200) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const galeria = document.getElementById("galeria");
      galeria?.scrollIntoView({ behavior: "smooth" });
    }
  });

  // -------- CARRUSEL -------- //

  const carousel = document.querySelector('.gallery-grid');
  if (carousel) {
    const items = carousel.querySelectorAll('.gallery-item');
    let currentIndex = 0;
    const totalItems = items.length;
    const slidesPerView = window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1;
    const spaceBetween = window.innerWidth > 1024 ? 30 : window.innerWidth > 768 ? 20 : 10;
  
    function updateCarousel() {
      carousel.style.transform = `translateX(-${currentIndex * (100 / slidesPerView + spaceBetween / slidesPerView)}%)`;
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalItems;
      updateCarousel();
    }
  
    setInterval(nextSlide, 6000); // 6s
    updateCarousel(); // Inicializar
  }
})

// -------- FUNCIONALIDAD DE MODALES -------- //

// Función para abrir modal
function openModal(modalId) {
  const modal = document.getElementById(`modal-${modalId}`);
  if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevenir scroll del body
  }
}

// Función para cerrar modal
function closeModal(modalId) {
  const modal = document.getElementById(`modal-${modalId}`);
  if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = ''; // Restaurar scroll del body
  }
}

// Event listeners para abrir modales
document.addEventListener('DOMContentLoaded', function() {
  // Botones que abren modales
  const modalTriggers = document.querySelectorAll('[data-modal]');
  
  modalTriggers.forEach(trigger => {
      trigger.addEventListener('click', function(e) {
          e.preventDefault();
          const modalId = this.getAttribute('data-modal');
          openModal(modalId);
      });
  });
  
  // Cerrar modal al hacer click fuera del contenido
  const modalOverlays = document.querySelectorAll('.modal-overlay');
  
  modalOverlays.forEach(overlay => {
      overlay.addEventListener('click', function(e) {
          if (e.target === this) {
              const modalId = this.id.replace('modal-', '');
              closeModal(modalId);
          }
      });
  });
  
  // Cerrar modal con tecla ESC
  document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
          const activeModal = document.querySelector('.modal-overlay.active');
          if (activeModal) {
              const modalId = activeModal.id.replace('modal-', '');
              closeModal(modalId);
          }
      }
  });
  
  // Manejar formularios de modales
  const forms = document.querySelectorAll('#modal-rsvp form, #modal-musica form');
  
  forms.forEach(form => {
      form.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Cerrar el modal actual
          const currentModal = this.closest('.modal-overlay');
          const modalId = currentModal.id.replace('modal-', '');
          closeModal(modalId);
          
          // Mostrar mensaje de éxito
          let successText = '¡Tu mensaje ha sido enviado correctamente!';
          
          if (modalId === 'rsvp') {
              successText = '¡Gracias por confirmar tu asistencia!';
          } else if (modalId === 'musica') {
              successText = '¡Gracias por tu sugerencia musical!';
          }
          
          document.getElementById('success-text').textContent = successText;
          
          setTimeout(() => {
              openModal('success');
          }, 300);
          
          // Resetear formulario
          this.reset();
      });
  });
});

// Funciones globales para que funcionen desde HTML onclick
window.openModal = openModal;
window.closeModal = closeModal;
