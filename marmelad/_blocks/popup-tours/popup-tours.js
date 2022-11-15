$('.js-popup-button-choose-tours').on('click', function () {
  const thisElem = $(this);

  thisElem.toggleClass('_is-choose');
  thisElem
    .closest('.popup-tours__item-row')
    .siblings()
    .find('.js-popup-button-choose-tours').removeClass('_is-choose');
})