$('.js-button-more-info').on('click', function() {
  $(this).toggleClass('_is-active');
  $(this)
    .closest('.personal-cabinet__item')
    .find('.personal-cabinet__container').stop().slideToggle()
});