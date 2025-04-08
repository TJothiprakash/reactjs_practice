import React from "react";

const InputHandling = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  function handleUpdateEmail(event) {
    setEmail(event.target.value);
  }

  function handleUpdatePassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted with email:", email, "and password:", password);
    setSubmitted(true);
    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={handleUpdateEmail}
        />
        <br />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handleUpdatePassword}
          placeholder="Enter your password"
        />
        <br />

        <button type="submit">Login</button>
      </form>

      <h2>Live Input:</h2>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
        <p>Submitted: {submitted ? "Yes" : "No"}</p>
      <p>
        <label>
          <input type="checkbox" />
          Remember Me
        </label>
      </p>

      <p>
        <a href="#">Forgot Password?</a>
      </p>
    </div>
  );
};

export default InputHandling;
