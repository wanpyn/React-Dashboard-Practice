import React from "react";

const Forms = () => {
  return (
    <div>
      <h2>Forms Page</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Forms;
