$("document").ready(function($){

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $(".appDescription").addClass("mobileAppDescription");
    $(".mobileAppDescription").removeClass("appDescription");
  } else {
    $("#twitch").hover(function() {
      $("#twitch-description").stop().slideToggle("slow")
    });

    $("#weather").hover(function() {
      $("#weather-description").stop().slideToggle("slow")
    });

    $("#quote").hover(function() {
      $("#quote-description").stop().slideToggle("slow")
    });

    $("#wiki").hover(function() {
      $("#wiki-description").stop().slideToggle("slow")
    });

    $("#toe").hover(function() {
      $("#toe-description").stop().slideToggle("slow")
    });

    // $("#meetup").hover(function() {
    //   $(this).append("<div class='text-center appDescription'><p>A sinatra based web app that mimics meetup.com. Users can create and join meetups and comment on these meetups</p><p>Frameworks Used: Sinatra, PostgreSQL, jQuery and Bootstrap</p><p>Languages Used: Ruby, SQL, Javascript, CSS and HTML</p></div>")
    // }, function() {
    //   $(".appDescription").remove("")
    // });

    $("#calculator").hover(function() {
      $("#calc-description").stop().slideToggle("slow")
    });

    $("#pomo").hover(function() {
      $("#pomo-description").stop().slideToggle("slow")
    });

    $("#poke").hover(function() {
      $("#poke-description").stop().slideToggle("slow")
    });
  }



  var nav = $('.navbar');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            nav.addClass("f-nav navbar-fixed-top");
            $(".one").addClass("one-scroll")
            $(".colour").addClass("one-scroll")
            $(".navigation").removeClass("scroll-nav")
        } else {
            nav.removeClass("f-nav navbar-fixed-top");
            $(".navbar-header").removeClass("g-nav")
            $(".navigation").addClass("scroll-nav")
        }
    });

    $('a[href^="#"]').on('click', function(event) {
    var target = event.target.id;
    event.preventDefault();
    if (target.length) {
      $('html, body').stop().animate({
              scrollTop: $("." + target).offset().top
      }, 2000);
    }
  });

  var screenSizeLimit = 600;

  window.addEventListener('resize', function(event){
    if($(window).width() < screenSizeLimit){
      $( ".fill" ).removeClass("col-xs-4 col-sm-3");
      // $(".chadd").removeClass("col-xs-8 col-sm-9");
      $(".chadd").removeClass("pull-right");
      $(".chadd").addClass("col-xs-offset-2");
    } else if ($(window).width() > screenSizeLimit) {
      $( ".fill" ).addClass("col-xs-4 col-sm-3");
      $(".chadd").addClass("col-xs-8 col-sm-9");
      $(".foot").addClass("fa-4x");
      $(".chadd").addClass("pull-right");
      $(".chadd").removeClass("col-xs-offset-2");
    }
    if ($(window).width() < 1028) {
      $(".foot").removeClass("fa-4x");
      $(".foot").addClass("fa-2x");
    }
    if ($(window).width() < 768) {
      $(".foot").removeClass("fa-2x");
      $(".foot").addClass("fa-1x");
    } else if ($(window).width() > screenSizeLimit - 100 && $(window).width() < screenSizeLimit) {
      $(".foot").removeClass("fa-1x");
      $(".foot").removeClass("fa-4x");
      $(".foot").addClass("fa-2x");
    }
  });


  if($(window).width() < 1028){
    $(".foot").removeClass("fa-4x");
    $(".foot").addClass("fa-2x");
  }

  if($(window).width() < 768 ){
      $(".foot").removeClass("fa-4x");
      $(".foot").addClass("fa-1x");
      $(".chadd").removeClass("pull-right");
      $(".chadd").addClass("col-xs-offset-2");
  }

  if($(window).width() < screenSizeLimit-100 ){
      $(".fa").removeClass("fa-2x");
      $(".fa").addClass("fa-1x");
  }
});
