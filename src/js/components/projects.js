document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".projects__tab")
  let items = Array.from(document.querySelectorAll(".projects__item"))
  tabs.forEach(tab => tab.addEventListener('click', (e) => {
    tabs.forEach(el => el.classList.remove('projects__tab--active'))
    tab.classList.add('projects__tab--active')
    items.map(item => {
      const arr = item.dataset.filter.split(",")
      if(arr.includes(tab.dataset.tab) || tab.dataset.tab == 0){
        item.style.display = "block"
      }
      else{
        item.style.display = "none"
      }
    })
  }))
});