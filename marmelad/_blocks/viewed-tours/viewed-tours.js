function initViewedToursSlider() {
  const viewedToursSlider = new Swiper(".js-viewed-tours-slider", {
    slidesPerView: 4,
    spaceBetween: 32,
    loop: true,
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      640: {
        slidesPerView: 3,
      },
      960: {
        slidesPerView: 4,
      },
    },
  });
}
if ($('.js-viewed-tours-slider').length) {
  initViewedToursSlider();
}