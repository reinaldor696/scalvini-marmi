/*------------------------------
Init ScrollSmoother // Inicio de ScrollSmoother
------------------------------*/
// create the scrollSmoother before your scrollTriggers
// crea el scrollSmoother antes de tus scrollTriggers
const smoother = ScrollSmoother.create({
  content: content, // id del contenido
  wrapper: wrapper, // id del scroll
  // how long (in seconds) it takes to "catch up" to the native scroll position
  smooth: 1,  // cuánto tiempo (en segundos) tarda en "alcanzar" la posición de desplazamiento nativa
  // looks for data-speed and data-lag attributes on elements 
  effects: true, // busca atributos de velocidad y retardo de datos en los elementos
  // Activates the Scrollbar
  normalizeScroll: false, // Activa la barra de navegaciòn el "Scrollbar"
  // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
  smoothTouch: 0.1  // tiempo de suavizado mucho más corto en dispositivos táctiles (por defecto NO hay suavizado en dispositivos táctiles)
});