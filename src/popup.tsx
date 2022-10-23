import React from "react";
import { render } from "react-dom";

const Popup: React.FC = () => {
  return (
    <div>
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

render(<Popup />, document.getElementById("root"));
