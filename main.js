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