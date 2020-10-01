$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
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
    });
  });