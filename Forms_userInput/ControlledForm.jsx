import React, { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [country, setCountry] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("Country:", country);
    console.log("Terms Checked:", termsChecked);
    // Here you would typically send the data to a server
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <br />
      <br />
      <label htmlFor="country">Country:</label>
      <select
        id="country"
        name="country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <option value="">Select a country</option>
        <option value="USA">USA</option>
        <option value="India">India</option>
        <option value="UK">UK</option>
        <option value="Canada">Canada</option>
        <option value="Australia">Australia</option>
        <option value="Germany">Germany</option>
        <option value="France">France</option>
      </select>
      <br />
      <br />
      <label>
        <input
          type="checkbox"
          checked={termsChecked}
          onChange={(e) => setTermsChecked(e.target.checked)}
        />{" "}
        I agree to the terms and conditions
      </label>
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;
