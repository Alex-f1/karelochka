function tourProgramDates() {
  $('.js-tour-program-dates').on('click', function() {
    $(this).siblings('.tour-program__dates-dropdown').toggleClass('_is-show')
  });
  
  $(document).on('click', function (e) {
    if ($(e.target).closest('.js-tour-program-dates').length) {
      return;
    }
  
    $('.tour-program__dates-dropdown').removeClass('_is-show');
  });
}

function TourProgramMoreText() {

  $('.tour-program__card').each(function() {
    const thisElemCard = $(this)
    const getTourProgramText = thisElemCard.find('.tour-program__text').height();

    if (getTourProgramText > 54) {
      thisElemCard.find('.tour-program__text').addClass('_is-part-text');
      thisElemCard.find('.tour-program__button-more-text').addClass('_is-show');
  
      thisElemCard.find('.tour-program__button-more-text').on('click', function (event) {
        event.preventDefault();
        const thisElem = $(this);
        thisElem.toggleClass('_is-more');
        thisElem.closest('.tour-program__content').find('.tour-program__text')
        .css('height', getTourProgramText);
        thisElem.closest('.tour-program__content').find('.tour-program__text')
        .removeClass('_is-part-text');
  
        if (!thisElem.hasClass('_is-more')) {
          thisElem.closest('.tour-program__content').find('.tour-program__text')
          .css('height', 54);
          thisElem.closest('.tour-program__content').find('.tour-program__text')
          .addClass('_is-part-text');
        }
      });
    }

  });
}

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

tourProgramDates();
TourProgramMoreText();
fixedExtraMenu();

$('.js-residence-head').on('click', function() {
  const thisElem = $(this);
  thisElem.toggleClass('_is-active');
  thisElem.siblings('.js-residence-container').slideToggle();
  
});