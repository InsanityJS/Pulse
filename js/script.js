$(document).ready(function () {
  $(".carousel__iner").slick({
    speed: 1200,
    adaptiveHeight: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="../icons/back.svg"></img></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="../icons/next.svg"></img></button>',
  });
});
