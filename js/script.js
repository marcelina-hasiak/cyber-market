$(document).ready(function() {
    $("svg.main-nav__element__icon").hover(function() {
        $(this).siblings("div").addClass("main-nav__element__bg-1");
    }, function() {
        $(this).siblings("div").removeClass("main-nav__element__bg-1");
    });
  });
  