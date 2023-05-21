
$(document).on("mouseover", ".tooltip-img", function () {


    $(this).siblings(".tooltip").fadeIn(500);
  })
  .on("mouseout", ".tooltip-img", function () {
    $(this).siblings(".tooltip").fadeOut(400);
});
