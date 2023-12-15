import React, { useState } from "react";
import './App.css';

function App() {
    const [counterState, setCounterState] = useState(0);
  
    const resetCounter = () => setCounterState(0);
    const incrementCounter = () => setCounterState(counterState + 1);
    const decrementCounter = () => setCounterState(counterState - 1);
    const setCounter = (event) => setCounterState(parseInt(event.target.value));

    return (
        <div>
            <button onClick={incrementCounter}>Increase</button>
            <p>The value of the counter is: {counterState}</p>
            <button onClick={decrementCounter}>Decrease</button>
            <button onClick={resetCounter}>Reset</button>

            <input type="text" onChange={setCounter}></input>
        </div>
    )
}

export default App;
