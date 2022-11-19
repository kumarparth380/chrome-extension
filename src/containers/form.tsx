import React from "react";

const Form = () => {
  return (
    <div className="flex flex-col">
      <h1>Hello, world!</h1>
      <p>This is a sample popup!!</p>
      <form>
        <select>
          <option value="phishing">Phishing</option>
          <option value="spoofing">Spoofing</option>
        </select>
      </form>
    </div>
  );
};

export default Form;
