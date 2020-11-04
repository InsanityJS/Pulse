////$(document).ready(function () {
////  $(".carousel__iner").slick({
////    speed: 1200,
////    adaptiveHeight: false,
////    prevArrow:
////      '<button type="button" class="slick-prev"><img src="icons/back.svg"></img></button>',
////    nextArrow:
////      '<button type="button" class="slick-next"><img src="icons/next.svg"></img></button>',
////  });
////});
////$(document).ready(function () {
////  $(".owl-carousel").owlCarousel({
////    loop: true,
////    items: 1,
////    nav: true,
////  });
////});
//const owl = $(".owl-carousel");
//owl.owlCarousel({
//  loop: true,
//  items: 1,
//  dots: false,
//});
//$(".next").click(function () {
//  owl.trigger("next.owl.carousel", [1200]);
//});
//$(".prev").click(function () {
//  owl.trigger("prev.owl.carousel", [1200]);
//});
const slider = tns({
  container: ".slider",
  slideBy: "page",
  autoplay: true,
  nav: false,
  speed: 1200,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventActionWhenRunning: true,
  controls: false,
  responsive: {
    768: {
      slideBy: "page",
      autoplay: true,
      nav: false,
      speed: 1200,
      autoplayButtonOutput: false,
      mouseDrag: true,
      preventActionWhenRunning: true,
      controls: false,
    },
    320: {
      nav: true,
      controls: false,
      navContainer: true,
      autoplay: false,
    },
  },
});
document.querySelector(".next").onclick = function () {
  slider.goTo("next");
};
document.querySelector(".prev").onclick = function () {
  slider.goTo("prev");
};
