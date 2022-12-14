const galleryContentThumb = new Swiper(".js-gallery-content-thumb", {
  slidesPerView: "auto",
  spaceBetween: 10,
  watchSlidesProgress: true,
  loop: false,
});
const galleryContentSlider = new Swiper(".js-gallery-content-slider", {
  slidesPerView: 1,
  spaceBetween: 72,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: galleryContentThumb,
  },
});