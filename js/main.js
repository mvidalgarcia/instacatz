$(function() {
  $('#hamburger').click(function() {
    $('.collapsable-menu, .side-screen').addClass('active');

  });

  $('#cross').click(function() {
    $('.collapsable-menu, .side-screen').removeClass('active');
  });
});
