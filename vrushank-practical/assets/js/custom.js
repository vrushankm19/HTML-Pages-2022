// $(function () {
//   $(document).scroll(function () {
//    var $nav = $(".scrolled_remind");
//    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//  });
// });

const navbar = document.querySelector(".scrolled_remind");
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};

$(document).ready(function () {
    $(".carousel_custom_1").owlCarousel({
        items: 4,
        nav: true,
        loop: true,
        dots: false,
        margin: 16,
        mouseDrag: true,
        responsiveClass: true,
        navText: ["<i class='fas fa-chevron-left left-arrow'></i>", "<i class='fas fa-chevron-right right-arrow'></i>"],
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            767: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            },
        },
    });
});

$(document).ready(function () {
    $(".carousel_custom_2").owlCarousel({
        items: 4,
        nav: true,
        loop: true,
        dots: true,
        center: true,
        mouseDrag: true,
        responsiveClass: true,
        navText: ["<i class='fas fa-chevron-left left-arrow'></i>", "<i class='fas fa-chevron-right right-arrow'></i>"],
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 1,
            },
            767: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1200: {
                items: 3,
            },
        },
    });
});
