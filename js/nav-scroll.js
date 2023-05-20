
$(window).scroll(function() {
  if ($(window).scrollTop() > 0) {
    $(".header").addClass("container-nav--scrolled");
    $(".nav__link").addClass("nav-text");
  } else {
    $(".header").removeClass("container-nav--scrolled");
    $(".nav__link").removeClass("nav-text");
  }
});
