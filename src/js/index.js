import {Swiper} from './lib/swiper-bundle.esm.browser.js';
import fn from './lib/index-getItems.js';
// import {check} from './lib/checkUser.js';
import check from './lib/checkUser.js';
let mySwiper1 = new Swiper ('#swiper1', {
  direction: 'horizontal', // 垂直切换选项
  loop: true, // 循环模式选项
  speed:300,
  autoplay:{
    disableOnInteraction:false,
    delay: 1000,
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    bulletElement : 'li',
    bulletActiveClass: 'active',
    clickable:true,
  },
});

let mySwiper2 = new Swiper ('#swiper2', {
  direction: 'horizontal', // 垂直切换选项
  loop: true, // 循环模式选项
  speed:200,
  autoplay:{
    delay:700,
    disableOnInteraction:false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});  

fn();
check();


