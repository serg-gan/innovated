$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function () {
    $('.review__slider').slick({
        arrows: false,
        dots: true,
        loop: Infinity,
    });
});

// new Swiper('.slider', {
//     spaceBetween: 30,
//     loop: true,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
// });