import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper(".partners-slider", {
  // Optional parameters
  loop: false,
  slidesPerView: 6,
  spaceBetween: 16,

  // If we need pagination
  pagination: {
    el: ".partners .slider-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".partners .slider-btn--next",
    prevEl: ".partners .slider-btn--prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
