

document.addEventListener('DOMContentLoaded' , () => {

  let menu = document.querySelector('.header-top .header__menu')
  let menuFixed = document.querySelector('.header-fixed .header__menu')
  let menuItems = Array.from(menu.querySelectorAll('.header__menu-item'))
  let menuFixedItems = menuFixed.querySelectorAll('.header__menu-item')
  let dots = document.querySelector('.header__menu-dots')
  let fixedBlock1 = document.querySelector('.fixed-block.block1')
  let fixedBlock2 = document.querySelector('.fixed-block.block2')
  let header = document.querySelector('.header')
  const hiddenMenu = document.querySelector(".hidden-menu")
  const dotsBtn = document.querySelector(".header__menu-dots")
  const hiddenMenuList = hiddenMenu.querySelector(".hidden-menu__list")

  const block1Log = text => {
    fixedBlock1.textContent = text
  }
  const block2Log = text => {
    fixedBlock2.textContent = text
  }

  const getSpaceForElement = (parent, elementSelector, ...ignoreElementsSelectors) => {
    let targetElement = parent.querySelector(elementSelector)
    let childrens = Array.from(parent.children)
    let space = null
    let otherChildrenWidth = 0
    let elemsToIgnore = []

    elemsToIgnore.push(targetElement)

    ignoreElementsSelectors.forEach(selector => {
      elemsToIgnore.push(parent.querySelector(selector))
    });
    
    childrens.forEach(children => {
      if(!elemsToIgnore.includes(children)){
        otherChildrenWidth+= children.offsetWidth
      }
    });
    space = parent.offsetWidth - otherChildrenWidth

    return space
 }


  const responseMenu = () => {
    let width = 0
    let hideFrom = false
    let spaceForMenu = getSpaceForElement(header, ".header__menu", ".header__search", ".mega-menu")

    for(let i = 0; i < menuItems.length; i++){
      menuItems[i].classList.remove('hidden')
      width += menuItems[i].offsetWidth
      if(width + 300 >= spaceForMenu){
        hideFrom = i
        break
      }
    }

    //Если есть пункты для скрытия
    if(hideFrom !== false){
      hiddenMenuList.innerHTML = ''
      for(let i = hideFrom; i < menuItems.length; i++){
        menuItems[i].classList.add('hidden')
        
        let newItem = document.createElement('li')
        newItem.setAttribute('class', 'hidden-menu__item')
        let newLink = document.createElement('a')
        newLink.setAttribute('href', '/')
        newLink.setAttribute('class', 'hidden-menu__link')
        newLink.textContent = menuItems[i].querySelector('a').textContent
        
        newItem.appendChild(newLink)

        hiddenMenuList.appendChild(newItem)


      }
      dots.classList.remove('hidden')
    }
    else{
      dots.classList.add('hidden')
    }

    menuItems.forEach((item,idx) => {
      
    })

    block1Log(width)
    block2Log(spaceForMenu)
  }

  window.addEventListener('resize', responseMenu)

  responseMenu()


  dotsBtn.addEventListener('mouseenter', () => {
    hiddenMenu.classList.remove('hidden')
  })

  dotsBtn.addEventListener('mouseleave', () => {
    hiddenMenu.classList.add('hidden')
  })
})




