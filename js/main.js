$(function() {
  $('#hamburger').click(function() {
    $('.collapsable-menu, .shadow-screen').addClass('active');

  });

  $('#cross').click(function() {
    $('.collapsable-menu, .shadow-screen').removeClass('active');
  });
});
