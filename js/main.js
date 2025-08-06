document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));

// -------- CONTADOR REGRESIVO -------- //

(function() {
  'use strict';

  // Configuration
  const CONFIG = {
      weddingDate: '2026-02-15T18:00:00',
      scrollOffset: 100,
      animationDelay: 100
  };

  // DOM Elements
  const elements = {
      days: document.getElementById('days'),
      hours: document.getElementById('hours'),
      minutes: document.getElementById('minutes'),
      seconds: document.getElementById('seconds'),
      countdown: document.getElementById('countdown'),
      navbar: document.querySelector('.navbar'),
      fadeElements: document.querySelectorAll('.fade-in'),
      galleryItems: document.querySelectorAll('.gallery-item'),
      navLinks: document.querySelectorAll('a[href^="#"]')
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
              hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
              minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
              seconds: Math.floor((distance % (1000 * 60)) / 1000)
          };
      },
      
      updateDisplay(times) {
          if (elements.days) elements.days.textContent = this.padZero(times.days);
          if (elements.hours) elements.hours.textContent = this.padZero(times.hours);
          if (elements.minutes) elements.minutes.textContent = this.padZero(times.minutes);
          if (elements.seconds) elements.seconds.textContent = this.padZero(times.seconds);
      },
      
      padZero(num) {
          return num < 10 ? '0' + num : num;
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
      }
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
})();