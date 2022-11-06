function articlesContent() {
  const getArticlesContent = $('.js-articles-content').height();

  if (getArticlesContent > 710) {
    $('.js-articles-content').addClass('_is-part-text');
    $('.js-button-more-articles-content').addClass('_is-show');

    $('.js-button-more-articles-content').on('click', function () {
      $(this).toggleClass('_is-more');
      $('.js-articles-content').css('height', getArticlesContent);
      $('.js-articles-content').removeClass('_is-part-text');

      if (!$('.js-button-more-articles-content').hasClass('_is-more')) {
        $('.js-articles-content').css('height', 710);
        $('.js-articles-content').addClass('_is-part-text');
      }
    });
  }
}

articlesContent();