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
    $(this).append("<div class='text-center description'><p>A React  based tic tac toe web app that is very easy to beat!</p><p>Frameworks Used: React, jQuery and Bootstrap</p><p>Languages Used: Javascript, CSS and HTML</p></div>")
  }, function() {
    $(".description").remove("")
  });

  $("#meetup").hover(function() {
    $(this).append("<div class='text-center description'><p>A sinatra based web app that mimics meetup.com. Users can create and join meetups and comment on these meetups</p><p>Frameworks Used: Sinatra, PostgreSQL, jQuery and Bootstrap</p><p>Languages Used: Ruby, SQL, Javascript, CSS and HTML</p></div>")
  }, function() {
    $(".description").remove("")
  });

  $("#calculator").hover(function() {
    $(this).append("<div class='text-center description'><p>A simple react based calculator web app</p><p>Frameworks/Preprocessor Used: React, jQuery, Sass and Bootstrap</p><p>Languages Used: Javascript, CSS and HTML</p></div>")
  }, function() {
    $(".description").remove("")
  });

  $("#pomo").hover(function() {
    $(this).append("<div class='text-center description'><p>A React timer app that uses the pomodoro time management technique to help users be more efficient</p><p>Frameworks/Preprocessor Used: React, jQuery and Sass</p><p>Languages Used: Javascript, CSS and HTML</p></div>")
  }, function() {
    $(".description").remove("")
  });

  $("#poke").hover(function() {
    $(this).append("<div class='text-center description'><p>A Pokemon spin on the classic Simon game Currently optimized for chrome</p><p>Frameworks/Preprocessor Used: React and Sass</p><p>Languages Used: Javascript, CSS and HTML</p></div>")
  }, function() {
    $(".description").remove("")
  });

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $("#twitch").append("<div class='text-center description'><p>A Javascript Web App that uses the twitch JSON API to display the status of twitch accounts and link to them</p><p>Frameworks Used: jQuery and Bootstrap</p><p>Languages Used: Javascript, CSS and HTML</p></div>")
    $("#weather").append("<div class='text-center description'><p>A Javascript Web App that uses the openweathermap API to display the weather in the users current area</p><p>Frameworks Used: jQuery and Bootstrap</p><p>Languages Used: Javascript, CSS and HTML</p></div>")
    $("#quote").append("<div class='text-center description'><p>A Javascript Web App that uses the forismatic API to provide the user with a random quote on request along with the ability to share it on twitter</p><p>Frameworks Used: jQuery and Bootstrap</p><p>Languages Used: Javascript, CSS and HTML</p></div>")
    $("#wiki").append("<div class='text-center description'><p>A Javascript Web App that uses the Wikipedia API to allow users to search up articles based on a word or phrase, or generate a random article</p><p>Frameworks Used: jQuery and Bootstrap</p><p>Languages Used: Javascript, CSS and HTML</p></div>")
    $("#toe").append("<div class='text-center description'><p>A React tic tac toe web app that is very easy to beat!</p><p>Frameworks Used: React, jQuery and Bootstrap</p><p>Languages Used: Javascript, CSS and HTML</p></div>")
    $("#meetup").append("<div class='text-center description'><p>A sinatra based web app that mimics meetup.com. Users can create and join meetups and comment on these meetups</p><p>Frameworks Used: Sinatra, PostgreSQL, jQuery and Bootstrap</p><p>Languages Used: Ruby, SQL, Javascript, CSS and HTML</p></div>")
    $("#calculator").append("<div class='text-center description'><p>A basic react based calculator web app</p><p>Frameworks/Preprocessor Used: React, jQuery, Sass and Bootstrap</p><p>Languages Used: Javascript, CSS and HTML</p></div>")
    $("#pomo").append("<div class='text-center description'><p>A React timer app that uses the pomodoro time management technique to help users be more efficient</p><p>Frameworks/Preprocessor Used: React, jQuery and Sass</p><p>Languages Used: Javascript, CSS and HTML</p></div>")
    $("#poke").append("<div class='text-center description'><p>A Pokemon spin on the classic Simon game</p><p>Frameworks/Preprocessor Used: React and Sass</p><p>Languages Used: Javascript, CSS and HTML</p></div>")
  }



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
