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
	 998: {
      slideBy: "page",
      autoplay: true,
      nav: false,
      speed: 1200,
      autoplayButtonOutput: false,
      mouseDrag: true,
      preventActionWhenRunning: true,
      controls: false,
    },
    768: {
      slideBy: "page",
      autoplay: true,
      nav: true,
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
