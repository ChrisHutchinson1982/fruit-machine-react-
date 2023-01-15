import "./App.css";
import { useState } from "react";

// JSX - Jaascript Extended
// Import concepts
// - Props
// - State

function App() {
  const [spinOne, setSpinOne] = useState("❓");
  const [spinTwo, setSpinTwo] = useState("❓");
  const [spinThree, setSpinThree] = useState("❓");

  const changeSpin = () => {
    setSpinOne("🍒");
    setSpinTwo("🍒");
    setSpinThree("🍒");
  };

  return (
    <div className="App">
      <h1>Fruit Machine</h1>
      <div className="spin-row">
        <h2 className="spin-one">{spinOne}</h2>
        <h2 className="spin-two">{spinTwo}</h2>
        <h2 className="spin-three">{spinThree}</h2>
      </div>
      <div className="spin-button">
        <button onClick={changeSpin}>Hit to spin</button>
      </div>
      <div className="comment-container">
        <h2 className="comment">Spin the wheel, it might be your lucky day!</h2>
      </div>
    </div>
  );
}

export default App;
