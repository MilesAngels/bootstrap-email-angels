const myModal = document.getElementById('compose-modal')
const myInput = document.getElementById('compose')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus();
})