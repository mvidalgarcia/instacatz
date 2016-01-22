$(function() {
  $(document).on('click', '#hamburger', function() {
    $('.collapsable-menu, .shadow-screen').addClass('active');

  });

  $(document).on('click', '#cross', function() {
    $('.collapsable-menu, .shadow-screen').removeClass('active');
  });
});
