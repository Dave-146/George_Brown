function validateForm() {
    const form = document.form["form"];

    let userInput = document.getElementById("username");
    let emailInput = document.getElementById("email");
    let passInput = document.getElementById("password");
 
  // Validate the username field
  if(userInput.value ===""){
    console.log("username cannot be empty");
    console.log("form submission failed");
    return false;
  }else if (!/^[a-zA-Z0-9]+$/.test(userInput.value)) {
    console.log("Username must contain only letters and numbers.");
    console.log("Form submission failed.");
    return false;
  }
   // Validate the email field
   if (emailInput.value === "") {
    console.log("Email cannot be empty.");
    console.log("Form submission failed.");
    return false;
  } else if (!/@/.test(emailInput.value)) {
    console.log("Email must contain an '@' character.");
    console.log("Form submission failed.");
    return false;
  }
    // Validate the password field
  if (passInput.value === "") {
    console.log("Password cannot be empty.");
    console.log("Form submission failed.");
    return false;
  } else if (password.length < 8) {
    console.log("Password must be at least 8 characters long.");
    console.log("Form submission failed.");
    return false;
  }
   // If all fields are valid, log a success message and return true
   console.log('Form submitted successfully');
   return true;
  }