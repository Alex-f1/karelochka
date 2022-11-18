function sortingTours() {
  $('.js-sorting-on').on('click', function (event) {
    event.preventDefault();
    const thisElem = $(this);
  
    
  
    if (thisElem.hasClass('_is-sort-ascending')) {
      thisElem.addClass('_is-sort-descending');
      thisElem.removeClass('_is-sort-ascending');
    } else {
      thisElem.addClass('_is-sort-ascending');
      thisElem.removeClass('_is-sort-descending');
    }
  
    thisElem.addClass('_is-active').siblings().removeClass('_is-active');
    thisElem.addClass('_is-active').siblings().removeClass('_is-sort-descending');
    thisElem.addClass('_is-active').siblings().removeClass('_is-sort-ascending');
  
  });
  
  
}

$('.js-upcoming-dates').on('click', function () {
  $(this).toggleClass('_is-active');
  $(this).find('.js-upcoming-dates-other').slideToggle();
});

if ($('.sorting-tours').length) {
  sortingTours();
}