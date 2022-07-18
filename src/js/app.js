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


new Swiper(".clients__swiper", {
  modules: [Pagination, Navigation],
  slidesPerView: 2,
  autoplay:{
      delay: 2000,
  },
  pagination:{
      el: ".clients__pagination",
  },
  navigation: {
    nextEl: ".clients__button-next",
    prevEl: ".clients__button-prev",
  },
  breakpoints:{
    1200:{
      slidesPerView: 4,
    },
    768:{
      slidesPerView: 3,
    }
  }
});


new Swiper(".news__swiper", {
  modules: [Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 40,
  pagination:{
      el: ".news__pagination",
  },
  navigation: {
    nextEl: ".news__button-next",
    prevEl: ".news__button-prev",
  },
  breakpoints:{
    768:{
      slidesPerView: 2,
      spaceBetween: 30,
    }
  }
});


new Swiper(".trust__swiper", {
  modules: [Pagination, Navigation],
  slidesPerView: 2,
  autoplay:{
      delay: 2000,
  },
  pagination:{
      el: ".trust__pagination",
  },
  navigation: {
    nextEl: ".trust__button-next",
    prevEl: ".trust__button-prev",
  },
  breakpoints:{
    1200:{
      slidesPerView: 4,
    },
    768:{
      slidesPerView: 3,
    }
  }
});


new Swiper(".new__swiper", {
  modules: [Pagination],
  slidesPerView: 1,
  spaceBetween: 40,
  pagination: {
    el: ".new__pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
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