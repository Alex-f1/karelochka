$(window).on('load resize', function () {
  const cardTourContainer = $('.card-tour__container');
  let containOffSetLeft = $('.contain').offset().left + 20;

  cardTourContainer.css('margin-left', containOffSetLeft);

});

function fixedExtraMenu() {
 
  let positions = [],
    currentActive = null,
    links = $('.sidebar-info .scroll-to');
  $('.on-anchor').each(function () {
    positions.push({
      top: $(this).position().top + 50,
      a: links.filter('[href="#' + $(this).attr('id') + '"]')
    });
  });
  positions = positions.reverse();
  $(window).on('scroll', function () {
    const winTop = $(window).scrollTop();

    for (let i = 0; i < positions.length; i++) {
      if (positions[i].top < winTop) {
        if (currentActive !== i) {
          currentActive = i;
          links.closest('li').removeClass('_is-active');
          positions[i].a.closest('li').addClass("_is-active");
        }

        break;
      }
    }
  });
}

fixedExtraMenu();

$('.js-residence-head').on('click', function() {
  const thisElem = $(this);
  thisElem.toggleClass('_is-active');
  thisElem.siblings('.js-residence-container').slideToggle();
  
});