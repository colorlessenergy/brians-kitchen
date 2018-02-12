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
      currentM[current-2].classList.toggle("show")
    })

    $('.close-modal').each(function (current) {
      $(this).on('click', function () {
        var currentM = document.querySelectorAll('.modal');
        currentM[current].classList.toggle("show")
      })
    })
  });
});
