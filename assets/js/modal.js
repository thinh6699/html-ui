document.addEventListener('DOMContentLoaded', function () {
  // modal element
  const modal = document.querySelector('.modal')
  const modalContent = modal?.querySelector('.modal-content')
  const modalClose = modal?.querySelector('.modal-close')
  const modalSubmit = modal?.querySelector('.modal-submit')

  function closeModal() {
    modal.classList.remove('show')
    document.body.classList.remove('overflow-hidden')
    const selected = document.querySelector('.bet-item.selected')
    selected.classList.remove('selected')
  }

  function handleClickoutsideModal(event) {
    const isModalVisible = modal?.classList?.contains('show')

    // Check if the click target is not inside the modal
    if (isModalVisible && !modalContent.contains(event.target)) {
      closeModal()
    }
  }

  // close modal
  modalClose?.addEventListener('click', function () {
    closeModal()
  })

  // submit modal
  modalSubmit?.addEventListener('click', function () {
    // submit action
    closeModal()
  })

  document.addEventListener('click', handleClickoutsideModal)
})
