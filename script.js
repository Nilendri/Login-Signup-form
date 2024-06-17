document.getElementById("sign-up").addEventListener("submit", function (event) {
  event.preventDefault();
  const username = document.getElementById("signup-username").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const errormsg = document.getElementById("signup-errormsg");
  errormsg.style.display = "none";
  if (username.length < 3) {
    errormsg.textContent = "username must be atleast 3 char";
    errormsg.style.display = "block";
    return;
  }
  if (!validemail(email)) {
    errormsg.textContent = "invalid email";
    errormsg.style.display = "block";
    return;
  }
  if (password.length < 5) {
    errormsg.textContent = "password Must be atleast 5 digit";
    errormsg.style.display = "block";
    return;
  }

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  alert("signup seccessfully");

  document.getElementById("sign-up").reset();
});
function validemail(email) {
  const char = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return char.test(String(email).toLowerCase());
}

const login = document.getElementById("log-in");
login.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  const errormsg = document.getElementById("login-errormsg");

  const name = localStorage.getItem("username");
  const Password = localStorage.getItem("password");
  if (username === name && password === Password) {
    alert("Login successfully");
    errormsg.style.display = "none";
  } else {
    errormsg.textContent = "invalid username or password";
    errormsg.style.display = "block";
  }
  login.reset();
});
document.getElementById("showlogin").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
  document.getElementById("signup-errormsg").style.display = "none";
});
document.getElementById("showsignup").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("signup-form").style.display = "block";
  document.getElementById("login-form").style.display = "none";
  document.getElementById("login-errormsg").style.display = "none";
});
