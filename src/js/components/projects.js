document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".projects__tab")
  const items = document.querySelectorAll(".projects__item")
  tabs.forEach(tab => tab.addEventListener('click', () => {
    tabs.forEach(el => el.classList.remove('projects__tab--active'))
    tab.classList.add('projects__tab--active')
    items.forEach(item => {
      const arr = item.dataset.filter.split(",")
      if(arr.includes(tab.dataset.tab) || tab.dataset.tab == 0){
        item.style.display = "block"
      }
      else{
        item.style.display = "none"
      }
    })
  }))
  // if(tabs && tabsItems && tabs.length === tabsItems.length) {
  //   let activeIndex = 0
  //   tabs.forEach((tab, tabIndex) => {
  //     tab.addEventListener('click', () => {
  //       if(activeIndex === tabIndex) return
  //       tabs[activeIndex].classList.remove('projects__tab--active')
  //       activeIndex = tabIndex
  //       tab.classList.add('projects__tab--active')
  //       tabsItems.forEach((tabItem, tabItemIndex) => {
  //         tabItem.style.display = tabIndex === tabItemIndex ? 'block' : 'none'
  //       })
  //     })
  //   })
  // }
});