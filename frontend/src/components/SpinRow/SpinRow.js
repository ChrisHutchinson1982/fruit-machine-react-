import { useState } from "react";

const SpinRow = (props) => {
  const [getSpins, setgetSpins] = useState(["❓", "❓", "❓"]);

  const changeSpin = () => {
    const spinList = ["🍒", "🍌", "🍏", "🍊", "🍇"];
    let spins = [];
    const random = () => {
      return Math.floor(Math.random() * spinList.length);
    };

    for (let i = 0; i < 3; i++) {
      spins.push(spinList[random()]);
    }

    setgetSpins(spins);

    if (spins[0] === spins[1] && spins[1] === spins[2]) {
      props.setSpinComment("WIN! WIN! WIN!");
    } else if (spins[0] !== spins[1] && spins[1] !== spins[2]) {
      props.setSpinComment("UNLUCKY!");
    } else {
      props.setSpinComment("ALMOST!");
    }
  };

  return (
    <>
      <div data-cy="spin-row" className="spin-row">
        <div data-cy="spin1">{getSpins[0]}</div>
        <div data-cy="spin2">{getSpins[1]}</div>
        <div data-cy="spin3">{getSpins[2]}</div>
      </div>
      <div className="spin-button">
        <button onClick={changeSpin}>Hit to spin</button>
      </div>
    </>
  );
};

export default SpinRow;
