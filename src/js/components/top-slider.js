import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".slider-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".slider-btn--next",
    prevEl: ".slider-btn--prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
