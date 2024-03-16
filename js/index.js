const errorEmail = document.querySelector('.error-email');
const emailInput = document.querySelector('.input-email');

// function to check whether an email is correct or incorrect
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function handleError(event) {
  event.preventDefault();
  const email = document.querySelector('.input-email').value;

  if (!email) {
    return;
  }

  if (!validateEmail(email)) {
    emailInput.style.borderColor = 'hsl(0, 93%, 68%)';
    errorEmail.style.opacity = '1';
    errorEmail.style.pointerEvents = 'all';
    errorEmail.style.visibility = 'visible';
  } else {
    emailInput.style.borderColor = '#e2c1c1';
    errorEmail.style.opacity = '0';
    errorEmail.style.pointerEvents = 'none';
    errorEmail.style.visibility = 'hidden';
  }
}
