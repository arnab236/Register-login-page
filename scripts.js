const form = document.querySelector('.login-form');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', event => {
	event.preventDefault();
	
	const username = form.username.value;
	const password = form.password.value;

	// You can replace the hardcoded values with your own authentication logic
	if (username === 'myusername' && password === 'mypassword') {
		// Redirect to dashboard page or display success message
		window.location.href = 'dashboard.html';
	} else {
		errorMessage.textContent = 'Invalid username or password';
	}
});