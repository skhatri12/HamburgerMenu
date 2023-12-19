$(document).ready(function () {
  $('.hamburger-menu').click(function () {

    $('.nav-menu').fadeToggle(700);
    $('.hamburger-menu').hide();
    $('.cross-menu').show();
  });


  $('.cross-menu').click(function () {
    $('.nav-menu').hide(200);
    $('.hamburger-menu').fadeToggle();
    $('.cross-menu').hide();
  })


  $(document).on('click', function (event) {
    if (!$(event.target).closest('.nav-menu, .hamburger-menu, .cross-menu').length) {
      $('.nav-menu').hide(200);
      $('.hamburger-menu').show();
      $('.cross-menu').hide();
    }
  });
});

