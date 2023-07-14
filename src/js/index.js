// polyfills
import '@babel/polyfill/dist/polyfill';
// styles
import '../scss/style.scss';
// imports
import './_imports';

document.addEventListener('DOMContentLoaded', () => {
  const resize = () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`)
  }
  resize()

  window.addEventListener('resize', resize)

  function toggleClassOpen(openBtn, closeBtn, ...elems){
    if(openBtn == closeBtn){
      openBtn.addEventListener('click', () => {
        elems.forEach(elem => {
          elem.classList.toggle('open')
        })
      })
    }
    else{
      if(openBtn){
        openBtn.addEventListener('click', () => {
          elems.forEach(elem => {
            elem.classList.add('open')
          })
        })
      }
  
      if(closeBtn){
        closeBtn.addEventListener('click', () => {
          elems.forEach(elem => {
            elem.classList.remove('open')
          })
        })
      }
    }
  }

  const popupBtns = document.querySelectorAll('.popup-btn')
  popupBtns.forEach(btn => {
    const dataPopup = btn.dataset.popupOpen
    const popup = document.querySelector(`[data-popup=${dataPopup}]`)
    const closePopupBtn = document.querySelector(`[data-popup-close = ${dataPopup}]`)
    toggleClassOpen(btn, closePopupBtn, popup, btn)
  })
})
