// Contador regresivo
function updateCountdown() {
  const weddingDate = new Date();
  weddingDate.setDate(weddingDate.getDate() + 250);

  const now = new Date().getTime();
  const distance = weddingDate.getTime() - now;

  if (distance > 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days
      .toString()
      .padStart(2, "0");
    document.getElementById("hours").textContent = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("minutes").textContent = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("seconds").textContent = seconds
      .toString()
      .padStart(2, "0");
  } else {
    // Si ya pasó la fecha, mostrar el botón de confirmación
    document.querySelector(".countdown-container").innerHTML = `
                    <div class="countdown-message" style="font-size: 1.2em; margin-bottom: 20px;">
                        ¡Es hora de celebrar!
                    </div>
                    <a href="#" class="confirm-button">Confirmar Asistencia</a>
                `;
  }
}

// Actualizar cada segundo
setInterval(updateCountdown, 1000);

// Ejecutar inmediatamente
updateCountdown();
