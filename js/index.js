// $(function () {
//   const btn1 = $("#FrontEnd");
//   const btn2 = $("#BackEnd");
//   const imageContainer = $(".container-icons");

//   // Rutas de las imágenes
//   const fotos1 = [
//     "./img/html-5-svgrepo-com.svg",
//     "./img/css-3-svgrepo-com.svg",
//     "./img/javascript-svgrepo-com.svg",
//     "./img/bootstrap-svgrepo-com.svg",
//   ];
//   const fotos2 = [
//     "./img/arduino-svgrepo-com.svg",
//     "./img/java-svgrepo-com.svg",
//   ];
//   // Función para mostrar las fotos en el contenedor
//   function mostrarFotos(fotos) {
//     // Limpiar el contenedor de imágenes
//     imageContainer.empty();

//     // Crear y añadir los divs con imágenes al contenedor
//     fotos.forEach((foto) => {
//       const div = $("<div>").addClass("tooltip-relative image-container");
//       const img = $("<img>").addClass("tooltip-img").attr("src", foto);
//       const tooltip = $("<div>").addClass("tooltip").text('hlaaaa');
//       div.append(img, tooltip);
//       imageContainer.append(div);
//     });
//   }

//   // Evento de escucha en los botones
//   btn1.on("click", function () {
//     mostrarFotos(fotos1);
//   });

//   btn2.on("click", function () {
//     mostrarFotos(fotos2);
//   });
// });




var typed = new Typed(".auto-type", {
  strings: ["a Oscar Alejandro", "a Dev", "a Designer", "a Freelancer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});



























$(function () {
  const btn1 = $("#FrontEnd");
  const btn2 = $("#BackEnd");
  const btn3 = $("#Otros");
  const imageContainer = $(".container-icons");

  // Rutas de las imágenes
  const fotos1 = [
    "./img/html-5-svgrepo-com.svg",
    "./img/css-3-svgrepo-com.svg",
    "./img/javascript-svgrepo-com.svg",
    "./img/bootstrap-svgrepo-com.svg",
    "./img/jquery-svgrepo-com.svg",
  ];
  const fotos2 = [
    "./img/django-icon.svg",
    "./img/java-svgrepo-com.svg",
    "./img/flask.svg",
    "./img/postgresql-svgrepo-com.svg",
    "./img/mysql-logo-svgrepo-com.svg",
    "./img/mariadb-svgrepo-com.svg",
  ];
  const fotos3 = [
    "./img/git-svgrepo-com.svg",
    "./img/github-142-svgrepo-com.svg",
    "./img/linux-svgrepo-com.svg",
    "./img/docker2-svgrepo-com.svg",
    "./img/lua-svgrepo-com.svg",
    "./img/python-svgrepo-com.svg"
  ];

  const tooltips = ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP","JQUERY"];
  const tooltips2 = ["DJANGO", "JAVA","FLASK","POSTGRESQL","MYSQL","MARIADB"];
  const tooltips3 = ["GIT", "GITHUB","LINUX","DOCKER","LUA"];

  // Función para mostrar las fotos en el contenedor con transiciones
  function mostrarFotosConTransicion(fotos, tooltips) {
    // Ocultar el contenedor de imágenes con una transición de 1 segundo
    imageContainer.fadeOut(500, function () {
      // Limpiar el contenedor de imágenes
      imageContainer.empty();

      // Crear y añadir los divs con imágenes al contenedor
      fotos.forEach((foto, text) => {
        const div = $("<div>").addClass("tooltip-relative image-container");
        const img = $("<img>").addClass("tooltip-img").attr("src", foto);
        const tooltip = $("<div>").addClass("tooltip").text(tooltips[text]);
        div.append(img, tooltip);
        imageContainer.append(div);
      });

      // Mostrar el contenedor de imágenes con una transición de 1 segundo
      imageContainer.fadeIn(500);
    });
  }

  // Mostrar las fotos del botón 1 al cargar la página
  mostrarFotosConTransicion(fotos1, tooltips);

  // Eventos de escucha en los botones
  btn1.on("click", function () {
    event.preventDefault(); // Evitar la recarga de la página

    mostrarFotosConTransicion(fotos1, tooltips);
  });

  btn2.on("click", function () {
    event.preventDefault(); // Evitar la recarga de la página

    mostrarFotosConTransicion(fotos2, tooltips2);
  });

  btn3.on("click", function () {
    event.preventDefault(); // Evitar la recarga de la página

    mostrarFotosConTransicion(fotos3, tooltips3);
  });
});
