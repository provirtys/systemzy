// polyfills
import "@babel/polyfill/dist/polyfill";
// styles
import "../scss/style.scss";
import "swiper/swiper.min.css";
// import "swiper/swiper-bundle.min.css";
// imports
import "./_imports";

document.addEventListener("DOMContentLoaded", () => {
  const resize = () => {
    document.documentElement.style.setProperty("--vh", `${window.innerHeight}px`);
  };
  resize();

  window.addEventListener("resize", resize);

  function toggleClassOpen(openBtn, closeBtn, ...elems) {
    if (openBtn == closeBtn) {
      openBtn.addEventListener("click", () => {
        elems.forEach((elem) => {
          elem.classList.toggle("open");
        });
      });
    } else {
      if (openBtn) {
        openBtn.addEventListener("click", () => {
          elems.forEach((elem) => {
            elem.classList.add("open");
          });
        });
      }

      if (closeBtn) {
        closeBtn.addEventListener("click", () => {
          elems.forEach((elem) => {
            elem.classList.remove("open");
          });
        });
      }
    }
  }

  const popupBtns = document.querySelectorAll(".popup-btn");
  popupBtns.forEach((btn) => {
    const dataPopup = btn.dataset.popupOpen;
    const popup = document.querySelector(`[data-popup=${dataPopup}]`);
    const closePopupBtn = document.querySelector(`[data-popup-close = ${dataPopup}]`);
    toggleClassOpen(btn, closePopupBtn, popup, btn);
  });

  const megaMenu = document.querySelector('.mega-menu')

  const config = {
    attributes: true,
    attributeFilter: ['class'] 
  };

  const html = document.documentElement

  const callback = (mutationList, observer) => {
    if(mutationList[0].target.classList.contains('open')){
      html.classList.add('hidden')
    }
    else{
      html.classList.remove('hidden')
    }
  };

  const observer = new MutationObserver(callback);

  observer.observe(megaMenu, config);

  const headerFixed = document.querySelector(".header-fixed")
  window.addEventListener('scroll', () => {
    headerFixed.classList.toggle('open', scrollY > 0)
  })
});