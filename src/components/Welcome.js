import React from "react";
import { useState } from "react";

const Welcome = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const fullName = firstName + ' ' + lastName;

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setlastName(e.target.value);
  }

  return (
    <>
      <h2>Let's check you in </h2>
      <label>
        First name ;{" "}
        <input value={firstName} onChange={handleFirstNameChange} />
      </label>

      <label>
        Last name : <input value={lastName} onChange={handleLastNameChange} />
      </label>
      <p>This is my full name : {fullName} </p>
    </>
  );
};

export default Welcome;
