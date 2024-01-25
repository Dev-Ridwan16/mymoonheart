const bulbs = document.querySelectorAll('.bulbs img')
const btns = document.querySelectorAll('.switch button')

btns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    if (index === 0) {
      bulbs[0].classList.remove('active')
      bulbs[1].classList.add('active')
      btns[0].classList.remove('active')
      btns[1].classList.add('active')
    } else {
      bulbs[0].classList.add('active')
      bulbs[1].classList.remove('active')
      btns[0].classList.add('active')
      btns[1].classList.remove('active')
    }
  })
})
