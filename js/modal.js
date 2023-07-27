const modal = document.querySelector('.search-model')
const modalBtn = document.querySelector('.icon_search')
const modalClose = modal.querySelector('.search-close-switch')
const input = document.getElementById('search-input');

modalBtn.addEventListener('click', () => {
	modal.style.display = 'block'
})

modalClose.addEventListener('click', () => {
	modal.style.display = 'none'
})

input.addEventListener('input', function() {
  console.log(input.value);
});