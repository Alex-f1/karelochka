function searchParameters() {
  $('.js-search-parameters').oneLineMenu({
    minWidth: 480,
    lastClass: 'search-parameters__parameter-last',
  });
  
  $(window).on('load resize', function () {
    const searchParametersItems = $('.search-parameters__items');
    let containOffSetLeft = $('.contain').offset().left + 20;
  
    searchParametersItems.css('margin-left', containOffSetLeft);
  
    $('.search-parameters__parameter-last').on('click', function () {
      $(this).toggleClass('_is-active');
      $(this)
        .closest('.search-parameters__item').siblings()
        .find('.search-parameters__parameter-last').removeClass('_is-active');
    });
  });

  $(document).on('click', function (e) {
    if ($(e.target).closest('.js-search-parameters li').length) {
      return;
    }

    $('.search-parameters__parameter-last').removeClass('_is-active');
  });
}


if ($('.js-search-parameters').length) {
  searchParameters();
}