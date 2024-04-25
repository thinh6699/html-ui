document.addEventListener('DOMContentLoaded', function () {
  const collapseBtnList = document.querySelectorAll('.collapse-btn')
  const selectBetBtnList = document.querySelectorAll('.bet-item')
  const dropdownBtn = document.querySelector('.dropdown-btn')

  // collapse bet info item
  collapseBtnList.forEach(btn => {
    btn.addEventListener('click', function () {
      const parentElement = btn.parentElement
      const collapseItem = parentElement.querySelector('.collapse-item')

      const arrow = btn.querySelector('svg')
      arrow.classList.toggle('rotate-180')

      collapseItem.classList.toggle('show')
    })
  })

  // Event listener for each select bet button
  selectBetBtnList.forEach(btn => {
    btn.addEventListener('click', function (event) {
      event.stopPropagation() // Stop propagation to prevent hiding modal
      btn.classList.add('selected')

      // Show modal confirm associated with the button
      const target = btn.getAttribute('data-target')
      const modal = document.querySelector(target)
      modal.classList.add('show')
    })
  })

  dropdownBtn?.addEventListener('click', function () {
    const listDropdown = dropdownBtn.querySelector('.list-dropdown')
    listDropdown.classList.toggle('show')
  })
})
