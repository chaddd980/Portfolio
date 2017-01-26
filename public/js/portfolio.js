$("document").ready(function($){

  $("#twitch").hover(function() {
    $(this).append("<div class='text-center description'><p>A Javascript Web App that uses the twitch JSON API to display the status of twitch accounts and link to them</p><p>Frameworks Used: jQuery and Bootstrap</p><p>Languages Used: Javascript, CSS and HTML</p></div>")
  }, function() {
    $(".description").remove("")
  });

  $("#weather").hover(function() {
    $(this).append("<div class='text-center description'><p>A Javascript Web App that uses the openweathermap API to display the weather in the users current area</p><p>Frameworks Used: jQuery and Bootstrap</p><p>Languages Used: Javascript, CSS and HTML</p></div>")
  }, function() {
    $(".description").remove("")
  });

  $("#quote").hover(function() {
    $(this).append("<div class='text-center description'><p>A Javascript Web App that uses the forismatic API to provide the user with a random quote on request along with the ability to share it on twitter</p><p>Frameworks Used: jQuery and Bootstrap</p><p>Languages Used: Javascript, CSS and HTML</p></div>")
  }, function() {
    $(".description").remove("")
  });

  $("#wiki").hover(function() {
    $(this).append("<div class='text-center description'><p>A Javascript Web App that uses the Wikipedia API to allow users to search up articles based on a word or phrase, or generate a random article</p><p>Frameworks Used: jQuery and Bootstrap</p><p>Languages Used: Javascript, CSS and HTML</p></div>")
  }, function() {
    $(".description").remove("")
  });

  $("#toe").hover(function() {
    $(this).append("<div class='text-center description'><p>A tic tac toe web app that is very easy to beat!</p><p>Frameworks Used: React, jQuery and Bootstrap</p><p>Languages Used: Javascript, CSS and HTML</p></div>")
  }, function() {
    $(".description").remove("")
  });

  $("#meetup").hover(function() {
    $(this).append("<div class='text-center description'><p>A sinatra based web app that mimics meetup.com. Users can create and join meetups and comment on these meetups</p><p>Frameworks Used: Sinatra, PostgreSQL, jQuery and Bootstrap</p><p>Languages Used: Ruby, SQL, Javascript, CSS and HTML</p></div>")
  }, function() {
    $(".description").remove("")
  });



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
