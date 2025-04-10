import React from "react";
import useForm from "../useForm";
const validate = (values) => {
  const errors = {};
  if (!values.username) errors.username = "Username is required";
  if (!values.email) errors.email = "Email is required";
  else if (!/\S+@\S+\.\S+/.test(values.email))
    errors.email = "Email is invalid";
  if (!values.password) errors.password = "Password is required";
  else if (values.password.length < 6) errors.password = "Password too short";
  return errors;
};

const RegisterForm = () => {
  const initialValues = { username: "", email: "", password: "" };

  const onSubmit = (values) => {
    alert("Registered successfully! 🎉");
    console.log("Form Submitted:", values);
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useForm(initialValues, validate, onSubmit);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          name="username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.username && errors.username && <p>{errors.username}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && errors.email && <p>{errors.email}</p>}
      </div>

      <div>
        <label>Password:</label>
        <input
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.password && errors.password && <p>{errors.password}</p>}
      </div>

      <button type="submit">Register</button>
      <button type="button" onClick={resetForm}>
        Reset
      </button>
    </form>
  );
};

export default RegisterForm;
