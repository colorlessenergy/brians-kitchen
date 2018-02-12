$( document ).ready(function() {
  // setting for the responsive nav and enable the responsive navigation

  var iconHamburger = document.querySelector("#icon-hamburger");
  var showReponsiveNav = document.querySelector(".responsive-nav");
  iconHamburger.addEventListener("click", function () {
      showReponsiveNav.classList.toggle("responsive-nav-show")
  });

  // owl carousel

  $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      items: 1,
      mouseDrag: false,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      touchDrag: false,
  })


  // modal for youtube video




  $('.hero-text').each(function (current) {
    $(this).on('click', function () {
      var currentM = document.querySelectorAll('.modal');
      currentM[current-2].classList.toggle("show");
    });

    $('.close-modal').each(function (current) {
      $(this).on('click', function () {
          var currentM = document.querySelectorAll('.modal');
          currentM[current].classList.toggle("show");

      })
    })
  });

});

// for youtube players

var player = document.querySelectorAll(".player");
var allPlayers = [];
  // this function gets called when API is ready to use
  function onYouTubePlayerAPIReady() {
    player.forEach(function (current, index) {
      var currentPlayer =  new YT.Player(current.id, {
        events: {
          // call this function when player is ready to use
          'onReady': onPlayerReady
        }
      });
      allPlayers.push(currentPlayer)

    })
  }

  function onPlayerReady(event) {
    console.log(player);
    var pauseButton = document.querySelectorAll(".close-modal");
    pauseButton.forEach(function (current, index) {
      current.addEventListener("click", function() {
        allPlayers[index].pauseVideo();

      });
    });
  }

  // Inject YouTube API script
  var tag = document.createElement('script');
  tag.src = "//www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
