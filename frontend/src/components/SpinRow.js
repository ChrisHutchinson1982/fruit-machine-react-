import { useState } from "react";

const SpinRow = () => {
  const [spinOne, setSpinOne] = useState("❓");
  const [spinTwo, setSpinTwo] = useState("❓");
  const [spinThree, setSpinThree] = useState("❓");

  const changeSpin = () => {
    const spinList = ["🍒", "🍌", "🍏", "🍊", "🍇"];

    const random = () => {
      return Math.floor(Math.random() * spinList.length);
    };

    setSpinOne(spinList[random()]);
    setSpinTwo(spinList[random()]);
    setSpinThree(spinList[random()]);
  };

  return (
    <>
      <div className="spin-row">
        <h2>{spinOne}</h2>
        <h2>{spinTwo}</h2>
        <h2>{spinThree}</h2>
      </div>
      <div className="spin-button">
        <button onClick={changeSpin}>Hit to spin</button>
      </div>
    </>
  );
};

export default SpinRow;
