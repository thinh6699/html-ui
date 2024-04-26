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
      ],
    },
    opens: 'center'
  })

  setDatepickerWidth()

  $('.drp-calendar.right').hide()
  $('.drp-calendar.left').addClass('single')

  $('.calendar-table').on('DOMSubtreeModified', function () {
    var el = $('.prev.available').parent().children().last()
    if (el.hasClass('next available')) {
      return
    }
    el.addClass('next available')
    el.append('<span></span>')
  })

  $(window).on('resize', function () {
    setDatepickerWidth()
  })
})
