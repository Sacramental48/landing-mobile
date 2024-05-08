import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const burger = document.querySelector('.header__burger');
const burgerClose = document.querySelector('.header__burger-lines');

burger.addEventListener('click', () => {
    burgerClose.classList.toggle('header__burger-active');
});

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

window.onload = function () {
    let duration;

    function startTimer(totalSeconds) {
        duration = totalSeconds;

        setInterval(function () {
            let hours = parseInt(duration / 3600, 10);
            let minutes = parseInt((duration % 3600) / 60, 10);
            let seconds = parseInt(duration % 60, 10);

            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            document.querySelector('.action__hours').textContent = hours;
            document.querySelector('.action__minutes').textContent = minutes;
            document.querySelector('.action__seconds').textContent = seconds;

            if (--duration < 0) {
                duration = totalSeconds;
            }
        }, 1000);
    }

    startTimer(30 * 60);
};

const getArticles = document.querySelectorAll('.card__body');

getArticles.forEach((item) => {
    const getArticleButton = item.querySelector('.card__button');
    const getArticlePrice = item.querySelector('.card__price');
    const getArticleOffer = item.querySelector('.card__offer');
    item.addEventListener('mouseover', function() {
        item.style.backgroundColor = '#9564AA';
        getArticleButton.style.backgroundColor = '#FFCF2D';
        getArticleButton.style.opacity = '1';
        getArticlePrice.style.color = '#fff';
        getArticleOffer.style.display = 'inline';
    });
});

getArticles.forEach((item) => {
    const getArticleButton = item.querySelector('.card__button');
    const getArticlePrice = item.querySelector('.card__price');
    const getArticleOffer = item.querySelector('.card__offer');
    item.addEventListener('mouseleave', function() {
        item.style.backgroundColor = 'rgba(149, 100, 170, .1)';
        getArticleButton.style.backgroundColor = '#fff';
        getArticleButton.style.opacity = '0.4';
        getArticlePrice.style.color = '#000';
        getArticleOffer.style.display = 'none';
    })
});