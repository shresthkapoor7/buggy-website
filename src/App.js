import React from "react";
import BadComponent from "./components/BadComponent";

function App() {
  return (
    <div>
      <h1>Buggy React App</h1>
      <p>Welcome! Please enter some data below:</p>

      {/* Accessibility Issue: Missing label */}
      <input type="text" placeholder="Enter your name" />

      {/* UI Issue: Color contrast problem */}
      <button
        onClick={() => alert("Clicked!")}
        style={{ backgroundColor: "yellow", color: "white" }}
      >
        Submit
      </button>

      {/* Code Issue: Insecure HTML rendering */}
      <BadComponent />
    </div>
  );
}

export default App;