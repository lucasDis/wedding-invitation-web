# Plan de Mejora Semántica de la Web

## Background and Motivation
El usuario ha solicitado ajustes estéticos y de funcionalidad adicionales. Específicamente, el título `h1` ha quedado demasiado grande después de los cambios semánticos, el footer necesita un ajuste de colores (texto y título a negro, fondo verde claro), y el botón "Volver arriba" requiere cambios de estilo y una revisión de su funcionalidad. El problema del tamaño del h1 persiste. Adicionalmente, se solicita refactorizar clases genéricas como "content" por nombres más descriptivos. También se ha detectado que el footer no abarca todo el ancho de la página y tiene márgenes no deseados, además de requerir un cambio en el texto. Ahora, el texto del footer es demasiado grande y no está centrado, la sección completa del footer no está centrada, la imagen superior del footer no está en el borde superior, y la imagen inferior necesita ser más grande. El footer no abarca todo el ancho y está desplazado a la derecha.

## Key Challenges and Analysis
1.  **Estilo del h1:** El `font-size` del `h1` (`.main-names`) sigue siendo demasiado grande. La investigación inicial muestra que la propiedad `size: 28px;` en `.main-names` es inválida y el `font-size` actual está siendo aplicado a los `<span>` internos (`.bride-name`, `.groom-name`) en `em`s. Esto puede llevar a que el tamaño base del `h1` heredado sea grande, y los `em` lo amplifiquen. Para solucionarlo, aplicaremos `font-size` directamente al `h1.main-names` y eliminaremos la propiedad inválida.
2.  **Colores del Footer:** Asegurar el uso de las variables de color definidas en `:root` para mantener la coherencia.
3.  **Botón "Volver arriba":**
    *   **Estilo:** Definir un nuevo estilo para el botón que sea visualmente distinto.
    *   **Funcionalidad:** Identificar y corregir el motivo por el cual el botón no funciona correctamente, investigando tanto el HTML como el JavaScript. La lógica actual del JavaScript para la visibilidad y el cambio de ícono del botón parece ser el punto clave a revisar. El `pointer-events: none;` en el CSS era la causa de que no fuera clickeable, lo cual ya fue corregido.
4.  **Refactorización de Clases Genéricas:** Identificar y renombrar clases como "content" a nombres más específicos. Esto implica cambios tanto en los archivos HTML como en los CSS, asegurando que no se rompa el diseño ni la funcionalidad.
5.  **Ancho y Márgenes del Footer:** Se ha confirmado que el footer aún está dentro de un contenedor de Bootstrap (`.col-12`) que limita su ancho, y la clase `p-5` añade padding. Para asegurar que el footer ocupe el 100% del ancho disponible sin márgenes, deberá ser movido fuera de la estructura de cuadrícula de Bootstrap y la clase `p-5` eliminada.
6.  **Texto del Footer:** Actualizar el contenido de texto del footer para que sea un mensaje de agradecimiento.
7.  **Estilo del Footer (Texto y Centrado):** Ajustar el tamaño de la fuente del título (`.footer-save-title`) y el texto (`.footer-invitation-text`) del footer para que sean más pequeños y estén correctamente centrados. Asegurar que toda la sección del footer (`.footer-save-date`) esté centrada horizontalmente.
8.  **Posicionamiento de Imagen Superior del Footer:** Mover la imagen superior (`.footer-bouquet`) al borde superior de la sección para una transición visual suave.
9.  **Tamaño de Imagen Inferior del Footer:** Aumentar el tamaño de la imagen inferior (`.footer-botanical`).
10. **Desplazamiento del Footer:** El desplazamiento a la derecha y el ancho incorrecto del footer se deben a que se le aplicó `width: 100vw;` mientras el `main` content usa clases de Bootstrap que generan un padding lateral. `100vw` incluye el scrollbar, causando un desajuste. La solución es cambiar `width: 100vw;` a `width: 100%;` en `.footer-save-date` en `css/styles.css`.

## High-level Task Breakdown
- [x] **1. Actualizar el archivo `.cursor/scratchpad.md` con el "Background and Motivation" y el "Key Challenges and Analysis" para la mejora semántica.** (Completado por el Planner)
- [x] **2. Identificar las áreas clave para la mejora semántica en `index.html` y `pages/formulario.html`.**
    - Criterio de Éxito: Se ha realizado una revisión exhaustiva de ambos archivos y se han anotado las secciones a modificar.
- [x] **3. Aplicar etiquetas HTML semánticas (`header`, `nav`, `main`, `article`, `section`, `footer`, etc.) en `index.html`.**
    - Criterio de Éxito: Todas las secciones principales de `index.html` utilizan las etiquetas semánticas apropiadas, sin romper el diseño visual.
- [x] **4. Asegurar una jerarquía de encabezados (`h1`, `h2`, etc.) lógica en `index.html`.**
    - Criterio de Éxito: Los encabezados reflejan la estructura del contenido de manera lógica y coherente.
- [x] **5. Añadir atributos `alt` descriptivos a las imágenes en `index.html` y `pages/formulario.html`.**
    - Criterio de Éxito: Todas las imágenes significativas tienen un atributo `alt` que describe su contenido.
- [x] **6. Mejorar la semántica de `pages/formulario.html`, asegurando que los campos estén asociados correctamente con sus etiquetas (`label`).**
    - Criterio de Éxito: Cada campo de formulario (`input`, `textarea`, `select`) está asociado a su respectiva etiqueta `label` mediante los atributos `for` e `id`.
- [x] **7. Verificar la coherencia del CSS y JavaScript después de los cambios semánticos.**
    - Criterio de Éxito: El diseño de la página no se ha visto afectado negativamente y toda la funcionalidad de JavaScript sigue funcionando correctamente.
