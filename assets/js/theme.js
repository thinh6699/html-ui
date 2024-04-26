document.addEventListener('DOMContentLoaded', function () {
  const isDarkMode = localStorage.getItem('theme') === 'dark'
  if (isDarkMode) {
    $('html').addClass('dark')
    $('.selected-mode').prop('checked', true)
  } else {
    $('html').addClass('light')
    localStorage.setItem('theme', 'light')
  }
})

$(document).ready(function () {
  const isDarkMode = localStorage.getItem('theme') === 'dark'
  if (isDarkMode) {
    $('.selected-mode').prop('checked', true)
    $('html').addClass('dark')
  } else {
    $('html').addClass('light')
    localStorage.setItem('theme', 'light')
  }

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
