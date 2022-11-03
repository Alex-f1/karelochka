function initHeroSlider() {
  const heroSlider = new Swiper(".js-hero-slider", {
    slidesPerView: 1,
    speed: 1000,
    effect: "fade",
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

if ($('.js-hero-slider').length) {
  initHeroSlider();
}