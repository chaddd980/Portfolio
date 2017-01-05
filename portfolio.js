$("document").ready(function(){
    if ($(window).width() <768) {
      $(".small_pic").addClass("large_pic");
      $(".small_pic").removeClass("small_pic");
    // } else if ($(window).width() > 768) {
    //   $(".symbol").addClass("text-left")
    // }
    var nav = $('.navbar');
    var red = $(".red");
    var blue = $(".blue");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            nav.addClass("f-nav");
            red.addClass("colour-nav");
            blue.addClass("colour-nav");
            $(".navbar-header").addClass("g-nav")
            $(".one").addClass("one-scroll")
            $(".colour").addClass("one-scroll")
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
