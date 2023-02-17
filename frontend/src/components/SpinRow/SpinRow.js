import { useState } from "react";
import SpinComment from "../SpinComment/SpinComment";

const SpinRow = () => {
  const [getSpins, setgetSpins] = useState(["❓", "❓", "❓"]);
  const [renderComments, setRenderComments] = useState(false);

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
    setRenderComments(true);
  };

  return (
    <>
      <div data-cy="spin-row" className="spin-row">
        {getSpins.map((spin, index) => {
          return (
            <>
              <div data-cy={`spin${index + 1}`}>{spin}</div>
            </>
          );
        })}
      </div>
      <div className="spin-button">
        <button data-cy="spin-button" onClick={changeSpin}>
          Hit to spin
        </button>
      </div>
      <SpinComment getSpins={getSpins} renderComments={renderComments} />
    </>
  );
};

export default SpinRow;
