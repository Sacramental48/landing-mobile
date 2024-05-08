import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

let burger = document.querySelector('.header__burger');
let burgerClose = document.querySelector('.header__burger-lines');

burger.addEventListener('click', () => {
    burgerClose.classList.toggle('header__burger-active');
})

document.addEventListener('DOMContentLoaded', function () {

    new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});