import "./App.css";
import SpinRow from "./components/SpinRow";
import SpinComment from "./components/SpinComment";
import { useState } from "react";

function App() {
  const [spinComment, setSpinComment] = useState("");

  return (
    <div className="App">
      <h1>Fruit Machine</h1>
      <SpinRow setSpinComment={setSpinComment} />
      <SpinComment spinComment={spinComment} />
    </div>
  );
}

export default App;
