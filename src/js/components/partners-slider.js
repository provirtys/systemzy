import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);
const swiper = new Swiper(".partners-slider", {
  // Optional parameters
  loop: false,
  slidesPerView: 6,
  spaceBetween: 16,

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
