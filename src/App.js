import "./styles.css";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export default function App() {
  const [test, setTest] = useState(1234);
  const [tcolor, setTcolor] = useState("#000000");
  function clicker() {
    if (test % 2 == 0) {
      setTest(test / 2);
    } else {
      setTest(test * 3 + 1);
    }
    // setTest(test+1)
    const randColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setTcolor(randColor);
    console.log(test);
  }

  const render = () => {
    document.getElementById("mountNode").innerHTML = `
      <div>
        Hello HTML
        <input />
        <pre>${new Date().toLocaleTimeString()}</pre>
      </div>
    `;

    ReactDOM.render(
      React.createElement(
        "div",
        null,
        "Hello React",
        React.createElement("input", null),
        React.createElement("pre", null, new Date().toLocaleTimeString())
      ),
      document.getElementById("mountNode2")
    );
  };

  setInterval(render, 1000);

  return (
    <div className="App">
      <h3>Let's see collatz conjecture in action: {test} </h3>
      <button onClick={clicker}>click for magic</button>
      <h4 style={{ color: tcolor }}>color changing magic ooooo scary</h4>
    </div>
  );
}
