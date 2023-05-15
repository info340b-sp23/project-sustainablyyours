
const form = document.querySelector('form');
const usernameInput = document.getElementById('username');


form.addEventListener('submit', function(event) {
  event.preventDefault(); 


  if (!isValidUsername(usernameInput.value)) {
    alert('Please enter a username with 1 to 50 characters');
    usernameInput.focus();
    return;
  }


  form.submit();
});


function isValidUsername(username) {
  return username.length >= 1 && username.length <= 50;
}
