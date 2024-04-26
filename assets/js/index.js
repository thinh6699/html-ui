$(document).ready(function () {
  const collapseBtnList = document.querySelectorAll('.collapse-btn')
  const selectBetBtnList = document.querySelectorAll('.bet-item')
  const dropdownBtnList = document.querySelectorAll('.dropdown-btn')
  const dropdownList = document.querySelectorAll('.list-dropdown')

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
      document.body.classList.add('overflow-hidden')
    })
  })

  // Event listener for each dropdown button
  dropdownBtnList.forEach((btn, index) => {
    btn.addEventListener('click', function (event) {
      event.stopPropagation()

      // Get the corresponding list dropdown element
      const dropdown = dropdownList[index]

      // Toggle the visibility of the clicked dropdown
      dropdown.classList.toggle('show')

      // Close any other open dropdowns except the clicked one
      dropdownList.forEach((dropdownItem, idx) => {
        if (idx !== index && dropdownItem.classList.contains('show')) {
          dropdownItem.classList.remove('show')
        }
      })
    })
  })

  // Close dropdowns when clicking outside
  document.addEventListener('click', function (event) {
    const isDropdownClick = Array.from(dropdownBtnList).some(btn =>
      btn.contains(event.target)
    )

    if (!isDropdownClick) {
      closeAllDropdowns()
    }
  })

  // Function to close all dropdowns
  function closeAllDropdowns() {
    dropdownList.forEach(dropdown => {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show')
      }
    })
  }
})

// get local storage theme
isDarkMode = localStorage.getItem('theme') === 'dark'
if (isDarkMode) {
  $('.selected-mode').prop('checked', true)
}

// watch theme change
$(document).ready(function () {
  $('.selected-mode').on('change', function () {
    const isChecked = $('.selected-mode').prop('checked')
    if (isChecked) {
      $('html').removeClass('light')
      localStorage.setItem('theme', 'dark')
    } else {
      $('html').addClass('light')
      localStorage.setItem('theme', 'light')
    }
    $('html').toggleClass('dark')
  })
})
