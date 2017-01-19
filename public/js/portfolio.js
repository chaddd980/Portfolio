$("document").ready(function($){

  var nav = $('.navbar');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            nav.addClass("f-nav navbar-fixed-top");
            $(".navbar-header").addClass("g-nav")
            $(".one").addClass("one-scroll")
            $(".colour").addClass("one-scroll")
        } else {
            nav.removeClass("f-nav navbar-fixed-top");
            $(".navbar-header").removeClass("g-nav")
        }
    });

    $('a[href^="#"]').on('click', function(event) {
    var target = event.target.id;
    debugger
    event.preventDefault();
    if (target.length) {
      $('html, body').stop().animate({
              scrollTop: $("." + target).offset().top
      }, 2000);
    }
  });
});
