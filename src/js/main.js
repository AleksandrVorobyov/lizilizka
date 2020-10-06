$(document).ready(function(){
    $(".owl-carousel-header").owlCarousel({
        items: 3,
        loop: false,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            1440: {
                items: 2,
            },
            2170: {
                items: 3
            }
        },
        stagePadding: 0,
        arrows: false,
        margin: 10,
        mouseDrag : false,
        touchDrag : false
    });
  });

$(document).ready(function(){
    $(".owl-carousel-brow").owlCarousel({
        items: 1,
        loop: false,
        nav: true,
        navText: ["Назад", "Вперед"],
        dots: false,
        stagePadding: 0,
        arrows: false,
        margin: 10,
        autoWidth: false
    });
  });

$(document).ready(function(){
    $(".owl-carousel-lips").owlCarousel({
        items: 2,
        loop: false,
        nav: true,
        navText: ["Назад", "Вперед"],
        dots: false,
        stagePadding: 0,
        arrows: false,
        margin: 10,
        autoWidth: false
    });
  });