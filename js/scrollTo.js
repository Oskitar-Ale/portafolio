
$(".nav__link").click(function(event) {
  event.preventDefault();
  const indiceSeccion = $(this).data("section");
  desplazarseHaciaSeccion(indiceSeccion);
});

function desplazarseHaciaSeccion(indiceSeccion) {
  const secciones = $("section");
  const seccionObjetivo = secciones.eq(indiceSeccion);
  const posicionObjetivo = seccionObjetivo.offset().top - 100;

  $("html, body").animate({
    scrollTop: posicionObjetivo
  }, "slow");
}
