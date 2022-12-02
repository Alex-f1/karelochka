
$('.js-birthday-date').each(function (i, el) {
  var className = '.js-birthday-date' + i;
  $(el).addClass(className.replace('.', ''));
  new AirDatepicker(className, {
    autoClose: true,
    position: 'bottom left',
  });
})

function initCheckbox() {
  $('.js-checkbox').on('click', function (event) {
    event.preventDefault()
    $(this).toggleClass('_is-checked');

    if ($(this).hasClass('_is-checked')) {
      $(this).find('input').prop('checked', true);
    } else {
      $(this).find('input').prop('checked', false);
    }
  });
}


/* $('.js-add-tourist').on('click', function () {
  const formClone = $(this).closest('.contacts-info').find('.contacts-info__form').first().clone().addClass('_is-new-tourist');

  formClone.appendTo('.contacts-info__section');


  setTimeout(function () {
    let newTourist = $('.contacts-info__form._is-new-tourist').last();
    newTourist.find('input').val('');
    newTourist.find('.js-checkbox').removeClass('_is-checked');
    newTourist.find('input').prop('checked', false);

    $('.js-button-remove-new-tourist').on('click', function () {
      $(this).closest('.contacts-info__form._is-new-tourist').remove();
    })
    $('.contacts-info select').each(function () {
    $(this).select2({
      dropdownPosition: 'below',
      minimumResultsForSearch: -1,
      width: '100%',
      dropdownParent: $(this).closest('.contacts-info__select')
    });
  });
  }, 100)

  new AirDatepicker('.contacts-info__form._is-new-tourist .js-birthday-date', {
    autoClose: true,
    position: 'bottom left',
  });

  initCheckbox();

}); */

initCheckbox();
