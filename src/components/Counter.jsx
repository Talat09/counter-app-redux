import { useDispatch, useSelector } from "react-redux";
import { Decrement, Increment, Reset } from "../services/actions/counterAction";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  console.log("count", count);
  const handleIncrement = () => {
    dispatch(Increment());
  };
  const handleDecrement = () => {
    dispatch(Decrement());
  };
  const handleReset = () => {
    dispatch(Reset());
  };
  return (
    <div>
      <h1 className="text-4xl md:text-5xl text-center font-bold my-8">
        Welcome to <span className="text-purple-500">Counter APP</span>
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center ">
        <button
          className="p-4 bg-purple-500 text-white mx-8 text-3xl rounded-md my-4 md:my-0"
          onClick={handleDecrement}
        >
          Decrement
        </button>

        <h3 className="text-4xl">Count: {count}</h3>

        <button
          className="p-4 bg-purple-500 text-white mx-8 text-3xl rounded-md my-4 md:my-0"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="p-4 bg-purple-500 text-white mx-8 text-3xl rounded-md"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
//install redux
//install react redux
//1.state --> count:0
//2.action --> Increment  / Decrement
//3.reducer ---> logic  Increment -->count+1 |  Decrement -->count-1
//Reset --> count => 0
// 4.store
//dispatch
//5.providing store in index.js
//store must be define in root file index.js
