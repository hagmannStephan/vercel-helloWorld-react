import React, { useState } from "react";
import './App.css';

function Welcome(props) {
  return (
    <div>Hello {props.name}</div>
  );
}

function App() {
  const [isToggled, setToggled] = useState(true);
  const [counterState, setCounterState] = useState(0);
  const [inputText, setInputText] = useState("");
  const [historyList, setHistoryList] = useState([]);

  const toggleTrueFalse = () => setToggled(!isToggled);
  const incrementCounter = () => setCounterState(counterState + 1);
  const decrementCounter = () => setCounterState(counterState - 1);

  return (
    <div className="App">
      <Welcome name='Stephan'></Welcome>
      <h3>Button Examples</h3>
      <button
        className="App-button"
        onClick={() => toggleTrueFalse()}
      >
        {isToggled ? "on" : "off"}
      </button>
      <p />
      <button onClick={incrementCounter}>{"+ " + counterState}</button>
      <p />
      <button onClick={decrementCounter}>{"- " + counterState}</button>
      <p />
      <form>
        <label>
          Name:
          <input
            type="text"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
              setHistoryList([...historyList, e.target.value]);
            }}
          />
          <p>{inputText}</p>
          <p>
            <ul>
              {historyList.map((rec) => {
                return <div>{rec}</div>;
              })}
            </ul>
          </p>
        </label>
      </form>
    </div>
  );
}

export default App;
