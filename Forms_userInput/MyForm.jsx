import React, { useState } from "react";


// Add a password field: Add a password field to the MyForm component and implement validation to ensure that it meets specific complexity requirements, such as containing a minimum of 8 characters, one uppercase letter, one lowercase letter, and one digit.
function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validatePassword = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!password) {
      setPasswordError("Password is required");
      return false;
    }
    else if (!passwordRegex.test(password)) {
      setPasswordError("Password must be at least 8 characters, one uppercase letter, one lowercase letter, and one digit");

      return false;
    }else {
      setPasswordError("");
      return true;
    }
  };



  const validateName = () => {
    if (!name) {
      setNameError("Name is required");
      return false;
    } else {
      setNameError("");
      return true;
    }
  };

  const validateEmail = () => {
    if (!email) {
      setEmailError("Email is required");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword(); // Validate password
    if (isNameValid && isEmailValid && isPasswordValid) {

    // if (isNameValid && isEmailValid) {
      alert("Form submitted successfully!");
      // Here you would typically submit the form data
    } else {
      alert("Please correct the errors in the form.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={validateName} // Validate on blur
        />
        {nameError && <div className="error">{nameError}</div>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateEmail} // Validate on blur
        />
        {emailError && <div className="error">{emailError}</div>}
      </div>
      <div className="div">
        <label htmlFor="password">Password : </label>
        <input  id="password"  value={password} onChange={(e)=>setPassword(e.target.value)}
          onBlur={validatePassword} // Validate on blur 
          showPassword={showPassword} // Show password based on state
          type={showPassword ? "text" : "password"} // Toggle between text and password types

        />
        {passwordError && <div className="error">{passwordError}</div>}
      
      </div>
      <div className="checkbox">
        <input
          type="checkbox"
          id="showPassword"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />
        <label htmlFor="showPassword">Show Password</label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
