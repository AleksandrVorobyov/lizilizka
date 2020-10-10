$(document).ready(function () {
  $(".owl-carousel-header").owlCarousel({
    items: 3,
    loop: false,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
        slideBy: 2
      },
      1440: {
        items: 2,
      },
      2170: {
        items: 3,
      },
    },
    stagePadding: 0,
    arrows: false,
    margin: 10,
    mouseDrag: false,
    touchDrag: false,
  });
});

$(document).ready(function () {
  $(".owl-carousel-brow").owlCarousel({
    items: 1,
    loop: false,
    nav: true,
    navText: ["Назад", "Вперед"],
    dots: false,
    stagePadding: 0,
    arrows: false,
    margin: 10,
    autoWidth: false,
  });
});

$(document).ready(function () {
  $(".owl-carousel-milesnick").owlCarousel({
    items: 1,
    loop: false,
    nav: true,
    navText: ["Назад", "Вперед"],
    dots: false,
    stagePadding: 0,
    arrows: false,
    margin: 10,
  });
});

$(document).ready(function () {
  $(".owl-carousel-lips").owlCarousel({
    items: 2,
    loop: false,
    nav: true,
    navText: ["Назад", "Вперед"],
    dots: false,
    stagePadding: 0,
    arrows: false,
    margin: 10,
    autoWidth: false,
  });
});

var formButton = document.querySelectorAll("[data-form]");
var formPosht = document.querySelector("#form");
var formExit = document.querySelectorAll("[data-exit]");

formButton.forEach(function (e) {
  e.addEventListener("click", function (e) {
    function unlockForm() {
      formPosht.style.display = "block";
    }

    unlockForm();
  });
});

formExit.forEach(function (e) {
  e.addEventListener("click", function (e) {
    function closeForm() {
      formPosht.style.display = "none";
    }

    closeForm();
  });
});
