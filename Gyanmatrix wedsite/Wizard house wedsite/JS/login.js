function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email == "aswin@example.com" && (password=="feet"||password=="salt")) {
      return true;
    }
    else if (email == "") {
      alert("Please enter your Email");
      return false;
    }
    else if(email!=="aswin@example.com")
    {alert("incorect Email");
    return false;
    }
    else if(password=="")
    {
        alert("Please enter your password");
        return false;
    }
    else if(password!="feet" || password!="salt"){
        alert("incorect password");
        return false;
    }
    if (!email.match(emailRegex)) {
      alert("Please enter a valid email address");
      return false;
    }
    if(password.length < 4){
        alert("valid password needed");
        return false;
    }
    
    return true;
  }