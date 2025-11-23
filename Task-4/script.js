const inputName = document.getElementById('inputName');
const inputEmail = document.getElementById('inputEmail');
const inputPass = document.getElementById('inputPass');
const subBtn = document.getElementById('subBtn');

let err = document.getElementsByClassName('error');

subBtn.addEventListener('click', (e) => {
  e.preventDefault();

  let isValid = true;

  if (inputName.value === "") {
    err[0].textContent = "*Field is required";
    inputName.style.border = "2px solid red";
    isValid = false;
  }
  else {
    inputName.style.border = "2px solid lightgreen";
  }

  if (inputEmail.value === "") {
    err[1].textContent = "*Field is required";
    inputEmail.style.border = "2px solid red";
    isValid = false;
  }
  else if (!inputEmail.value.includes('@')) {
    err[1].textContent = "Email must contain '@'";
    inputEmail.style.border = "2px solid red";
    isValid = false;
  }
  else {
    inputEmail.style.border = "2px solid lightgreen";
  }

  if (inputPass.value === "") {
    err[2].textContent = "*Field is required";
    inputPass.style.border = "2px solid red";
    isValid = false;
  }
  else if (inputPass.value.length < 8) {
    err[2].textContent = "Password must be at least 8 characters";
    inputPass.style.border = "2px solid red";
    isValid = false;
  }
  else {
    inputPass.style.border = "2px solid lightgreen";
  }

  if (isValid){
    alert("Form submitted successfully!");
  }
}
);
