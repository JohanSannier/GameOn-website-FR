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

// Listening if the number of tournament participation is correct
reserveForm.quantity.addEventListener('input', function () {
  
  let small = this.nextElementSibling;

  if (this.value >= 0 && this.value <= 99) {
    small.innerHTML = '';
  } else {
    small.innerHTML = 'Veuillez renseigner une valeur comprise entre 0 et 99';
  }
});

// Listening if a location is selected
reserveForm.addEventListener('change', function () {
  locationSelect();
});

function locationSelect() {
  const radioSelect = document.querySelectorAll('input[name="location"]');
  let radioValue;
  for (const choice of radioSelect) {
    if (choice.checked) {
      console.log(choice.value);
      radioValue = choice.value;
    } 
  }
  if (!radioValue) {
    console.log('merci de saisir une location');
    return false;
  } else {
    console.log('ok location');
    return true;
  }
};

// Listening if a radio button is selected
reserveForm.addEventListener('submit', function (e) {
  e.preventDefault();

  if (validName(reserveForm.first) && validName(reserveForm.last) && validEmail(reserveForm.email)){
    console.log("on peut envoyer");
  } else {
    console.log("il manque une ou plusieurs données correctes");
  }

  // Listening if the terms and conditions checkbox is checked
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
});
