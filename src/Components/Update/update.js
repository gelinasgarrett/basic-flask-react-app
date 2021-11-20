import React from "react";

// The userInput (aka: 'content') and the id are passed in from the web page... these are used in updateTodo to call the server
export const Update = ({ userInput, onFormChange, onFormSubmit }) => {
  const handleChange = (event) => {
    onFormChange(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          value={userInput}
          onChange={handleChange}
        ></input>
        <input type="submit" value="Update Todo"></input>
      </form>
    </>
  );
};