- [x] **8. Ajustar el estilo del h1 y del footer en `css/styles.css`.**
    - Criterio de Éxito: El `h1` (nombres de los novios) mantiene su estética original, el texto y el título del footer son blancos y la animación de flotación del footer ha sido eliminada.
- [x] **9. Ajustar el tamaño del `h1` en `css/styles.css`.**
    - Criterio de Éxito: El `h1` tiene un tamaño de fuente que lo hace visualmente más equilibrado, especialmente en dispositivos móviles.
- [x] **10. Cambiar los colores del footer en `css/styles.css`.**
    - Criterio de Éxito: El título y el texto del footer son de color `var(--dark-green)` y el fondo es de un verde más claro (usaré `var(--primary-green)` o un nuevo color si es necesario).
- [x] **11. Cambiar el estilo del botón "volver-arriba" en `css/styles.css`.**
    - Criterio de Éxito: El botón "volver-arriba" tiene un nuevo estilo visual distinto y armonioso con el resto del diseño.
- [x] **12. Debuggear y corregir la funcionalidad del botón "volver-arriba" en `js/main.js` y `css/styles.css`.**
    - Criterio de Éxito: El botón es clickeable y la funcionalidad de desplazamiento hacia arriba/hacia la galería funciona correctamente.
- [x] **13. Corregir el tamaño del h1 en `css/styles.css`.**
    - Criterio de Éxito: El `h1` tiene el tamaño adecuado en todas las resoluciones, ajustando directamente el `font-size` en `.main-names` y eliminando la propiedad `size` inválida.
- [x] **14. Refactorizar clases genéricas en HTML y CSS (ej. "content").**
    - Criterio de Éxito: Las clases genéricas han sido reemplazadas por nombres más descriptivos en todos los archivos afectados (HTML y CSS) y la estética/funcionalidad se mantiene.
- [x] **15. Asegurar el ancho completo y eliminar márgenes no deseados del footer en `index.html` y `css/styles.css`.**
    - Criterio de Éxito: El footer ocupa el 100% del ancho de la ventana y no tiene espacio en blanco en los laterales o en la parte inferior. El texto del footer es de agradecimiento.
- [x] **16. Ajustar el tamaño y centrado del texto del footer en `css/styles.css`.**
    - Criterio de Éxito: El título (`.footer-save-title`) y el texto (`.footer-invitation-text`) del footer tienen un tamaño adecuado y están centrados.
- [x] **17. Centrar toda la sección del footer en `css/styles.css`.**
    - Criterio de Éxito: El `.footer-save-date` está centrado horizontalmente en la página.
- [x] **18. Posicionar la imagen superior del footer (`.footer-bouquet`) en el borde superior en `css/styles.css`.**
    - Criterio de Éxito: La imagen `.footer-bouquet` se encuentra en la parte superior de su contenedor, creando una transición suave con la sección anterior.
- [x] **19. Aumentar el tamaño de la imagen inferior del footer (`.footer-botanical`) en `css/styles.css`.**
    - Criterio de Éxito: La imagen `.footer-botanical` es visiblemente más grande.
- [ ] **20. Corregir el desplazamiento del footer en `css/styles.css`.**
    - Criterio de Éxito: El footer está correctamente centrado y no presenta desplazamiento horizontal. La causa (`width: 100vw;`) ha sido corregida.

## Project Status Board
- [x] Tarea 1: Actualizar `scratchpad.md` con el plan.
- [x] Tarea 2: Identificar áreas clave para mejora semántica.
- [x] Tarea 3: Aplicar etiquetas semánticas en `index.html`.
- [x] Tarea 4: Asegurar jerarquía de encabezados en `index.html`.
- [x] Tarea 5: Añadir atributos `alt` a las imágenes.
- [x] Tarea 6: Mejorar semántica de `pages/formulario.html`.
- [x] Tarea 7: Verificar coherencia de CSS y JavaScript.
- [x] Tarea 8: Ajustar estilos del h1 y footer en `css/styles.css`. (Revisar)
- [x] Tarea 9: Ajustar el tamaño del `h1` en `css/styles.css`.
- [x] Tarea 10: Cambiar los colores del footer en `css/styles.css`. (Revisar)
- [x] Tarea 11: Cambiar el estilo del botón "volver-arriba" en `css/styles.css`.
- [x] Tarea 12: Debuggear y corregir la funcionalidad del botón "volver-arriba" en `js/main.js` y `css/styles.css`.
- [x] Tarea 13: Corregir el tamaño del h1 en `css/styles.css`.
- [x] Tarea 14: Refactorizar clases genéricas en HTML y CSS (ej. "content").
- [x] Tarea 15: Asegurar el ancho completo y eliminar márgenes no deseados del footer en `index.html` y `css/styles.css`.
- [x] Tarea 16: Ajustar el tamaño y centrado del texto del footer en `css/styles.css`.
- [x] Tarea 17: Centrar toda la sección del footer en `css/styles.css`.
- [x] Tarea 18: Posicionar la imagen superior del footer (`.footer-bouquet`) en el borde superior en `css/styles.css`. (Ya hice el `background-position` y el `margin-top` negativo).
- [x] Tarea 19: Aumentar el tamaño de la imagen inferior del footer (`.footer-botanical`) en `css/styles.css`.
- [ ] Tarea 20: Corregir el desplazamiento del footer en `css/styles.css`.

## Executor's Feedback or Assistance Requests
Se ha diagnosticado el problema del footer: el `width: 100vw;` en `.footer-save-date` está causando un desplazamiento horizontal debido a la barra de desplazamiento. La solución es cambiarlo a `width: 100%;` y ajustar el padding. Se procederá a implementar esto.