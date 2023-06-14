import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("june 21 2017");
  date.setDate(date.getDate() + count);

  // function handleIncreaseStep() {
  //   setStep((s) => s + 1);
  // }
  // function handleReduceStep() {
  //   setStep((s) => s - 1);
  // }
  function handleIncreaseCount(e) {
    e.preventDefault();
    setCount((ct) => ct + step);
  }

  function handleReduceCount(e) {
    e.preventDefault();
    setCount((ct) => ct - step);
  }

  function handleReset(e) {
    e.preventDefault();
    setCount(0);
    setStep(1);
  }
  return (
    <>
      <form>
        <label>
          <input
            type="range"
            min="0"
            max="10"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          ></input>
          {step}
        </label>

        <div>
          <button onClick={handleReduceCount}>-</button>
          <label>
            <input
              type="number"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
            ></input>
          </label>
          <button onClick={handleIncreaseCount}>+</button>
        </div>
      </form>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>

        <span>{date.toDateString()}</span>
      </p>

      {count !== 0 || step !== 1 ? (
        <button type="reset" onClick={handleReset}>
          Reset
        </button>
      ) : null}
    </>
  );
}
