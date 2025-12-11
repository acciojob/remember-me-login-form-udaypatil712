const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

// Check if saved login exists in localStorage
if (localStorage.getItem("username") && localStorage.getItem("password")) {
  existingBtn.style.display = "block";
}

const submitbtn = document.getElementById("submit");

// FIXED: addEventListener syntax
submitbtn.addEventListener("click", (e) => {
  e.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  alert(`Logged in as ${username}`);

  if (checkbox.checked) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  // Show or hide existing user button
  if (localStorage.getItem("username")) {
    existingBtn.style.display = "block";
  } else {
    existingBtn.style.display = "none";
  }
});

// FIXED: Correct event and method
existingBtn.addEventListener("click", () => {
  const user = localStorage.getItem("username");
  alert(`Logged in as ${user}`);
});
