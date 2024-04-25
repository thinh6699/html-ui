document.addEventListener('DOMContentLoaded', function () {
  function toggleModal(target) {
    const modal = document.querySelector(target)

    modal.classList.toggle('show')
  }

  // toggle bet info item
  const collapseBtnList = document.querySelectorAll('.collapse-btn')
  collapseBtnList.forEach(btn => {
    btn.addEventListener('click', function () {
      const parentElement = btn.parentElement
      const collapseContent = parentElement.querySelector(
        '.transition-collapse'
      )
      const arrow = btn.querySelector('svg')
      arrow.classList.toggle('rotate-180')
      if (collapseContent.classList.contains('grid-template-rows-1')) {
        collapseContent.classList.remove('grid-template-rows-1')
        collapseContent.classList.add('grid-template-rows-0')
      } else {
        collapseContent.classList.remove('grid-template-rows-0')
        collapseContent.classList.add('grid-template-rows-1')
      }
    })
  })

  // select bet
  const selectBetBtnList = document.querySelectorAll('.bet-item')
  selectBetBtnList.forEach(btn => {
    btn.addEventListener('click', function () {
      btn.classList.toggle('bg-primary')
      const target = btn.getAttribute('data-target')
      const children = btn.children
      Array.from(children).forEach(child => {
        child.classList.toggle('!text-white')
      })

      // show modal confirm
      toggleModal(target)
    })
  })
})
