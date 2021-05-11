import './index.css';
const swiper = new Swiper('.footer__slider', {
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints:{
        320: {
            slidesPerView:1,
        },
        720:{
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});
  