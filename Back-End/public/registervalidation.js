function clearErrors() {
    let errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
      item.innerHTML = "";
    }
  }
  
  function seterror(id, error) {
    // Sets error inside tag of id
    let element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
  }
  
  function validateForm() {
    let returnval = true;
    clearErrors();
  
    // Validate Health-Id/Licence Number
    let fname = document.forms['myForm']['fname'].value;
    if (fname.length < 5) {
      seterror("fname", "*Health-Id/Licence Number should be at least 5 characters long");
      returnval = false;
    }
  
    // Validate Phone Number
    let fphone = document.forms['myForm']['fphone'].value;
    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(fphone)) {
      seterror("fphone", "*Phone number should be 10 digits");
      returnval = false;
    }
  
    // Validate Role Selection
    let role = document.forms['myForm']['role'].value;
    if (role === "Choose Role") {
      seterror("role", "*Please select a role");
      returnval = false;
    }
  
    // Validate Email
    let femail = document.forms['myForm']['femail'].value;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(femail)) {
      seterror("femail", "*Please enter a valid email address");
      returnval = false;
    }
  
    // Validate Password
    let Mpassword = document.forms['myForm']['Mpassword'].value;
    if (Mpassword.length < 6) {
      seterror("Mpassword", "*Password should be at least 6 characters long");
      returnval = false;
    }
  
    // Validate Confirm Password
    let Cpassword = document.forms['myForm']['Cpassword'].value;
    if (Cpassword !== Mpassword) {
      seterror("Cpassword", "*Passwords do not match");
      returnval = false;
    }
  
    return returnval;
  }
  