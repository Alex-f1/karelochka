$('.js-button-burger').on('click', function () {
  $(this).toggleClass('_is-active');
  $('.main-menu').toggleClass('_is-show');
  $('.top-panel').toggleClass('_is-show-menu');
});

$(document).on('click', function (e) {
  if ($(e.target).closest('.top-panel').length) {
    return;
  }

  $('.js-button-burger').removeClass('_is-active');
  $('.main-menu').removeClass('_is-show');
  $('.top-panel').removeClass('_is-show-menu');
});