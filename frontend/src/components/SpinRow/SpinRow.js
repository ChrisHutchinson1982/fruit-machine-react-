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
      <div className="flex flex-col space-y-8 items-center text-4xl">
        <div data-cy="spin-row" className="flex flex-row space-x-4 ">
          {getSpins.map((spin, index) => {
            return (
              <div
                className="border-4 border-zinc-900 p-8 rounded-lg bg-zinc-50"
                key={index}
                data-cy={`spin${index + 1}`}
              >
                {spin}
              </div>
            );
          })}
        </div>
        <div>
          <button
            className="border-zinc-300 bg-red-600 font-mono px-32 py-1 text-2xl text-zinc-50  font-semibold rounded-lg border-2 hover:text-white hover:bg-green-600 hover:border-transparent"
            data-cy="spin-button"
            onClick={changeSpin}
          >
            Hit to spin
          </button>
        </div>
      </div>
      <SpinComment getSpins={getSpins} renderComments={renderComments} />
    </>
  );
};

export default SpinRow;
