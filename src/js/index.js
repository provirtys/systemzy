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
})
