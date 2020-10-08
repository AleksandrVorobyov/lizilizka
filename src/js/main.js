$(document).ready(function () {
  $(".owl-carousel-header").owlCarousel({
    items: 3,
    loop: false,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
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

var formButton = document.querySelector('.nav-form');
var formPosht = document.querySelector('#form');
var formExit =document.querySelector("#formExit");

formButton.addEventListener("click", function() {
  unlockForm();
});

function unlockForm() {
  formPosht.style.display="block";
}

// function unlockForm(e) {
//   if (e.classList.contains('display-none')) {
//     e.classList.remove("display-none");
//   } else {
//     e.classList.add("display-none");
//   }
// }

// formButtonExit.addEventListener("click", function() {
//   exitForm();
// });

// function exitForm() {
//   formPosht.style.display="none";
// }