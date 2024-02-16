const tabPanels = document.querySelectorAll('.tabContainer  .tabPanel')
const tabButtons = document.querySelectorAll('.buttons button')

/* trocando de tab */
function showPanel(panelIndex) {
  tabButtons.forEach(function (node) {
    node.classList.remove('active')
    node.style.color = ''
  })
  tabButtons[panelIndex].classList.add('active')
  tabPanels.forEach(function (node) {
    node.style.display = 'none'
  })
  tabPanels[panelIndex].style.display = 'flex'
  tabPanels[panelIndex].style.flexDirection = 'column'
}

showPanel(0)

/* menu mobile */
const hamburger = document.querySelector('#menu-mobile')
const menu = document.querySelector('.buttons')

hamburger.addEventListener('click', () => {
  menu.classList.toggle('visible')
  hamburger.classList.toggle('open')
})

function closeMenu() {
  menu.classList.remove('visible')
  hamburger.classList.remove('open')
}

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    closeMenu()
  })
})

document.addEventListener('click', (event) => {
  const isMenuClicked = event.target.closest('.buttons') !== null
  const isHamburgerClicked = event.target.closest('#menu-mobile') !== null

  if (!isMenuClicked && !isHamburgerClicked) {
    closeMenu()
  }
})
