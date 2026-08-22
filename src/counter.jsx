import { useEffect, useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./DataContext";

function Counter() {
  const [count, setCount] = useState(0);
  const data = useContext(DataContext);

  let refcount = useRef(0);

  function inc() {
    setCount(count + 1);
    // console.log(count);
  }

  function dec() {
    // setCount(count - 1);
    
    // console.log(count);
    refcount.current -= 1;
  }

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <>
      <div className="m-5  flex flex-col gap-5 justify-center items-center">
        <h2 className="text-7xl font-extrabold text-blue-600 ">{count}</h2>

        <p>{data}</p>

        <div className="flex flex-row gap-5">
          <Link to="/home">Home</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/app">App</Link>
        </div>

        <div className="flex flex-row gap-5">
          <button
            onClick={inc}
            className="bg-green-800  px-5 py-2 rounded text-white font-bold"
          >
            UP
          </button>
          <button
            onClick={dec}
            className="bg-red-600  px-5 py-2 rounded text-white font-bold"
          >
            down
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
