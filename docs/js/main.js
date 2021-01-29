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
  $(".brow__carousel").owlCarousel({
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
  $(".milesnick__carousel").owlCarousel({
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
  $(".lips__carousel").owlCarousel({
    loop: false,
    nav: true,
    navText: ["Назад", "Вперед"],
    dots: false,
    stagePadding: 0,
    arrows: false,
    margin: 10,
    autoWidth: false,

    responsive: {
      1024: {
        items: 2,
      },
      0: {
        items: 1,
      }
    }
  });
});

var formButton = document.querySelectorAll("[data-form]");
var formPosht = document.querySelector("#form");
var formExit = document.querySelectorAll("[data-exit]");
var formSubmit = document.querySelectorAll("[data-submit]");
var success = document.querySelector('.form-success');
var body = document.querySelector('body');

formButton.forEach(function (e) {
  e.addEventListener("click", function (e) {
    function unlockForm() {
      formPosht.style.display = "block";
      body.classList.add('lock');
    }

    unlockForm();
  });
});

formExit.forEach(function (e) {
  e.addEventListener("click", function (e) {
    function closeForm() {
      formPosht.style.display = "none";
      body.classList.remove('lock');
    }

    closeForm();
  });
});

formSubmit.forEach(function (e) {
  e.addEventListener("click", function (e) {
    function closeForm() {
      formPosht.style.display = "none";
      success.classList.add('form-success--active');
      setTimeout(() => success.classList.remove('form-success--active'), 5000);
      body.classList.remove('lock');
    }

    closeForm();
  });
});

const burger = document.getElementById('header-burger');
const sidebar = document.getElementById('sidebar');

burger.addEventListener('click', function(e) {
  e.target.classList.toggle('burger--active');
  sidebar.classList.toggle('sidebar--active');
  body.classList.toggle('lock');
});

const sidebarLinks = document.querySelectorAll('.sidebar__link');
sidebarLinks.forEach(function(item) {
  item.addEventListener('click', function() {
    sidebar.classList.remove('sidebar--active');
    body.classList.remove('lock');
    burger.classList.remove('burger--active');
  });
});
