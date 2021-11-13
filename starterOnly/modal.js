function editNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const closeForm = document.getElementById('close-btn');
const reserveForm = document.getElementById('reserveForm');
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const submit = document.getElementById('submit');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// close modal event
closeForm.addEventListener('click', closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
}

// close modal form
function closeModal() {
  modalbg.style.display = 'none';
}
