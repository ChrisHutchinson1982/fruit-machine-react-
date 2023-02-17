import "./App.css";
import SpinRow from "./components/SpinRow/SpinRow";
// import SpinComment from "./components/SpinComment/SpinComment";
import { useState } from "react";

function App() {
  // const [spinComment, setSpinComment] = useState("");

  return (
    <div className="App">
      <h1>Fruit Machine</h1>
      <SpinRow />
      {/* <SpinComment spinComment={spinComment} /> */}
    </div>
  );
}

export default App;
