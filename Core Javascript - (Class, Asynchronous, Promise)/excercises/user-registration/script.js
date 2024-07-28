function validate() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const pw = document.getElementById("password").value;
    const pwC = document.getElementById("confirmPassword").value;
    const checked = document.querySelector("#terms:checked");

    if (name.trim() === "") {
      showError("Name cannot be empty");
      return false;
    }
  
    if (email.trim() === "") {
      showError("Email cannot be empty");
      return false;
    }
  
    if (phone.trim() === "" || isNaN(phone) || phone.length !== 10) {
      showError("Phone enter a 10 digit phone number");
      return false;
    }
  
    if (subject === "0") {
      showError("Please select your subject");
      return false;
    }
  
    if (pw.trim() === "" || pw.length !== 8) {
        showError("Please provide your 8 digit password");
        return false;
      }

      if (pwC !== pw) {
        showError("Please match with your password");
        return false;

      } 
      
      if (checked === null ) {
        showError("Please agree to the terms");
        return false;

      } else  if (checked !== null ) {
        alert("Form Completed Successfully")
      }

    function showError(message) {
      const errorElement = document.getElementById("demo");
      errorElement.style.color = "red";
      errorElement.style.textAlign = "center";
      errorElement.textContent = message;
    }
  }