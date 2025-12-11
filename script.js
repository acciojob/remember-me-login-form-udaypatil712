//your JS code here. If required.
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

// Check if saved login exists in localStorage
const savedUser = localStorage.getItem("username");
const savedPass = localStorage.getItem("password");

if (savedUser && savedPass) {
  existingBtn.style.display = "block"; // Show existing user button
}

let submitbtn= document.getElementById("submit");
submitbtn.addEventListener('click' (e)=>{
	e.preventDefault();

	let username = usernameInput.value;
	let password = passwordInput.value;

	alert(`Logged in as ${username}`)
	
	if(checkbox.checked){
		localStorage.setItem("username" , username);
		localStorage.setItem("password" , password);
		
	}else{
		localStorage.removeItem("username");
		localStorage.removeItem("password");
		
	}

	if(localStorage.getItem("username")){
		existingBtn.style.display = "block";
	}else{
		existingBtn.style.display = "none";
	}
});


existingBtn.addListener('click' ,() => {
	let username = localStorage.getItem("username");
	alert(`Logged in as saved ${username}`)
})






