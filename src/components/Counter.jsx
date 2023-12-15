import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(() => count + 1);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(() => count - 1);
    }
  };
  return (
    <div>
      <h1 className="text-5xl text-center font-bold my-8">
        Welcome to <span className="text-purple-500">Counter APP</span>
      </h1>
      <div className="flex justify-center items-center">
        <button
          className="p-4 bg-purple-500 text-white mx-8 text-3xl rounded-md"
          onClick={handleDecrement}
        >
          Decrement
        </button>

        <h3 className="text-4xl">Count: {count}</h3>

        <button
          className="p-4 bg-purple-500 text-white mx-8 text-3xl rounded-md"
          onClick={handleIncrement}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;

//state --> count:0
//action --> Increment  / Decrement
//reducer ---> logic  Increment -->count+1 |  Decrement -->count-1
//Reset --> count => 0
// store
//dispatch
