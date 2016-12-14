$("document").ready(function($){
    var nav = $('.navbar');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            nav.addClass("f-nav");
            $(".navbar-header").addClass("g-nav")
        } else {
            nav.removeClass("f-nav");
            $(".navbar-header").removeClass("g-nav")
        }
    });
});


$("document").ready(function($){
  $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if( target.length ) {
          event.preventDefault();
          $('html, body').stop().animate({
              scrollTop: target.offset().top
          }, 1000);
      }
  });
});
