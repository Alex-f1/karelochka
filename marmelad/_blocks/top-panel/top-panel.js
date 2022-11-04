$('.js-button-burger').on('click', function () {
  $(this).toggleClass('_is-active');
  $('.main-menu').toggleClass('_is-show');
  $('.top-panel').toggleClass('_is-show-menu');
});