var modalFeedbackShow = document.querySelector('.modal-feedback-show')
var modalFeedback = document.querySelector('.modal-feedback');
var modalFeedbackClose = modalFeedback.querySelector('.modal-feedback-close')
var modalFeedbackLoginInput = modalFeedback.querySelector('.modal-feedback input[name]')
var modalFeedbackEmailInput = modalFeedback.querySelector('.modal-feedback input[email]')
var modalFeedbackSubmit = modalFeedback.querySelector('.modal-feedback-submit')

let storage = localStorage.getItem("login");


modalFeedbackShow.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalFeedback.classList.add('modal-show');
  if (storage) {
    modalFeedbackLoginInput.value = storage;
    modalFeedbackEmailInput.focus();
  } else {
    modalFeedbackLoginInput.focus();
  }
});
modalFeedbackClose.addEventListener('click', function () {
  modalFeedback.classList.remove('modal-show');
  modalFeedback.classList.remove("modal-error");
});

modalFeedbackSubmit.addEventListener('click' ,function (evt) {
  if (!modalFeedbackLoginInput || !modalFeedbackEmailInput) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal-error");
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    modalFeedback.classList.add("modal-error");
  } else {
    localStorage.getItem("login", modalFeedbackLoginInput.value)}
})

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    modalFeedback.classList.remove('modal-show');
  }
})
