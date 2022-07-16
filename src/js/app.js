import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

new Swiper(".intro__swiper", {
    modules: [Pagination, Navigation],
    slidesPerView: 1,
    autoplay:{
        delay: 2000,
    },
    pagination:{
        el: ".intro__pagination",
        type: "fraction",
    },
    navigation: {
      nextEl: ".intro__button-next",
      prevEl: ".intro__button-prev",
    },
  });

const menu = document.querySelector('.menu');
const headerList = document.querySelector('.header__list');
const body = document.querySelector('body');

menu.addEventListener('click', (e)=>{
    headerList.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('hidden')
})