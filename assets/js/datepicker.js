$(document).ready(function () {
  function setDatepickerWidth() {
    const parentElWith = $('.date-picker').css('width')
    $('.daterangepicker').css('width', parentElWith)
  }

  $('.date-picker').daterangepicker({
    applyButtonClasses: 'bg-primary text-white !text-sm rounded-[6px] !ml-3',
    cancelButtonClasses: 'hidden',
    locale: {
      applyLabel: 'OK',
      firstDay: 1,
      daysOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      monthNames: [
        'Tháng 1',
        'Tháng 2',
        'Tháng 3',
        'Tháng 4',
        'Tháng 5',
        'Tháng 6',
        'Tháng 7',
        'Tháng 8',
        'Tháng 9',
        'Tháng 10',
        'Tháng 11',
        'Tháng 12'
      ]
    },
    opens: 'center',
    singleDatePicker: $('.date-picker').hasClass('single') ? true : false
  })

  setDatepickerWidth()

  $('.drp-calendar.right').hide()
  $('.drp-calendar.left').addClass('single')

  const targetNode = document.querySelector('.calendar-table')

  // Create an observer instance
  const observer = new MutationObserver(function (mutationsList, observer) {
    // Check for changes in the target node
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        // Your logic for handling DOM changes here
        const el = $('.prev.available').parent().children().last()
        if (el.hasClass('next available')) {
          return
        }
        el.addClass('next available')
        el.append('<span></span>')
      }
    }
  })

  // Configuration of the observer
  var config = { childList: true, subtree: true }

  // Start observing the target node for configured mutations
  observer.observe(targetNode, config)

  $(window).on('resize', function () {
    setDatepickerWidth()
  })
})
