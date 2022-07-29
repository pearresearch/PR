const contact = document.getElementById('contact');
const name = document.getElementById('name');
const email = document.getElementById('email');
const whatsappno = document.getElementById('whatsappno');



function nameValidation() {
  if (!name.value) {
    name.style.border = 'thin solid';
    name.style.borderColor = 'red';
  }
}

function emailValidation() {
  if (!email.value) {
    email.style.border = 'thin solid';
    email.style.borderColor = 'red';
  }
}

function whatsappnoValidation() {
  if (!whatsappno.value) {
    whatsappno.style.border = 'thin solid';
    whatsappno.style.borderColor = 'red';
  }
}

form.addEventListener('submit', e => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {

  const nameValue = name.value..trim()
  const emailValue = email.value.trim()
  const whatsappnoValue = whatsappno.value.trim()

  if (nameValue === '') {
    setErrorFor(name, 'Name cannot be blank');
  } else {
    setSuccessFor(name);
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email');
  } else {
    setSuccessFor(email);
  }

  if (whatsappnoValue === '') {
    setErrorFor(whatsappno, 'Whatsapp Number cannot be blank');
  } else {
    setSuccessFor(whatsappno);
  }


  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
  }

  function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
  }

  function isEmail(email) {
  	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }
