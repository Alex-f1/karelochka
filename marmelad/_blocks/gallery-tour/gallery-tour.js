const galleryTourThumb = new Swiper(".js-gallery-tour-thumb", {
  slidesPerView: "auto",
  spaceBetween: 8,
});
const galleryTour = new Swiper(".js-gallery-tour", {
  slidesPerView: "auto",
  spaceBetween: 32,
  loop: true,
  simulateTouch: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: galleryTourThumb,
  },
});