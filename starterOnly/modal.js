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
const closeThanks = document.getElementById('close-btn-thanks');
const reserveForm = document.getElementById('reserveForm');
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const submit = document.getElementById('submit');
const thankYou = document.getElementById('thank-you');

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
    small.innerHTML = '';
    return true;
  } else {
    small.innerHTML = 'Ce champ doit comprendre au moins 2 caractères.';
    return false;
  }
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
    return true;
  } else {
    small.innerHTML = "L'email indiqué semble incorrect";
    return false;
  }
}

// Creating the function to verify if the user added his birthday
function dateCheck() {
  let small = reserveForm.birthdate.nextElementSibling;
  if (!reserveForm.birthdate.value) {
    small.innerHTML = 'Veuillez indiquer votre date de naissance';
    small.classList.add('small-cgv');
    return false;
  } else {
    small.innerHTML = '';
    small.classList.remove('small-cgv');
    return true;
  }
}

// Listening if the number of tournament participation is correct
function qtyCheck(inputQty) {
  let small = inputQty.nextElementSibling;
  if (inputQty.value != '' && inputQty.value >= 0 && inputQty.value <= 99) {
    small.innerHTML = '';
    return true;
  } else {
    small.innerHTML = 'Veuillez renseigner une valeur comprise entre 0 et 99';
    return false;
  }
}

reserveForm.quantity.addEventListener('input', function () {
  qtyCheck(this);
});

// Listening if a location is selected
function locationSelect() {
  const radioSelect = document.querySelectorAll('input[name="location"]');
  let small = document.getElementById('radio-wrapper').nextElementSibling;
  let radioValue = false;
  for (const choice of radioSelect) {
    if (choice.checked) {
      radioValue = true;
      break;
    }
  }
  if (!radioValue) {
    small.innerHTML = 'Merci de saisir une location';
    small.classList.add('small-cgv');
  } else {
    small.innerHTML = '';
    small.classList.remove('small-cgv');
  }
  return radioValue;
}

// Listening if the terms and conditions checkbox is checked
function cgvSelect() {
  let checkBoxValidation = document.getElementById('checkbox1').checked;
  let small = document.getElementById('cgv-label').nextElementSibling;
  if (!checkBoxValidation) {
    small.innerHTML = "Veuillez accepter les conditions d'utilisation";
    small.classList.add('small-cgv');
    return false;
  } else {
    small.innerHTML = '';
    return true;
  }
}

// Creating the thank you page
function thankYouPage() {
  // Removing the display none and adding the right class to show the thank you page
  thankYou.classList.remove('hidden');
  thankYou.classList.add('thank-you-bg');
  thankYou.innerHTML = 'Merci, votre inscription a bien été prise en compte !';
  // Adding the span contening the close icon
  const closeBtn = document.createElement('span');
  thankYou.appendChild(closeBtn);
  closeBtn.classList.add('close');
  // Closing the thank you page when clicking on the close icon
  closeBtn.addEventListener('click', function () {
    thankYou.classList.add('hidden');
    thankYou.classList.remove('thank-you-bg');
  });
}

// Creating the function to send the thank you page to the user when the form is sent
reserveForm.addEventListener('submit', function (e) {
  e.preventDefault();
  if (
    // All of the below functions return true
    validName(reserveForm.first) &&
    validName(reserveForm.last) &&
    validEmail(reserveForm.email) &&
    dateCheck() &&
    qtyCheck(reserveForm.quantity) &&
    locationSelect() &&
    cgvSelect()
  ) {
    // Then close the form, reset it and show the thank you page
    closeModal();
    reserveForm.reset();
    thankYouPage();
  }
});
