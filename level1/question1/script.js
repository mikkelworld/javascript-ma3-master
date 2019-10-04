//Use RegEx to validate form
function validateForm(event) {
	// Prevents form from submitting. Allows us to test first and submit through JS after validation.	
	event.preventDefault();

	// Get the form
	var contactForm = document.forms["contactForm"];
	// Get the field values
	var firstName = contactForm["firstname"].value;
	var lastName = contactForm["lastname"].value;
	var phone = contactForm["phone"].value;
	var email = contactForm["email"].value;	
	// Test phone and email against regex patterns
	var isPhoneValid = validatePhone(phone);
	var isEmailValid = validateEmail(email);

	// Note: We could also use regex for testing the first and last names, but since the assignment only asks for us to test that they arent empty, we will simply look at their length. 
	// This could also be achieved in html with the required attribute.

	// Make sure all criteria are met
	if (firstName.length > 0 && lastName.length > 0 && isPhoneValid && isEmailValid) {
		alert("The form is valid. We should probably call form.submit() now.");
		// At this point we could call contactForm.submit() in order to properly submit the form.
	}
}

function validateEmail(input) {
	var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return pattern.test(input);
}

function validatePhone(input) {
	var pattern = /^[0-9]{8}$/;
	return pattern.test(input);
}
