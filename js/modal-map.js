let modalShow = document.querySelector('.about-contacts .img-map')
let modal = document.querySelector('.map-popup')
let modalClose = modal.querySelector('.modal-map-close')

modalShow.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.add('modal-show');
})

modalClose.addEventListener('click', function () {
  modal.classList.remove('modal-show');
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    modal.classList.remove('modal-show');
  }
})
