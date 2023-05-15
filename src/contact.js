const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone_number');

form.addEventListener('submit', (e) => {

  e.preventDefault();


  if (nameInput.value.trim() === '') {
    alert('Please enter your name');
    nameInput.focus();
    return;
  }


  if (!isValidEmail(emailInput.value)) {
    alert('Please enter a valid email address');
    emailInput.focus();
    return;
  }

  if (!isValidPhoneNumber(phoneInput.value)) {
    alert('Please enter a valid phone number');
    phoneInput.focus();
    return;
  }

  form.submit();
});

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function isValidPhoneNumber(phoneNumber) {
    const regex = /^\d{10}$/;
    return regex.test(phoneNumber);
}
