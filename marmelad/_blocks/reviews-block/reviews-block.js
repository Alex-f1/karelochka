function initReviewsSlider() {
  var swiper = new Swiper(".js-reviews-slider", {
    slidesPerView: 2,
    spaceBetween: 30,
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
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
      }
    },
  });
}

initReviewsSlider();