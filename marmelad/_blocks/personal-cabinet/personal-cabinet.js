$('.js-button-more-info').on('click', function () {
  $(this).toggleClass('_is-active');
  $(this)
    .closest('.personal-cabinet__item')
    .find('.personal-cabinet__container').stop().slideToggle()
});

$('.js-button-tab').on('click', function () {
  $(this).addClass('_is-active').siblings().removeClass('_is-active');
  $('.personal-cabinet__tabs-content')
    .find('.personal-cabinet__tab-content')
    .removeClass('_is-active-tab-content').eq($(this).index()).fadeIn().addClass('_is-active-tab-content').siblings().removeClass('_is-active-tab-content').fadeOut();
})

$('.js-button-show-password').on('click', function () {
  $(this).toggleClass('_is-show-password');
  let inputPassword = $(this).closest('.contacts-info__input').find('input');
  if ($('.js-button-show-password').hasClass('_is-show-password')) {
    inputPassword.attr('type', 'text');
  } else {
    inputPassword.attr('type', 'password');
  }
})