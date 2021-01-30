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

const body = document.querySelector('body');

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
