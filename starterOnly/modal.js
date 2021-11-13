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

// Modal form validation rules

// Listening if the firstname and lastname inputs are modified and checking if they are correct against the validName function
reserveForm.first.addEventListener('change', function () {
  validName(this);
});

reserveForm.last.addEventListener('change', function () {
  validName(this);
});

// Building the reg exp to verify the name input
function validName(inputName) {
  let regexp = new RegExp('^[a-zA-Z]+[a-z-]{1,}$', 'g');
  let testName = regexp.test(inputName.value);
  let small = inputName.nextElementSibling;

  if (testName) {
    small.innerHTML = ""
  } else {
    small.innerHTML = "Ce champ doit comprendre au moins 2 caractères."
  }
  return testName;
}

// Listening if the email input is modified and checking if it is correct against the validEmail function
reserveForm.email.addEventListener('change', function () {
  validEmail(this);
});

// Building the reg exp to verify the email input
function validEmail(inputEmail) {
  let regexp = new RegExp(
    '^[a-zA-Z0-9-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$',
    'g'
  );
  let testEmail = regexp.test(inputEmail.value);
  let small = inputEmail.nextElementSibling;

    if (testEmail) {
      small.innerHTML = '';
    } else {
      small.innerHTML = "L'email indiqué semble incorrect";
    }
  return testEmail;
}

// Listening if a radio button is selected
submit.addEventListener('click', function (e) {
  e.preventDefault();
  const radioSelect = document.querySelectorAll('input[name="location"]');
  let selectedValue;
  for (const choice of radioSelect) {
    if (choice.checked) {
      selectedValue = true;
      return selectedValue;
    }
  }

  // Listening if the checkbox1 is checked
  let checkBoxValidation = document.getElementById('checkbox1').checked;

  if (!checkBoxValidation) {
    console.log('unchecked cgv')
  }
  return checkBoxValidation;
});
