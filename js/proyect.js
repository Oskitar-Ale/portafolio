$(document).ready(function() {
    $(".card").click(function() {
      $(this).toggleClass("flipped");
      $(this).find(".message").toggleClass("hidden");
    });
  });
  