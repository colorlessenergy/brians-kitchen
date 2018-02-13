var iconHamburger = document.querySelector("#icon-hamburger");
var showReponsiveNav = document.querySelector(".responsive-nav");

iconHamburger.addEventListener("click", function () {
    showReponsiveNav.classList.toggle("responsive-nav-show")
});
