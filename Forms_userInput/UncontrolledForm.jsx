import React, { useRef } from "react";

function UncontrolledForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const countryRef = useRef(null);
  const termsCheckedRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", nameRef.current.value);
    console.log("Email:", emailRef.current.value);
    console.log("Message:", messageRef.current.value);
    console.log("Country:", countryRef.current.value);
    console.log("Terms Checked:", termsCheckedRef.current.checked);
    // Typically, you'd send this data to a server
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" ref={nameRef} />
      <br />
      <br />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" ref={emailRef} />
      <br />
      <br />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" ref={messageRef}></textarea>
      <br />
      <br />

      <label htmlFor="country">Country:</label>
      <select id="country" name="country" ref={countryRef}>
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
        <input type="checkbox" ref={termsCheckedRef} /> I agree to the terms and
        conditions
      </label>
      <br />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
