import React, { useState } from "react";
import Button from "./Button";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [desc, setDesc] = useState("");
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Click me to Increase by 1
      </button>
      <button onClick={() => setCount(count - 1)}>
        Click me to decrease by 1
      </button>
      <button onClick={() => setCount(0)}>Click me to refresh</button>
      <Button text="Like me" color="red" />
      <Button text="Hate Me" color="yellow" />
      <input type="text" onChange={(e) => setDesc(e.target.value)} />
      <h3>{desc}</h3>
    </div>
  );
};

export default Counter;
