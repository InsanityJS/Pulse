// Скрипт Слайдера
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
// Срипт для стрелок назад и вперед
document.querySelector(".next").onclick = function () {
  slider.goTo("next");
};
document.querySelector(".prev").onclick = function () {
  slider.goTo("prev");
};
// Скрипт для табов
(function ($) {
  $(function () {
    $("ul.catalog__tabs").on(
      "click",
      "li:not(.catalog__tab_active)",
      function () {
        $(this)
          .addClass("catalog__tab_active")
          .siblings()
          .removeClass("catalog__tab_active")
          .closest("div.container")
          .find("div.catalog__content")
          .removeClass("catalog__content_active")
          .eq($(this).index())
          .addClass("catalog__content_active");
      }
    );
  });

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".catalog-item__content")
          .eq(i)
          .toggleClass("catalog-item__content_active");
        $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
      });
    });
  }
  toggleSlide(".catalog-item__link");
  toggleSlide(".catalog-item__back");

  //Modal

  $("[data-modal=consultation]").on("click", function () {
    $(".overlay, #consultation").fadeIn("slow");
  });
  $(".modal__close").on("click", function () {
    $(".overlay, #consultation, #order, #thanks").fadeOut("slow");
  });
  $(".button_mini").each(function (i) {
    $(this).on("click", function () {
      $("#order .modal__descr").text($(".catalog-item__subtitle").eq(i).text());
      $(".overlay, #order").fadeIn("slow");
    });
  });
  function validateForms(form) {
    $(form).validate({
      rules: {
        name: "required",
        phone: "required",
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: "Пожалуйста, введите свое имя",
        phone: "Пожалуйста, введите свой мобильный номер",
        email: {
          required: "Пожалуйста, введите свой почтовый ящик",
          email: "Неверный формат ввода, пример ввода - name@domain.com",
        },
      },
    });
  }

  validateForms("#order form");
  validateForms("#consultation form");
  validateForms("#consultation-form");

  $("input[name=phone]").mask("+3 (999) 999-9999");

  $("form").submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize(),
    }).done(function () {
      $(this).find("input").val("");
      $("#consultation, #order").fadeOut();
      $(".overlay, #thanks").fadeIn("slow");

      $("form").trigger("reset");
    });
    return false;
  });
})(jQuery);
