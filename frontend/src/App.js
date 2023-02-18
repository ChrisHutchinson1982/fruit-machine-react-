import "./App.css";
import SpinRow from "./components/SpinRow/SpinRow";

function App() {
  return (
    <>
      <main id="main-container">
        <div className="flex flex-col justify-center border-4 border-zinc-900 p-8 rounded-lg w-1/3 mx-auto mt-8 text-center bg-amber-500">
          <div className=" text-zinc-900 text-5xl font-bold normal-case font-mono border-4 border-zinc-200 p-2  bg-amber-300">
            <span>Fruit Machine</span>
          </div>
          <div className="flex flex-col justify-center space-y-8 items-center pt-10">
            <SpinRow />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
