import React, { useRef } from "react";

function FileUploadForm() {
  const fileInput = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const file = fileInput.current.files[0];
    alert(`Selected file - ${file.name}`);
    // You would typically upload the file here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Upload file:
        <input type="file" ref={fileInput} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FileUploadForm;
// This code defines a React component called FileUploadForm. It uses the useRef hook to create a reference to a file input element. When the form is submitted, it prevents the default behavior and alerts the name of the selected file. The component renders a form with a file input and a submit button. The file input allows users to select a file from their device, and the submit button triggers the handleSubmit function when clicked. The handleSubmit function retrieves the selected file using the ref and displays its name in an alert. This is a common pattern for handling file uploads in React applications.
// The component is exported as the default export, allowing it to be imported and used in other parts of the application. This example demonstrates how to manage file uploads in a React application using controlled components and refs.