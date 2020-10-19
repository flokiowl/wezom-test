const callbackBtn = document.querySelector('.header__callback-btn');
const callbackModal = document.querySelector('.modal.callback');
const signBtn = document.querySelector('.header__sign-in');
const signModal = document.querySelector('.modal.sign-in');
const modalClose = document.querySelectorAll('.modal__close');
const modalOverlay = document.querySelectorAll('.modal__overlay');

callbackBtn.addEventListener('click', () => {
  callbackModal.classList.add('open');
  document.querySelector('#phone').value = '';
});

signBtn.addEventListener('click', () => {
  signModal.classList.add('open');
});

modalClose.forEach(function(el) {
  el.addEventListener('click', function() {
    document.querySelectorAll('.modal').forEach(function(el) {
      el.classList.remove('open');
    })
  });
});

modalOverlay.forEach(function(el) {
  el.addEventListener('click', () => {
    document.querySelectorAll('.modal').forEach(function(el) {
      el.classList.remove('open');
    })
  });
});
