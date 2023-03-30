import React from "react";
import { validateEmail } from "../utils.js";

export default function Contact() {
  // set the state for the form
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  // set the state for the error message
  const [errorMessage, setErrorMessage] = React.useState("");

  // function to handle the form submission
  function handleSubmit(event) {
    event.preventDefault();
    // if the form is valid, send the form data to the server
    if (!errorMessage) {
      alert("Form submitted successfully, Thank you!");
    } else {
      alert("Please fill out the form correctly");
    }
  }

  // function to handle the form input
  function handleChange(event) {
    // set the state of the form
    setFormState({ ...formState, [event.target.name]: event.target.value });
    // if the email is valid, set the error message to an empty string
    if (event.target.name === "email") {
      const isValid = validateEmail(event.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      // if the email is invalid, set the error message to the error message
      if (!event.target.value.length) {
        setErrorMessage(`${event.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
  }

  return (
    <section className="flex flex-col items-center">
      <h1 className="my-5 font-bebas-neue text-6xl text-deep-purple">
        Contact Me
      </h1>
      <form
        id="contact-form"
        className="m-2 rounded-md bg-mid-purple bg-opacity-30 p-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            defaultValue={formState.name}
            onBlur={handleChange}
            name="name"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            defaultValue={formState.email}
            onBlur={handleChange}
            name="email"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            defaultValue={formState.message}
            onBlur={handleChange}
            rows="5"
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button
          type="submit"
          className="mx-2 my-1 rounded-lg bg-deep-purple px-2 py-1 text-center font-bebas-neue text-white"
        >
          Submit
        </button>
      </form>

      <div className="my-3 text-sm">
        <h2>Or, you can reach out to me through LinkedIn below</h2>
      </div>
    </section>
  );
}
