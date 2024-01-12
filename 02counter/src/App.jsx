import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  // let counter = 15;

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>React Course with Ijlal {counter}</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={removeValue}>Remove Value</button>
      <p>Footer: {counter}</p>
    </div>
  );
}

export default App;
